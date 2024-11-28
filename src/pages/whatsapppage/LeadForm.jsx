import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import sempla from "./images/WhatsApi.3.jpg";

const LeadForm = () => {
  const [isActive, setIsActive] = useState(false);
  const whatsappNumber = '919784044883';
  const message = encodeURIComponent("Click this button to instantly send a 'Hi' or 'Hello' message to GNT India on WhatsApp. Stay connected effortlessly!");

  const handleLiveDemo = () => {
    setIsActive(true);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    
    setTimeout(() => {
      setIsActive(false);
    }, 200);
  };

  return (
    <div className="bg-gray-50 p-6 md:p-12 flex flex-col items-center md:flex-row">
      {/* Left Section - Text and Description */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-gray-500 uppercase tracking-wide mb-2">Forms</h2>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Capture Leads On WhatsApp through{" "}
          <span className="text-green-500">WhatsApp Forms</span>.
        </h1>
        <p className="text-gray-600 mb-6">
          Automation helps you grow your business 5x, reducing manpower support
          and saving your time.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4">
          <button
            onClick={handleLiveDemo}
            className={`
              flex items-center gap-2 
              ${isActive ? 'bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'}
              text-white px-6 py-3 rounded-md 
              transition-all duration-200 
              font-medium 
              transform ${isActive ? 'scale-95' : 'scale-100'}
              active:outline-none focus:outline-none
              focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50
            `}
          >
            <MessageSquare className="w-5 h-5" />
            Live Demo
          </button>

          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Click To Call
          </a>
        </div>
      </div>

      {/* Right Section - Image and Form Mockup */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src= {sempla}
            alt="Form Example"
            className="w-64 md:w-80 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LeadForm;