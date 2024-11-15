// import React, { useState, useEffect } from 'react';
// import { MessageSquare, Send, Phone, Video, Share2, Check } from 'lucide-react';

// const WhatsAppAPISection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(0);

//   const features = [
//     {
//       title: "Automated Messaging",
//       description: "Send automated responses and broadcasts to your customers instantly",
//       icon: <MessageSquare className="w-6 h-6" />
//     },
//     {
//       title: "Rich Media Support",
//       description: "Share images, videos, documents, and location with ease",
//       icon: <Share2 className="w-6 h-6" />
//     },
//     {
//       title: "Voice & Video Calls",
//       description: "Integrate WhatsApp calls directly into your application",
//       icon: <Phone className="w-6 h-6" />
//     }
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Side - Animated Phone */}
//         <div className={`relative transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} transition-all duration-1000 ease-out`}>
//           <div className="relative w-[300px] h-[600px] mx-auto">
//             {/* Phone Frame */}
//             <div className="absolute inset-0 bg-gray-800 rounded-[3rem] shadow-2xl">
//               <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
//             </div>
            
//             {/* Screen Content */}
//             <div className="absolute inset-2 bg-white rounded-[2.8rem] overflow-hidden">
//               {/* WhatsApp Interface */}
//               <div className="h-full flex flex-col">
//                 {/* Header */}
//                 <div className="bg-green-600 text-white p-4">
//                   <h3 className="text-lg font-semibold">WhatsApp Business API</h3>
//                 </div>
                
//                 {/* Chat Area */}
//                 <div className="flex-1 bg-[#E5DDD5] p-4 space-y-4">
//                   {/* Animated Messages */}
//                   <div className={`bg-white rounded-lg p-3 ml-auto max-w-[80%] transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all duration-1000 delay-500`}>
//                     <p className="text-sm">Hello! How can I help you today?</p>
//                     <div className="flex items-center justify-end gap-1 mt-1">
//                       <span className="text-xs text-gray-500">09:41</span>
//                       <Check className="w-4 h-4 text-blue-500" />
//                     </div>
//                   </div>
                  
//                   <div className={`bg-green-100 rounded-lg p-3 mr-auto max-w-[80%] transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} transition-all duration-1000 delay-1000`}>
//                     <p className="text-sm">I'd like to know more about your services</p>
//                     <span className="text-xs text-gray-500 block mt-1">09:42</span>
//                   </div>
//                 </div>

//                 {/* Input Area */}
//                 <div className="bg-white p-3 flex items-center gap-3">
//                   <input 
//                     type="text" 
//                     placeholder="Type a message"
//                     className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
//                   />
//                   <Send className="w-6 h-6 text-green-600" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Content */}
//         <div className={`space-y-8 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all duration-1000 delay-500`}>
//           <div className="space-y-4">
//             <h2 className="text-4xl font-bold text-gray-800">
//               WhatsApp Business API Integration
//             </h2>
//             <p className="text-lg text-gray-600">
//               Connect with your customers seamlessly using our powerful WhatsApp Business API integration.
//             </p>
//           </div>

//           {/* Features */}
//           <div className="space-y-6">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 ${
//                   activeFeature === index ? 'border-l-4 border-green-500' : ''
//                 }`}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-green-100 rounded-lg text-green-600">
//                     {feature.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 hover:bg-green-700">
//             <a href="https://whatsapp.gntind.com">Chat Started Now</a>
            
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatsAppAPISection;














































import React, { useState, useEffect } from 'react';
import { MessageSquare, Share2, Phone, ArrowRight } from 'lucide-react';
import WhatImages from '../../assets/images/whatsapp.png';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image Display */}
          <div className={`relative transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} transition-all duration-1000 ease-out`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden ">
                <img 
                  src={WhatImages} 
                  alt="WhatsApp Business"
                  className="w-full object-cover rounded-3xl transform hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/40 to-transparent" />
              </div>

              {/* Floating Elements */}
              {/* <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/api/placeholder/80/80" 
                  alt="Feature icon"
                  className="w-20 h-20 object-cover rounded-xl"
                />
              </div> */}

              <div className="absolute -bottom-8 -left-8 bg-green-500 rounded-full w-24 h-24 flex items-center justify-center text-white text-xl font-bold transform hover:scale-110 transition-transform duration-300">
                24/7
              </div>

              {/* Stats Card */}
              {/* <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-xs">
                <div className="text-sm font-medium text-gray-600">Active Users</div>
                <div className="text-2xl font-bold text-green-600">2M+</div>
                <div className="mt-1 text-xs text-gray-500">↑ 25% from last month</div>
              </div> */}
            </div>
          </div>

          {/* Right Section - Content */}
          <div className={`space-y-8 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all duration-1000 delay-500`}>
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Connect With Your 
                <span className="text-green-600 block">Customers Instantly</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Transform your business communication with our powerful WhatsApp Business API integration. Reach billions of users worldwide.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                    activeFeature === index ? 'border-l-4 border-green-500' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-xl text-green-600">
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

            {/* CTA Section */}
            <div className="space-y-4">
              <button className="group w-full sm:w-auto bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2">
                <Link to='https://whatsapp.gntind.com'> Start Chatting Now</Link>
               
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <p className="text-sm text-gray-500 ml-4">
                {/* No credit card required • Free 14-day trial */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppAPISection;




































































