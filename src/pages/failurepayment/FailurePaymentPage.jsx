import React from 'react';
import { XCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const FailurePaymentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-md w-full space-y-6">
        <XCircle 
          className="mx-auto text-red-500" 
          size={100} 
          strokeWidth={1.5}
        />
        <h1 className="text-3xl font-bold text-red-800">
          Payment Failed
        </h1>
        <p className="text-gray-600 mb-6">
          Unfortunately, your payment could not be processed. 
          Please try again or contact support.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/" 
            className="flex items-center bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
          >
            <Home className="mr-2" size={20} />
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FailurePaymentPage;