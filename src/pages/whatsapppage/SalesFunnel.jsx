import React from 'react';
import { Phone,Plus, Minus, MessageSquare, Badge, Bot, UserPlus, Inbox, ClipboardList } from 'lucide-react';

{/* WhatsApp Sales Section 4 */} 
const SalesFunnel  = () => {
    return (
      <div className="w-full bg-[#FFF3E0] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Label */}
          <div className="mb-6">
            <p className="text-gray-600 uppercase tracking-wide font-medium text-sm">
              AMPALA AUTOMATION
            </p>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Create Sales funnel, so that you can convert missed leads into deal.
          </h2>
          
          {/* Description Text */}
          <p className="text-gray-600 mb-8 text-lg">
            Automation helps you to grow your business 5X, and it reduce man power support, so that it is time saving for you.
          </p>
          
          {/* Call Button */}
          <button 
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Click To Call
          </button>
        </div>
      </div>
    );
};

export default SalesFunnel;