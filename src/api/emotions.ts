const API_URL = 'http://localhost:5000/api';

export async function analyzeImage(file: File): Promise<{
  predictedEmotion: string;
  confidenceScores: Record<string, number>;
}> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_URL}/analyze`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to analyze image');
  }

  return response.json();
}