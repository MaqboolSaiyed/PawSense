import React from 'react';
import { Brain, Heart, Github } from 'lucide-react';

export function About() {
  const facts = [
    "Dogs can understand over 250 words and gestures!",
    "A dog's nose print is unique, just like a human's fingerprint.",
    "Dogs can smell your feelings!",
  ];

  return (
    <div className="space-y-12 mt-12">
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">About PawSense</h2>
        <p className="text-gray-600">
          PawSense helps decode your dog's emotions with advanced AI, ensuring you understand
          your furry friend better than ever! Our cutting-edge technology analyzes your dog's
          facial expressions to determine their emotional state.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-primary-100"
          >
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-5 h-5 text-primary-600" />
              <h3 className="font-medium text-gray-900">Did You Know?</h3>
            </div>
            <p className="text-gray-600">{fact}</p>
          </div>
        ))}
      </section>

      <footer className="border-t border-gray-100 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary-600" />
            <span className="text-gray-600">Made with love for dogs everywhere</span>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </div>
      </footer>
    </div>
  );
}