import React from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export function Card3D({ children, className = '' }: Card3DProps) {
  return (
    <div
      className={`group relative bg-white/80 backdrop-blur-sm rounded-xl border border-primary-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-100/10 to-sage-100/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">{children}</div>
    </div>
  );
}