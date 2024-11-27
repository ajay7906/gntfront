import React from 'react';
import smples from './images/WhatsApi1.jpg';

const AppShowcase  = () => {
    return (
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-16">
            Our <span className="text-emerald-500">Apps</span> help marketers connect with customers.
          </h2>
  
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Phone Image */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl shadow-lg p-6 max-w-sm mx-auto">
                <img 
                  src= {smples} 
                  alt="WhatsApp Chatbot Interface"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
  
            {/* Content */}
            <div className="lg:w-1/2 space-y-6">
              <div className="text-emerald-600 font-medium">
                Build
              </div>
  
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                QUICK CHATBOT RESPONSE
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                Easy process for <span className="text-emerald-600">business whatsapp automation</span>, it's allows to 
                <span className="text-emerald-600"> build all chats flow</span> with simple drag and drop tools, create 
                <span className="text-emerald-600"> unlimited flows</span> with multi media supported.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AppShowcase;