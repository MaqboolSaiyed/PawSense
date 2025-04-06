import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors"
    >
      <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
      <span>Upload Another Image</span>
    </button>
  );
}