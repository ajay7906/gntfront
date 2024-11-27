import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative">
          {/* Animated 404 Text */}
          <h1 className="text-8xl md:text-9xl font-bold text-gray-200 animate-bounce">
            4
            <span className="animate-pulse inline-block text-blue-500">0</span>
            4
          </h1>
          
          {/* Animated circles in background */}
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full animate-ping" />
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-indigo-500/20 rounded-full animate-bounce" />
          </div>
        </div>

        {/* Message */}
        <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-gray-200 animate-fade-in">
          Oops! Page Not Found
        </h2>
        
        <p className="mt-4 text-gray-400 text-lg animate-fade-in">
          The page you're looking for seems to have wandered off into cyberspace.
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg 
                   font-semibold transition-transform duration-200 hover:scale-105 focus:outline-none 
                   focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;