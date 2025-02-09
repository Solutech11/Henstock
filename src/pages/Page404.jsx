import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-gray-500 mb-4 animate-bounce"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM5 9a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1zm0 2a1 1 0 100 2h2a1 1 0 100-2H5z"
          clipRule="evenodd"
        />
      </svg>
      <h1 className="text-xl md:text-3xl font-semibold text-gray-800 mb-2 text-center">404 - Page Not Found</h1>
      <p className="text-sm md:text-base text-gray-600 mb-6 text-center">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">Go back to home</Link>
    </div>
  );
};

export default Page404;
