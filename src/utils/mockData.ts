import { EmotionResult } from '../types';

export const generateMockResult = (): EmotionResult => {
  const emotions = ['Happy', 'Sad', 'Angry', 'Relaxed'] as const;
  const scores = emotions.reduce((acc, emotion) => {
    acc[emotion] = Math.random();
    return acc;
  }, {} as Record<typeof emotions[number], number>);

  // Normalize scores to sum to 1
  const sum = Object.values(scores).reduce((a, b) => a + b, 0);
  Object.keys(scores).forEach((key) => {
    scores[key as typeof emotions[number]] /= sum;
  });

  const predictedEmotion = emotions[Math.floor(Math.random() * emotions.length)];

  return {
    predictedEmotion,
    confidenceScores: scores,
  };
};