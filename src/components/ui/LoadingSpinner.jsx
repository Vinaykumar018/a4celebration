import React from 'react';
import { RotateCw } from 'lucide-react';

const LoadingSpinner = ({ size = 24, color = 'text-amber-600', className = '' }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <RotateCw 
        className={`animate-spin ${color}`} 
        size={size} 
      />
    </div>
  );
};

export default LoadingSpinner;

