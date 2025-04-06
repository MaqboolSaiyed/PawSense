import React from 'react';
import { FileUpload } from './FileUpload';
import { LoadingState } from './LoadingState';
import { ImagePreview } from './ImagePreview';
import { ImageAnalysis } from './ImageAnalysis';
import { About } from './About';
import { BackButton } from './BackButton';
import { EmotionResult, UploadState } from '../types';

interface MainContentProps {
  uploadState: UploadState;
  result: EmotionResult | null;
  previewUrl: string | null;
  onFileSelect: (file: File) => void;
}

export function MainContent({ uploadState, result, previewUrl, onFileSelect }: MainContentProps) {
  const [imageDetails, setImageDetails] = React.useState<{
    size: string;
    dimensions: string;
  } | null>(null);

  const handleFileSelect = async (file: File) => {
    const size = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
    const img = new Image();
    img.src = URL.createObjectURL(file);
    await new Promise((resolve) => {
      img.onload = () => {
        setImageDetails({
          size,
          dimensions: `${img.width}x${img.height}`,
        });
        resolve(null);
      };
    });

    onFileSelect(file);
  };

  const handleReset = () => {
    setImageDetails(null);
    onFileSelect(null as any); // Reset the parent state
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {!result && (
        <>
          <FileUpload
            onFileSelect={handleFileSelect}
            isUploading={uploadState.status === 'uploading'}
          />
          <About />
        </>
      )}

      {uploadState.status === 'uploading' && (
        <div className="flex items-center justify-center">
          <LoadingState />
        </div>
      )}

      {uploadState.status === 'error' && (
        <div className="text-center text-rose-600">
          {uploadState.error}
        </div>
      )}

      {uploadState.status === 'success' && result && previewUrl && (
        <>
          <BackButton onClick={handleReset} />
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <ImagePreview url={previewUrl} />
            </div>
            {imageDetails && <ImageAnalysis result={result} imageDetails={imageDetails} />}
          </div>
        </>
      )}
    </div>
  );
}