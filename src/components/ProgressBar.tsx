import React from 'react';

interface ProgressBarProps {
  value: number;
  color?: string;
}

export function ProgressBar({ value, color = 'primary' }: ProgressBarProps) {
  return (
    <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className={`absolute top-0 left-0 h-full bg-${color}-600 rounded-full transition-all duration-500 transform hover:scale-x-[1.02] origin-left`}
        style={{ width: `${value * 100}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
    </div>
  );
}