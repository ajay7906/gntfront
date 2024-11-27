import React from 'react';
import smples from './images/WhatsApi.jpg';
function ChatbotFeatures() {
    return (
      <div className="bg-gray-50 p-6 md:p-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              QUICK CHATBOT RESPONSE
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Easy process for business WhatsApp automation, it allows to build
              all chats flow with simple drag and drop tools, create unlimited
              flows with multimedia supported.
            </p>
            <div className="mt-6">
              <img
                src={smples} // Replace with actual image URL
                alt="Chatbot interface"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
  
          {/* Right Section */} 

          <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Auto Leads Assign To Team Member
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Are you worried about sending lakhs of messages on WhatsApp? Don’t
                worry, we at AIS transparent Business WhatsApp API Service
                Provider have all Chatbot, broadcast, and API solutions for your
                business.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Google Sheet Integration
              </h2>
              <p className="text-gray-700 leading-relaxed">
                It helps you to upload your contacts through Google Sheet.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-bold text-gray-800">Rich Media Support</h2>
              <p className="text-gray-700 leading-relaxed">
                WhatsApp API can support 1500 characters, text, photos, videos,
                documents, and more, which are just a few of the media formats the
                API can handle.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-bold text-gray-800">Template Messages</h2>
              <p className="text-gray-700 leading-relaxed">
                Companies can prepare message templates ahead of time, such as
                order receipt, offer, or reminder messages. These templates can
                then be pre-approved and periodically distributed to clients using
                the API.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-bold text-gray-800">Call To Action Button</h2>
              <p className="text-gray-700 leading-relaxed">
                By using call-to-action buttons, you can make your WhatsApp
                messages more attractive. This type of button makes your messages
                interactive and helps achieve your goals, such as “Call Now” or
                “Sign Up.” Use attractive words and ensure the button is easily
                seen for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ChatbotFeatures;