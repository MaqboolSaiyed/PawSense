import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  isUploading: boolean;
}

export function FileUpload({ onFileSelect, isUploading }: FileUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="w-full">
      <label
        htmlFor="file-upload"
        className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-primary-200 rounded-2xl cursor-pointer bg-primary-50/50 hover:bg-primary-50 transition-colors"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-12 h-12 mb-4 text-primary-600" />
          <p className="mb-2 text-sm text-primary-900">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-primary-600">PNG, JPG, JPEG (MAX. 10MB)</p>
        </div>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
          disabled={isUploading}
        />
      </label>
    </div>
  );
}