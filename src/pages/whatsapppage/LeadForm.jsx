import React from 'react';
import { Phone,Plus, Minus, MessageSquare, Badge, Bot, UserPlus, Inbox, ClipboardList } from 'lucide-react';
import smple2 from "./images/WhatsApi.3.jpg";

const LeadForm = () => {
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
          <a 
            href="#demo" 
            className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
              Live Demo
          </a>         
          <a 
            href="tel:+1234567890" 
            className="flex items-center gap-2 bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Click To Call
          </a>
          </div>

        </div>
          
        
  
        {/* Right Section - Image and Form Mockup */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Mockup Image */}
            <img
              src= {smple2}
              alt="Form Example"
              className="w-64 md:w-80 rounded-lg shadow-lg"
            />
           
            
          </div>
        </div>
      </div>
    );
};

export default LeadForm;