import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo with animation */}
        <img
          src="/assets/Logo.png"
          alt="Khmer Heirs Association Logo"
          className="w-32 h-32 animate-pulse rounded-full shadow-lg"
        />

        {/* Association Name */}
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          Khmer Heirs Association
        </h1>

        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="text-md text-gray-600">Loading</p>
      </div>
    </div>
  );
}
