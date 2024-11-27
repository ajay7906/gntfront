import React from 'react';

import { Phone,Plus, Minus, MessageSquare, Badge, Bot, UserPlus, Inbox, ClipboardList } from 'lucide-react';

const CRMInterface  = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        {/* Header Badge */}
        <div className="inline-block px-4 py-1.5 bg-green-600 text-white text-sm rounded-md mb-6">
          CRM Interface
        </div>
  
        {/* Main Title */}
        <h2 className="text-3xl font-bold mb-4">
          Easy To Access Interface
        </h2>
  
        {/* Subtitle */}
        <p className="text-blue-900 font-medium mb-6">
          Leading Business WhatsApp API Service Provider
        </p>
  
        {/* Description */}
        <p className="text-gray-700 mb-10 leading-relaxed">
          Our WhatsApp Business API CRM boasts an Easy To Access Interface that redefines simplicity in customer relationship management.
          Designed with user-friendliness at its core, our app ensures effortless navigation and interaction, making it a breeze to manage your customer
          communications on WhatsApp. Say goodbye to complex interfaces and hello to a tool that prioritizes your ease of use, enabling you to focus
          on what truly matters: building strong, lasting customer relationships.
        </p>
  
        {/* Call Button */}
        <button 
          className="inline-flex items-center px-6 py-3 bg-yellow-100 hover:bg-yellow-200 text-gray-800 rounded-md transition-colors duration-200"
          onClick={() => window.location.href = 'tel:+1234567890'}
        >
          <Phone className="w-5 h-5 mr-2" />
          Click To Call
        </button>
      </div>
    );
};

export default CRMInterface;
  