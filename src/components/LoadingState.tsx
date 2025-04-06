import React from 'react';

export function LoadingState() {
  return (
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary-600 border-t-transparent mx-auto"></div>
      <p className="mt-4 text-primary-600">Analyzing your pet's emotions...</p>
    </div>
  );
}