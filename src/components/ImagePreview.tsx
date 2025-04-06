import React from 'react';

interface ImagePreviewProps {
  url: string;
}

export function ImagePreview({ url }: ImagePreviewProps) {
  return (
    <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
      <img
        src={url}
        alt="Preview"
        className="w-full h-full object-cover"
      />
    </div>
  );
}