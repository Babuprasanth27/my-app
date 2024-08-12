import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col items-center">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <div className="w-8 h-8 bg-green-600 rounded-full"></div>
          <div className="w-8 h-8 bg-red-600 rounded-full"></div>
        </div>
        <div className="mt-4 text-white text-2xl">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
