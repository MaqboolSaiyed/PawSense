import React from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { EmotionResult } from '../types';
import { ProgressBar } from './ProgressBar';
import { Card3D } from './Card3D';

interface ImageAnalysisProps {
  result: EmotionResult;
  imageDetails: {
    size: string;
    dimensions: string;
  };
}

export function ImageAnalysis({ result, imageDetails }: ImageAnalysisProps) {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const emotionEmojis: Record<string, string> = {
    Happy: '😊',
    Sad: '😢',
    Angry: '😠',
    Relaxed: '😌',
  };

  const emotionTips: Record<string, string> = {
    Happy: "Keep the joy flowing with some playtime!",
    Sad: "Try spending extra quality time together.",
    Angry: "Give them some space and calm reassurance.",
    Relaxed: "Keep this vibe going by offering a comfy space!",
  };

  return (
    <div className="space-y-6 w-full lg:w-1/2 p-6">
      <Card3D className="p-6">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Your dog's unique personality shines through!
          </h2>
          <div className="text-3xl font-bold text-primary-600 flex items-center justify-center lg:justify-start gap-2">
            {emotionEmojis[result.predictedEmotion]} {result.predictedEmotion}
          </div>
        </div>
      </Card3D>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-primary-100 hover:bg-white transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
      >
        <span className="font-medium text-gray-900">Analysis Details</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {isExpanded && (
        <Card3D className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
                <Info className="w-4 h-4" /> Image Details
              </h3>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="text-gray-500">Size</dt>
                  <dd className="font-medium text-gray-900">{imageDetails.size}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Dimensions</dt>
                  <dd className="font-medium text-gray-900">{imageDetails.dimensions}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Confidence Scores</h3>
              <div className="space-y-4">
                {Object.entries(result.confidenceScores).map(([emotion, score]) => (
                  <div key={emotion} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{emotion}</span>
                      <span className="font-medium text-gray-900">
                        {(score * 100).toFixed(1)}%
                      </span>
                    </div>
                    <ProgressBar value={score} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Tip</h3>
            <p className="text-gray-600">{emotionTips[result.predictedEmotion]}</p>
          </div>
        </Card3D>
      )}
    </div>
  );
}