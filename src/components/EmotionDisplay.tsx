import React from 'react';
import { EmotionResult } from '../types';

interface EmotionDisplayProps {
  result: EmotionResult;
}

export function EmotionDisplay({ result }: EmotionDisplayProps) {
  const emotions = Object.entries(result.confidenceScores).sort(
    ([, a], [, b]) => b - a
  );

  const getEmotionColor = (emotion: string) => {
    const colors = {
      Happy: 'bg-primary-100 text-primary-800 border-primary-200',
      Sad: 'bg-sage-100 text-sage-800 border-sage-200',
      Angry: 'bg-rose-100 text-rose-800 border-rose-200',
      Relaxed: 'bg-primary-100/50 text-primary-800 border-primary-200',
    };
    return colors[emotion as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <span
          className={`inline-block px-6 py-3 rounded-full text-lg font-medium border ${getEmotionColor(
            result.predictedEmotion
          )}`}
        >
          {result.predictedEmotion}
        </span>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-primary-100 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Analysis Results</h3>
        <div className="space-y-4">
          {emotions.map(([emotion, score]) => (
            <div key={emotion} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">{emotion}</span>
                <span className="text-gray-500">{(score * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${getEmotionColor(emotion)}`}
                  style={{ width: `${score * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}