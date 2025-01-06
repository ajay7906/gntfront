import React from "react";
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
//   const handleGoHome = () => {
//     // Redirect to home or desired route
//     window.location.href = "/";
//   };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <div className="text-center">
          {/* Icon */}
          <div className="mb-6">
            <span className="text-6xl text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-16 h-16 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 9l-5 5-5-5"
                />
              </svg>
            </span>
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You</h1>
          <p className="text-gray-600">
            Send your message. Your dashboard has been updated. Please check it.
          </p>

          {/* Button */}
           <Link to="/"  className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300">
                Go To Home
            </Link>
          {/* <button
            onClick={handleGoHome}
            className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
          >
            Go To Home
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
