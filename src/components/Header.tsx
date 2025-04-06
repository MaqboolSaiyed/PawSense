import React from 'react';
import { Dog } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <Dog className="w-10 h-10 text-primary-600" />
        <h1 className="text-4xl font-bold text-gray-900 ml-3">PawSense</h1>
      </div>
      <p className="text-gray-600 text-lg">
        Understand your furry friend's emotions with AI
      </p>
    </div>
  );
}