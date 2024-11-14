import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, Phone, Video, Share2, Check } from 'lucide-react';

const WhatsAppAPISection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Automated Messaging",
      description: "Send automated responses and broadcasts to your customers instantly",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Rich Media Support",
      description: "Share images, videos, documents, and location with ease",
      icon: <Share2 className="w-6 h-6" />
    },
    {
      title: "Voice & Video Calls",
      description: "Integrate WhatsApp calls directly into your application",
      icon: <Phone className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Animated Phone */}
        <div className={`relative transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} transition-all duration-1000 ease-out`}>
          <div className="relative w-[300px] h-[600px] mx-auto">
            {/* Phone Frame */}
            <div className="absolute inset-0 bg-gray-800 rounded-[3rem] shadow-2xl">
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
            </div>
            
            {/* Screen Content */}
            <div className="absolute inset-2 bg-white rounded-[2.8rem] overflow-hidden">
              {/* WhatsApp Interface */}
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="bg-green-600 text-white p-4">
                  <h3 className="text-lg font-semibold">WhatsApp Business API</h3>
                </div>
                
                {/* Chat Area */}
                <div className="flex-1 bg-[#E5DDD5] p-4 space-y-4">
                  {/* Animated Messages */}
                  <div className={`bg-white rounded-lg p-3 ml-auto max-w-[80%] transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all duration-1000 delay-500`}>
                    <p className="text-sm">Hello! How can I help you today?</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-xs text-gray-500">09:41</span>
                      <Check className="w-4 h-4 text-blue-500" />
                    </div>
                  </div>
                  
                  <div className={`bg-green-100 rounded-lg p-3 mr-auto max-w-[80%] transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} transition-all duration-1000 delay-1000`}>
                    <p className="text-sm">I'd like to know more about your services</p>
                    <span className="text-xs text-gray-500 block mt-1">09:42</span>
                  </div>
                </div>

                {/* Input Area */}
                <div className="bg-white p-3 flex items-center gap-3">
                  <input 
                    type="text" 
                    placeholder="Type a message"
                    className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
                  />
                  <Send className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`space-y-8 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all duration-1000 delay-500`}>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">
              WhatsApp Business API Integration
            </h2>
            <p className="text-lg text-gray-600">
              Connect with your customers seamlessly using our powerful WhatsApp Business API integration.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 ${
                  activeFeature === index ? 'border-l-4 border-green-500' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-lg text-green-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 hover:bg-green-700">
            <a href="https://whatsapp.gntind.com">Chat Started Now</a>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppAPISection;