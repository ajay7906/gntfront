import React from 'react';
import { CheckCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuccessPaymentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-md w-full space-y-6">
        <CheckCircle 
          className="mx-auto text-green-500" 
          size={100} 
          strokeWidth={1.5}
        />
        <h1 className="text-3xl font-bold text-green-800">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Your payment has been processed successfully. 
          Thank you for your purchase.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/" 
            className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
          >
            <Home className="mr-2" size={20} />
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPaymentPage;