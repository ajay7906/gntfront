// import React, { useState } from 'react';
// import { MessageCircle, X, Send } from 'lucide-react';

// const ChatWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const [userInfo, setUserInfo] = useState({
//     name: '',
//     email: '',
//     mobile: ''
//   });
//   const [currentStep, setCurrentStep] = useState('initial');

//   const handleSend = () => {
//     if (!userInput.trim()) return;

//     const newMessages = [...messages, { type: 'user', content: userInput }];
//     setMessages(newMessages);
//     setUserInput('');

//     // Handle different conversation steps
//     setTimeout(() => {
//       if (currentStep === 'initial') {
//         if (userInput.toLowerCase().includes('hi') || userInput.toLowerCase().includes('hello')) {
//           setMessages([...newMessages, {
//             type: 'bot',
//             content: 'Hello! Please share your name with me.'
//           }]);
//           setCurrentStep('name');
//         }
//       } else if (currentStep === 'name') {
//         setUserInfo({ ...userInfo, name: userInput });
//         setMessages([...newMessages, {
//           type: 'bot',
//           content: 'Great! Now, please provide your email address.'
//         }]);
//         setCurrentStep('email');
//       } else if (currentStep === 'email') {
//         setUserInfo({ ...userInfo, email: userInput });
//         setMessages([...newMessages, {
//           type: 'bot',
//           content: 'Excellent! Finally, please share your mobile number.'
//         }]);
//         setCurrentStep('mobile');
//       } else if (currentStep === 'mobile') {
//         setUserInfo({ ...userInfo, mobile: userInput });
//         setMessages([...newMessages, {
//           type: 'bot',
//           content: `Thank you for providing your information! We'll get back to you soon.`
//         }]);
//         setCurrentStep('complete');
//       }
//     }, 500);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSend();
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}

//       {isOpen && (
//         <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col border border-gray-200">
//           {/* Chat Header */}
//           <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
//             <h3 className="font-semibold">Chat with us</h3>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="hover:bg-blue-700 p-1 rounded"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Chat Messages */}
//           <div className="flex-1 p-4 space-y-4 h-96 overflow-y-auto">
//             {messages.length === 0 && (
//               <div className="text-gray-500 text-center mt-4">
//                 Send 'Hi' or 'Hello' to start the conversation!
//               </div>
//             )}
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div
//                   className={`max-w-[80%] p-3 rounded-lg ${
//                     msg.type === 'user'
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-gray-100 text-gray-800'
//                   }`}
//                 >
//                   {msg.content}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input Area */}
//           <div className="border-t p-4 flex gap-2">
//             <input
//               type="text"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="Type your message..."
//               className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
//             />
//             <button
//               onClick={handleSend}
//               className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               <Send className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidget;






























































// import React, { useState } from 'react';
// import { MessageCircle, Send, X } from 'lucide-react';

// const WhatsAppWidget = ({
//   position = 'right',
//   widgetColor = '#25D366',
//   textColor = 'white',
//   siteLogo,
//   siteName,
//   siteTag,
//   welcomeMessage = 'Hello! How can we help you today?',
//   contact
// }) => {
//   const [isWidgetOpen, setIsWidgetOpen] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (message.trim()) {
//       const whatsappUrl = `https://wa.me/${contact}?text=${encodeURIComponent(message)}`;
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
//             backgroundColor: widgetColor, 
//             color: textColor, 
//             [position === 'left' ? 'left' : 'right']: '20px' 
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
//             [position === 'left' ? 'left' : 'right']: '30px' 
//           }}
//         >
//           {/* Widget Header */}
//           <div 
//             className="p-4 flex items-center relative"
//             style={{ 
//               backgroundColor: widgetColor, 
//               color: textColor 
//             }}
//           >
//             <img 
//               src={siteLogo} 
//               alt={siteName} 
//               className="w-12 h-12 rounded-full mr-3" 
//             />
//             <div>
//               <div className="font-bold">{siteName}</div>
//               <div className="text-sm">{siteTag}</div>
//             </div>
//             <button 
//               onClick={() => setIsWidgetOpen(false)}
//               className="absolute top-4 right-4"
//             >
//               <X size={20} color={textColor} />
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
//               {welcomeMessage}
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
//                 backgroundColor: widgetColor, 
//                 color: textColor 
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

  const widgetOptions = {
    Position: "right",
    Contact: "919784044883",
    SiteName: "GNT INDIA",
    SiteTag: "Go To The Next Technology India",
    SiteLogo: "https://datapartner.btpr.online/ProductPictures/47757954399_GNTINDLOGO.png",
    WelcomeMessage: "Hello",
    WidgetColor: "#128c7e",
    TextColor: "#ffffff"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/${widgetOptions.Contact}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setMessage('');
      setIsWidgetOpen(false);
    }
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
              onClick={() => setIsWidgetOpen(false)}
              className="absolute top-4 right-4"
            >
              <X size={20} color={widgetOptions.TextColor} />
            </button>
          </div>

          {/* Widget Content */}
          <div 
            className="p-4 h-64 overflow-y-auto bg-cover"
            style={{ 
              backgroundImage: "url('https://datapartner.btpr.online/chat-bg.svg')" 
            }}
          >
            <div 
              className="bg-white p-3 rounded-lg max-w-[50%] mb-4 relative"
              style={{ marginLeft: '1rem' }}
            >
              {widgetOptions.WelcomeMessage}
              <div 
                className="absolute top-0 left-[-20px] w-0 h-0 border-[22px] border-transparent border-t-white" 
              />
            </div>
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
              placeholder="Send a message"
              required
              className="flex-grow rounded-full px-4 py-2 mr-2 border-none outline-none"
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
































































// import React, { useState, useEffect, useRef } from 'react';
// import { MessageCircle, Send, X } from 'lucide-react';

// const WhatsAppWidget = () => {
//   const [isWidgetOpen, setIsWidgetOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Hello! How can I help you today?",
//       sender: 'system'
//     }
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   const widgetOptions = {
//     Position: "right",
//     Contact: "919784044883",
//     SiteName: "GNT INDIA",
//     SiteTag: "Go To The Next Technology India",
//     SiteLogo: "https://datapartner.btpr.online/ProductPictures/47757954399_GNTINDLOGO.png",
//     WidgetColor: "#128c7e",
//     TextColor: "#ffffff"
//   };

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!inputMessage.trim()) return;

//     // Add user message
//     const newUserMessage = {
//       id: messages.length + 1,
//       text: inputMessage,
//       sender: 'user'
//     };
//     setMessages(prev => [...prev, newUserMessage]);
//     setInputMessage('');
//     setIsLoading(true);

//     try {
//       // Simulated API call 
//       const response = await fetchBotResponse(inputMessage);
      
//       // Add bot response
//       const botMessage = {
//         id: messages.length + 2,
//         text: response,
//         sender: 'system'
//       };
//       setMessages(prev => [...prev, botMessage]);
//     } catch (error) {
//       const errorMessage = {
//         id: messages.length + 2,
//         text: "Sorry, I couldn't process your request. Please try again.",
//         sender: 'system'
//       };
//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchBotResponse = async (message) => {
//     // Simulated API call 
//     const apiUrl = 'https://graph.facebook.com/v18.0/424107617463486/messages';
    
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'LicenseNumber': '47757954399',
//           'APIKey': 'GfeYz42caOWXL7xhkjD5C8BHt'
//         },
//         body: JSON.stringify({
//           message: message
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       return data.response || "I'm processing your request.";
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       return "Sorry, there was an error processing your request.";
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

//           {/* Chat Messages */}
//           <div 
//             className="p-4 h-64 overflow-y-auto bg-cover flex flex-col space-y-2"
//             style={{ 
//               backgroundImage: "url('https://datapartner.btpr.online/chat-bg.svg')" 
//             }}
//           >
//             {messages.map((msg) => (
//               <div 
//                 key={msg.id}
//                 className={`max-w-[80%] p-2 rounded-lg ${
//                   msg.sender === 'user' 
//                     ? 'bg-blue-100 self-end' 
//                     : 'bg-white self-start'
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//             {isLoading && (
//               <div className="self-start bg-white p-2 rounded-lg">
//                 Typing...
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Message Input */}
//           <form 
//             onSubmit={handleSubmit} 
//             className="p-4 bg-white flex items-center"
//           >
//             <input 
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               placeholder="Send a message"
//               required
//               className="flex-grow rounded-full px-4 py-2 mr-2 border-none outline-none bg-gray-100"
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