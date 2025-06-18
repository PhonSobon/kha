import React from 'react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
        {/* Loading Text */}
        <div className="text-xl font-semibold text-blue-700">Loading...</div>
      </div>
    </div>
  );
}
