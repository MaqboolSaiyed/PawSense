# 🐾 PawSense: AI-Powered Dog Emotion Recognition 🐶

**Ever wondered what your furry friend is *really* feeling? PawSense uses the power of AI to decode dog emotions from images!**

This web application analyzes uploaded images of dogs to predict their emotional state, classifying them into four categories: **Angry**, **Happy**, **Relaxed**, or **Sad**[cite: 5].

## ✨ Features

* **🧠 AI Emotion Analysis:** Leverages a deep learning model (fine-tuned MobileNet [cite: 5, 6]) trained on a specialized dataset [cite: 3] to predict dog emotions.
* **⬆️ Easy Image Upload:** Simple drag-and-drop or click-to-upload interface.
* **📊 Confidence Scores:** Displays the model's confidence level for each potential emotion.
* **🚀 Real-time Feedback:** Quick analysis and display of results.
* **📱 Responsive Design:** Accessible and user-friendly on various devices.
* **🎨 Clean UI:** Intuitive interface built with React and Tailwind CSS.

## 🛠️ Technology Stack

* **Backend:** Flask[cite: 1], Python
* **Frontend:** React, Tailwind CSS
* **Machine Learning:** TensorFlow[cite: 2], Keras, MobileNet[cite: 5], NumPy, Pillow
* **Dataset:** Dog Emotion Dataset (Kaggle) [cite: 3]

## 📂 Project Structure

```plaintext
pawsense-project/
├── backend/
│   ├── app.py             # Flask application
│   └── requirements.txt   # Backend dependencies
├── frontend/
│   ├── public/
│   ├── src/               # React components, styles, etc.
│   ├── package.json
│   └── ...                # Other frontend files (config, etc.)
└── README.md              # This file

## 🚀 Getting Started

Follow these instructions to set up and run PawSense locally.

### Prerequisites

* Python 3.x
* Node.js and npm

### Backend Setup (Flask)

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Create and activate a Python virtual environment:**
    ```bash
    python -m venv venv
    # On macOS/Linux:
    source venv/bin/activate
    # On Windows:
    venv\Scripts\activate
    ```
3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
    *Dependencies include:* `flask==3.0.2`, `flask-cors==4.0.0`, `pillow==10.2.0`, `numpy==1.26.4`, `tensorflow==2.15.0`
4.  **Run the Flask server:**
    ```bash
    python app.py
    ```
    The backend will be available at `http://localhost:5000`.

### Frontend Setup (React)

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The frontend will be available at `http://localhost:5173`.

## 💻 Usage

1.  Open your web browser and navigate to `http://localhost:5173`.
2.  Drag and drop an image file of a dog onto the upload area, or click the area to select a file.
3.  Wait a moment for the AI model to analyze the image.
4.  View the predicted emotion ("Angry", "Happy", "Relaxed", or "Sad") along with the confidence scores for each category.

## 🤖 Model Details

* **Base Model:** MobileNet (pre-trained on ImageNet) [cite: 5]
* **Fine-tuning:** The model was fine-tuned on the Dog Emotion dataset[cite: 3, 5]. Specific layers were unfrozen for better adaptation[cite: 5].
* **Training:** Trained using TensorFlow/Keras with techniques like data augmentation, L2 regularization, dropout, Adam optimizer, and callbacks (ReduceLROnPlateau, EarlyStopping)[cite: 3, 5, 6, 7].
* **Classes:** Angry, Happy, Relaxed, Sad [cite: 5]
* **Input Size:** 224x224 pixels [cite: 3, 5]
* **Performance:** Achieved a validation accuracy of approximately 80.5% during training[cite: 20].

## 💡 Future Ideas

* Expand the emotion categories.
* Incorporate video analysis.
* Improve model accuracy with more data or different architectures.
* Add breed-specific considerations (if applicable).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Enjoy using PawSense to better understand your canine companions!
