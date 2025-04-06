export type Emotion = 'Happy' | 'Sad' | 'Angry' | 'Relaxed';

export interface EmotionResult {
  predictedEmotion: Emotion;
  confidenceScores: Record<Emotion, number>;
}

export interface UploadState {
  status: 'idle' | 'uploading' | 'success' | 'error';
  error?: string;
}