import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-sage-50">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="transform-gpu animate-pulse-slow absolute -inset-96 bg-gradient-to-r from-primary-100/20 to-sage-100/20 opacity-50 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          {children}
        </div>
      </div>
    </div>
  );
}