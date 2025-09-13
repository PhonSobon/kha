import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinning Logo */}
        <img
          src="/assets/Logo.png"
          alt="Khmer Heirs Association Logo"
          className="w-32 h-32 rounded-full shadow-lg"
        />

        {/* Association Name */}
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          Khmer Heirs Association
        </h1>

        {/* Error Message */}
        <h2 className="text-xl font-semibold text-red-500">Page Not Found</h2>
        <p className="text-md text-gray-600 text-center">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition"
        >
          ← Go back home
        </Link>
      </div>
    </div>
  );
}
