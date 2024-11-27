import React from 'react';
import { Phone,Plus, Minus, MessageSquare, Badge, Bot, UserPlus, Inbox, ClipboardList } from 'lucide-react';

const WhatsAppForms = () => {
    return (
      <div className="flex items-center justify-between max-w-4xl mx-auto py-16 px-4 sm:px-0">
        <div className="w-full sm:w-1/2 mr-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Capture Leads On WhatsApp through Whatsapp Forms.
          </h2>
          <p className="text-gray-600 mb-8">
            Automation helps you to grow your business 5X, and it reduce man power support, so that it is time saving for you.
          </p>
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Click To Call
          </a>
        </div>
        <div className="w-full sm:w-1/2">
          <img src="/api/placeholder/600/400" alt="WhatsApp Forms" />
        </div>
      </div>
    );
};
export default WhatsAppForms;
