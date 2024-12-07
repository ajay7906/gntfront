

// import React, { useState } from 'react';
// import { MessageCircle, Send, X } from 'lucide-react';

// const WhatsAppWidget = () => {
//   const [isWidgetOpen, setIsWidgetOpen] = useState(false);
//   const [message, setMessage] = useState('');

//   const widgetOptions = {  
//     Position: "right",
//     Contact: "919784044883",
//     SiteName: "GNT INDIA",
//     SiteTag: "Go To The Next Technology India",
//     SiteLogo: "https://datapartner.btpr.online/ProductPictures/47757954399_GNTINDLOGO.png",
//     WelcomeMessage: "Hello",
//     WidgetColor: "#128c7e",
//     TextColor: "#ffffff"
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (message.trim()) {
//       const whatsappUrl = `https://wa.me/${widgetOptions.Contact}?text=${encodeURIComponent(message)}`;
//       window.open(whatsappUrl, '_blank');
//       setMessage('');
//       setIsWidgetOpen(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 z-[9999]">
//       {/* WhatsApp Button */}
//       {!isWidgetOpen && (
//         <button
//           onClick={() => setIsWidgetOpen(true)}
//           className="fixed bottom-4 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
//           style={{ 
//             backgroundColor: widgetOptions.WidgetColor, 
//             color: widgetOptions.TextColor, 
//             [widgetOptions.Position === 'left' ? 'left' : 'right']: '20px' 
//           }}
//         >
//           <MessageCircle size={30} />
//         </button>
//       )}

//       {/* Widget Container */}
//       {isWidgetOpen && (
//         <div 
//           className="fixed bottom-24 w-96 max-w-full bg-white rounded-lg shadow-xl overflow-hidden"
//           style={{ 
//             [widgetOptions.Position === 'left' ? 'left' : 'right']: '30px' 
//           }}
//         >
//           {/* Widget Header */}
//           <div 
//             className="p-4 flex items-center relative"
//             style={{ 
//               backgroundColor: widgetOptions.WidgetColor, 
//               color: widgetOptions.TextColor 
//             }}
//           >
//             <img 
//               src={widgetOptions.SiteLogo} 
//               alt={widgetOptions.SiteName} 
//               className="w-12 h-12 rounded-full mr-3" 
//             />
//             <div>
//               <div className="font-bold">{widgetOptions.SiteName}</div>
//               <div className="text-sm">{widgetOptions.SiteTag}</div>
//             </div>
//             <button 
//               onClick={() => setIsWidgetOpen(false)}
//               className="absolute top-4 right-4"
//             >
//               <X size={20} color={widgetOptions.TextColor} />
//             </button>
//           </div>

//           {/* Widget Content */}
//           <div 
//             className="p-4 h-64 overflow-y-auto bg-cover"
//             style={{ 
//               backgroundImage: "url('https://datapartner.btpr.online/chat-bg.svg')" 
//             }}
//           >
//             <div 
//               className="bg-white p-3 rounded-lg max-w-[50%] mb-4 relative"
//               style={{ marginLeft: '1rem' }}
//             >
//               {widgetOptions.WelcomeMessage}
//               <div 
//                 className="absolute top-0 left-[-20px] w-0 h-0 border-[22px] border-transparent border-t-white" 
//               />
//             </div>
//           </div>

//           {/* Message Input */}
//           <form 
//             onSubmit={handleSubmit} 
//             className="p-4 bg-white flex items-center"
//           >
//             <input 
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Send a message"
//               required
//               className="flex-grow rounded-full px-4 py-2 mr-2 border-none outline-none"
//             />
//             <button 
//               type="submit"
//               className="w-10 h-10 rounded-full flex items-center justify-center"
//               style={{ 
//                 backgroundColor: widgetOptions.WidgetColor, 
//                 color: widgetOptions.TextColor 
//               }}
//             >
//               <Send size={18} />
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WhatsAppWidget;









































import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [currentStep, setCurrentStep] = useState('welcome');
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  
  const widgetOptions = {
    Position: "right",
    Contact: "919784044883",
    SiteName: "GNT INDIA",
    SiteTag: "Go To The Next Technology India",
    SiteLogo: "https://datapartner.btpr.online/ProductPictures/47757954399_GNTINDLOGO.png",
    WidgetColor: "#128c7e",
    TextColor: "#ffffff"
  };

  const chatFlow = {
    welcome: {
      message: "Hello! I'm here to help. Could you please share your name?",
      next: 'getName'
    },
    getName: {
      message: "Great! Could you please share your email address?",
      next: 'getEmail',
      updateField: 'name'
    },
    getEmail: {
      message: "Thank you! And your mobile number?",
      next: 'getMobile',
      updateField: 'email'
    },
    getMobile: {
      message: "Perfect! Your details have been saved. You can now send 'hello' to start chatting on WhatsApp!",
      next: 'awaitingHello',
      updateField: 'mobile'
    },
    awaitingHello: {
      message: "Send 'hello' to start chatting!",
      next: 'awaitingHello',
    }
  };

  const [messages, setMessages] = useState([
    { text: chatFlow.welcome.message, type: 'bot' }
  ]);

  const saveUserToDatabase = async (userData) => {
    try {
      const response = await fetch('/api/users', {  // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to save user data');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error saving user data:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setMessages(prev => [...prev, { text: message, type: 'user' }]);

    if (!isUserRegistered) {
      // Update user details based on current step
      if (currentStep !== 'welcome') {
        setUserDetails(prev => ({
          ...prev,
          [chatFlow[currentStep].updateField]: message
        }));

        // If we've collected mobile (last field), save to database
        if (chatFlow[currentStep].updateField === 'mobile') {
          try {
            await saveUserToDatabase({
              ...userDetails,
              mobile: message
            });
            setIsUserRegistered(true);
          } catch (error) {
            setMessages(prev => [...prev, { 
              text: "Sorry, there was an error saving your details. Please try again.", 
              type: 'bot' 
            }]);
            return;
          }
        }
      }

      // Get next step
      const nextStep = chatFlow[currentStep].next;
      
      // Add bot response
      setMessages(prev => [...prev, { text: chatFlow[nextStep].message, type: 'bot' }]);
      setCurrentStep(nextStep);
    } else {
      // User is registered, check for 'hello' message
      if (message.toLowerCase() === 'hello') {
        // Redirect to WhatsApp
        const whatsappUrl = `https://wa.me/${widgetOptions.Contact}?text=hello`;
        window.open(whatsappUrl, '_blank');
        
        // Reset everything
        setIsWidgetOpen(false);
        setMessage('');
        setUserDetails({ name: '', email: '', mobile: '' });
        setCurrentStep('welcome');
        setMessages([{ text: chatFlow.welcome.message, type: 'bot' }]);
        setIsUserRegistered(false);
      } else {
        setMessages(prev => [...prev, { 
          text: "Please send 'hello' to start chatting on WhatsApp!", 
          type: 'bot' 
        }]);
      }
    }

    setMessage('');
  };

  return (
    <div className="fixed bottom-4 z-[9999]">
      {/* WhatsApp Button */}
      {!isWidgetOpen && (
        <button
          onClick={() => setIsWidgetOpen(true)}
          className="fixed bottom-4 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
          style={{ 
            backgroundColor: widgetOptions.WidgetColor, 
            color: widgetOptions.TextColor, 
            [widgetOptions.Position === 'left' ? 'left' : 'right']: '20px' 
          }}
        >
          <MessageCircle size={30} />
        </button>
      )}

      {/* Widget Container */}
      {isWidgetOpen && (
        <div 
          className="fixed bottom-24 w-96 max-w-full bg-white rounded-lg shadow-xl overflow-hidden"
          style={{ 
            [widgetOptions.Position === 'left' ? 'left' : 'right']: '30px' 
          }}
        >
          {/* Widget Header */}
          <div 
            className="p-4 flex items-center relative"
            style={{ 
              backgroundColor: widgetOptions.WidgetColor, 
              color: widgetOptions.TextColor 
            }}
          >
            <img 
              src={widgetOptions.SiteLogo} 
              alt={widgetOptions.SiteName} 
              className="w-12 h-12 rounded-full mr-3" 
            />
            <div>
              <div className="font-bold">{widgetOptions.SiteName}</div>
              <div className="text-sm">{widgetOptions.SiteTag}</div>
            </div>
            <button 
              onClick={() => {
                setIsWidgetOpen(false);
                setMessage('');
                setUserDetails({ name: '', email: '', mobile: '' });
                setCurrentStep('welcome');
                setMessages([{ text: chatFlow.welcome.message, type: 'bot' }]);
                setIsUserRegistered(false);
              }}
              className="absolute top-4 right-4"
            >
              <X size={20} color={widgetOptions.TextColor} />
            </button>
          </div>

          {/* Chat Messages */}
          <div 
            className="p-4 h-64 overflow-y-auto bg-cover"
            style={{ 
              backgroundImage: "url('https://datapartner.btpr.online/chat-bg.svg')" 
            }}
          >
            {messages.map((msg, index) => (
              <div 
                key={index}
                className={`${
                  msg.type === 'bot' 
                    ? 'bg-white ml-4 mr-auto' 
                    : 'bg-green-100 ml-auto mr-4'
                } p-3 rounded-lg max-w-[75%] mb-4 relative`}
              >
                {msg.text}
                {msg.type === 'bot' && (
                  <div className="absolute top-0 left-[-20px] w-0 h-0 border-[22px] border-transparent border-t-white" />
                )}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form 
            onSubmit={handleSubmit} 
            className="p-4 bg-white flex items-center"
          >
            <input 
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your response..."
              required
              className="flex-grow rounded-full px-4 py-2 mr-2 border border-gray-300"
            />
            <button 
              type="submit"
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: widgetOptions.WidgetColor, 
                color: widgetOptions.TextColor 
              }}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;