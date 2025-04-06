import React, { useState } from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { MainContent } from './components/MainContent';
import { EmotionResult, UploadState } from './types';
import { analyzeImage } from './api/emotions';

function App() {
  const [uploadState, setUploadState] = useState<UploadState>({ status: 'idle' });
  const [result, setResult] = useState<EmotionResult | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileSelect = async (file: File) => {
    try {
      setUploadState({ status: 'uploading' });
      setPreviewUrl(URL.createObjectURL(file));
      
      const response = await analyzeImage(file);
      
      setResult(response);
      setUploadState({ status: 'success' });
    } catch (error) {
      setUploadState({ 
        status: 'error', 
        error: error instanceof Error ? error.message : 'Failed to analyze image. Please try again.' 
      });
    }
  };

  return (
    <Layout>
      <Header />
      <MainContent
        uploadState={uploadState}
        result={result}
        previewUrl={previewUrl}
        onFileSelect={handleFileSelect}
      />
    </Layout>
  );
}

export default App;