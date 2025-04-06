from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
import os
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'temp_uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
MODEL_PATH = 'PawSense_MobileNet.h5'

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Load the model at startup
model = None
try:
    model = load_model(MODEL_PATH)
except Exception as e:
    print(f"Error loading model: {e}")
    # Fallback to mock predictions if model fails to load
    model = None

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def preprocess_image(image):
    # Resize image to match model's expected input
    img = image.resize((224, 224))
    # Convert to array and preprocess
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # Normalize
    return img_array

def predict_emotion(image):
    emotions = ['Happy', 'Sad', 'Angry', 'Relaxed']
    
    if model is not None:
        try:
            # Preprocess the image
            processed_img = preprocess_image(image)
            # Get model predictions
            predictions = model.predict(processed_img)[0]
            predicted_idx = np.argmax(predictions)
            
            return {
                'predictedEmotion': emotions[predicted_idx],
                'confidenceScores': {
                    emotion: float(score) 
                    for emotion, score in zip(emotions, predictions)
                }
            }
        except Exception as e:
            print(f"Error during prediction: {e}")
    
    # Fallback to mock predictions if model fails or isn't loaded
    scores = np.random.dirichlet(np.ones(len(emotions)))
    predicted_idx = np.argmax(scores)
    
    return {
        'predictedEmotion': emotions[predicted_idx],
        'confidenceScores': {
            emotion: float(score) 
            for emotion, score in zip(emotions, scores)
        }
    }

@app.route('/api/analyze', methods=['POST'])
def analyze_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    if not allowed_file(file.filename):
        return jsonify({'error': 'Invalid file format'}), 400
    
    try:
        # Read and process the image
        img_bytes = file.read()
        img = Image.open(io.BytesIO(img_bytes))
        
        # Process the image and get predictions
        result = predict_emotion(img)
        
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)