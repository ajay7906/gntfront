import React, { useState } from 'react';
import { Headset, DollarSign, Cloud, Calculator, Monitor, Users } from 'lucide-react';
import { Phone,Plus, Minus, MessageSquare, Badge, Bot, UserPlus, Inbox, ClipboardList } from 'lucide-react';

import smple from "./images/automation.png";
import smple1 from "./images/chatbot.png";
import smple2 from "./images/follow up.png";   
import smple3 from "./images/INTEGRATION.jpg";
import smple4 from "./images/live.jpeg.jpg";
import smple6 from "./images/TEAM.jpg";
import smple7 from "./images/Marketing, Sales.png"

{/* WhatsApp 2 section */} 
const WhatsappPlatforms  = () => {
    const [activeTab, setActiveTab] = useState('BROADCAST');
  
    const tabs = [
      'BROADCAST',
      'LIVECHATS',
      'AUTOMATION',
      'CHATBOT',
      'INTEGRATIONS',
      'FOLLOWUP',
      'TEMA'
    ];
  
    const chatMessages = [
      { id: 1, type: 'received', text: 'Hi, I need help with my order', time: '10:30 AM' },
      { id: 2, type: 'sent', text: 'Of course! I\'d be happy to help. Could you please provide your order number?', time: '10:31 AM' },
      { id: 3, type: 'received', text: 'Yes, it\'s #ORD123456', time: '10:32 AM' },
      { id: 4, type: 'sent', text: 'Thank you! Let me check that for you right away.', time: '10:32 AM' },
    ];
   

  const BroadcastContent = () => (
        <div className="max-w-6xl mx-auto p-4 md:p-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left side - Chat Interface */}
              <div className="w-full lg:w-2/3">
                <div className="bg-gray-50 rounded-xl shadow-lg p-4">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <div className="relative aspect-video w-full">
                      <img
                        src={smple7}
                        alt="WhatsApp Chat Interface"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Right side - Description */}
              <div className="w-full lg:w-1/3 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Message Broadcast
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                    Use a stream of promotional and utility messages with real-time tracking enabled.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Download all conversational and reply reports in Excel format for detailed analysis.
                    </p>
                  </div>
                </div>
    
                {/* <button 
                  className="w-full sm:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                  onClick={() => console.log('Start chat clicked')}
                >
                  Start Chat
                </button> */}
              </div>
            </div>
          </div>
        </div>
  );
  
  const LIVECHATS = () => (
          <div className="max-w-6xl mx-auto p-4 md:p-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Right side - Description */}
                <div className="w-full lg:w-1/3 space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                      Live Chats 
                    </h2>
                    
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">
                      Design chat flows using easy drag-and-drop tools supporting multimedia.
                      </p>
                      
                      <p className="text-gray-600 leading-relaxed">
                      Business can download all the conversational and replies report in excel.
                      </p>
                    </div>
                  </div>
      
                  {/* <button 
                    className="w-full sm:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                    onClick={() => console.log('Start chat clicked')}
                  >
                    Start Chat
                  </button> */}
                </div>

                {/* Left side - Chat Interface */}
                <div className="w-full lg:w-2/3">
                  <div className="bg-gray-50 rounded-xl shadow-lg p-4">
                    <div className="bg-white rounded-lg overflow-hidden">
                      <div className="relative aspect-video w-full">
                        <img
                          src={smple4}
                          alt="WhatsApp Chat Interface"
                          className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );   

  const FOLLOWUP = () => (
            <div className="max-w-6xl mx-auto p-4 md:p-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Left side - Chat Interface */}
        
                  {/* Right side - Description */}
                  <div className="w-full lg:w-1/3 space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-gray-800">
                        Customer Followup & Reminder Details
                      </h2>
                      
                      <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed">
                        You can set a Reminder for your team to followup leads, also your team is able to mention last conversation in followup comment, 
                        so your next team member or admin can see the last conversation with team member.
                        </p>
                        
                        </div>
                    </div>
        
                    {/* <button 
                      className="w-full sm:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                      onClick={() => console.log('Start chat clicked')}
                    >
                      Start Chat
                    </button> */}
                  </div>
                  {/* Left side - Chat Interface */}
                  <div className="w-full lg:w-2/3">
                    <div className="bg-gray-50 rounded-xl shadow-lg p-4">
                      <div className="bg-white rounded-lg overflow-hidden">
                        <div className="relative aspect-video w-full">
                          <img
                            src={smple2}
                            alt="WhatsApp Chat Interface"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  ); 
  
  const CHATBOT = () => (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Right side - Description */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Chatbot Flow 
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                Design chat flows using easy drag-and-drop tools supporting multimedia.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                Business can download all the conversational and replies report in excel.
                </p>
              </div>
            </div>

            {/* <button 
              className="w-full sm:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
              onClick={() => console.log('Start chat clicked')}
            >
              Start Chat
            </button> */}
          </div>

          {/* Left side - Chat Interface */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-50 rounded-xl shadow-lg p-4">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <img
                    src={smple1}
                    alt="WhatsApp Chat Interface"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const AUTOMATION = () => (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left side - Chat Interface */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-50 rounded-xl shadow-lg p-4">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <img
                    src={smple}
                    alt="WhatsApp Chat Interface"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
               Automation & Sales Funnel
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                Use a stream of promotional and utility messages with real-time tracking enabled.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Download all conversational and reply reports in Excel format for detailed analysis.
                </p>
              </div>
            </div>

            {/* <button 
              className="w-full sm:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
              onClick={() => console.log('Start chat clicked')}
            >
              Start Chat
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );     
                               
  const INTEGRATIONS = () => (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left side - Chat Interface */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-50 rounded-xl shadow-lg p-4">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <img
                    src={smple3}
                    alt="WhatsApp Chat Interface"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">  
              Integrations
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                GNTINDIA Provides you whatsapp api integration for third party tool.
                </p>
                
                {/* <p className="text-gray-600 leading-relaxed">
                  Download all conversational and reply reports in Excel format for detailed analysis.
                </p> */}
              </div>
            </div>

            {/* <button 
              className="w-full sm:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
              onClick={() => console.log('Start chat clicked')}
            >
              Start Chat
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );  
  
  const TEMA = () => (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left side - Chat Interface */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-50 rounded-xl shadow-lg p-4">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <img
                    src={smple6}
                    alt="WhatsApp Chat Interface"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Shared Team Messages
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                Shared team inbox features helps businesses to manage chats with the help of multiple team members, 
                with this centralizes all incoming inquiries, enabling team to view, assign and respond to message
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                Reach multiple customers at once with campaigns.
                 With GNTINDIA Businesses can track campaign outcomes and on that basis, perform important actions.
                </p>
              </div>
            </div>

            {/* <button 
              className="w-full sm:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
              onClick={() => console.log('Start chat clicked')}
            >
              Start Chat
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
  

  const getContent = () => {
      switch (activeTab) {
        case 'BROADCAST':
          return <BroadcastContent />;
        case 'LIVECHATS':
          return <LIVECHATS />;
        case 'FOLLOWUP':
          return <FOLLOWUP />;
        case 'CHATBOT':
          return <CHATBOT />;
        case 'AUTOMATION':
          return <AUTOMATION />;
        case 'INTEGRATIONS':
          return <INTEGRATIONS />;
        case 'TEMA':
          return <TEMA />;              
        // default:
        //   return (
        //     <div className="p-6 bg-white rounded-lg shadow-sm mt-6  ">
        //       <h2 className="text-2xl font-bold mb-4">{activeTab}</h2>
        //       <p className="text-gray-700">Content for {activeTab} goes here.</p>
        //     </div>
        //   );
      }
    };
  
    return (
      <div className="w-full mx-auto  px-4 py-8 bg-brandwhite">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            One Platform for all <span className="text-yellow-500">Whatsapp</span> Conversation, Marketing,
          </h1>
          <h2 className="text-3xl font-bold">
            Branding, Sales, Invoice and Support Desk Solutions.
          </h2>
          <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
            Welcome to AIS, an official Bulk WhatsApp API service provide. As the world's largest instant messaging platform, 
            the WhatsApp API has become a crucial tool for businesses looking to reach their customers. Moreover, our company 
            specializes in providing innovative solutions to help businesses effectively engage and communicate with their 
            target audience through WhatsApp.
          </p>
        </div>
  
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                activeTab === tab
                  ? 'bg-green-700 text-white'
                  : 'bg-white text-green-700 hover:bg-green-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
  
        {getContent()}
      </div>
    );
  };

 export default WhatsappPlatforms; 