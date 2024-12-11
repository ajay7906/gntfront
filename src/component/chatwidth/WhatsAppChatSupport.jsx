// import React, { useState, useEffect, useRef } from 'react';
// import { Send, ArrowLeft, X, MessageCircle } from 'lucide-react';

// const services = [
//   { 
//     id: 'whatsapp-api', 
//     name: 'WhatsApp API',
//     faqs: [
//       { q: "How does the WhatsApp API work?", a: "Our WhatsApp API enables seamless business communication, allowing automated messaging and real-time customer engagement." },
//       { q: "What are the integration steps?", a: "Integration involves: 1) Account setup 2) API key generation 3) Configuration 4) Testing 5) Deployment" },
//       { q: "What is the pricing?", a: "Pricing varies based on message volume. We offer flexible plans starting from ₹5000/month." },
//       { q: "Do you provide technical support?", a: "Yes, we offer 24/7 technical support with dedicated engineers for smooth API integration." }
//     ]
//   },
//   { 
//     id: 'website-dev', 
//     name: 'Website Development',
//     faqs: [
//       { q: "What is your website development process?", a: "Our process includes consultation, design mockup, development, testing, and final deployment." },
//       { q: "How much does a website cost?", a: "Prices range from ₹20,000 to ₹2,00,000 based on complexity and features." },
//       { q: "Do you offer custom website solutions?", a: "Yes, we provide fully customized websites tailored to your business needs and brand identity." },
//       { q: "What is the typical development timeline?", a: "A typical website takes 3-6 weeks from initial consultation to final launch." }
//     ]
//   },
//   { 
//     id: 'social-media', 
//     name: 'Social Media Management',
//     faqs: [
//       { q: "What social media management services do you offer?", a: "We provide content creation, strategy development, engagement tracking, and performance analysis." },
//       { q: "How do you develop a social media strategy?", a: "We analyze your brand, target audience, and business goals to create a customized social media approach." },
//       { q: "What platforms do you manage?", a: "We manage Facebook, Instagram, Twitter, LinkedIn, and other major social media platforms." },
//       { q: "How do you measure social media success?", a: "We track engagement rates, follower growth, website traffic, and conversion metrics." }
//     ]
//   },
//   { 
//     id: 'software-dev', 
//     name: 'Custom Software Development',
//     faqs: [
//       { q: "What types of software do you develop?", a: "We develop web applications, mobile apps, enterprise solutions, and custom business software." },
//       { q: "What technologies do you use?", a: "We work with latest technologies including React, Node.js, Python, Java, and cloud platforms." },
//       { q: "How do you ensure software quality?", a: "We follow agile methodology, conduct thorough testing, and provide post-development support." },
//       { q: "Can you help with software integration?", a: "Yes, we specialize in integrating new software with existing business systems." }
//     ]
//   },
//   { 
//     id: 'crm', 
//     name: 'CRM Solutions',
//     faqs: [
//       { q: "What CRM solutions do you offer?", a: "We provide custom CRM development, integration with existing systems, and consultation." },
//       { q: "How can a CRM improve my business?", a: "CRM helps track customer interactions, improve customer service, and increase sales efficiency." },
//       { q: "Do you integrate with existing tools?", a: "Yes, we can integrate CRM with various business tools like marketing platforms and communication systems." },
//       { q: "What is your CRM implementation process?", a: "We conduct needs assessment, design custom solution, implement, train your team, and provide ongoing support." }
//     ]
//   }
// ];

// const WhatsAppChatSupport = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [chatStage, setChatStage] = useState('closed');
//   const [userInfo, setUserInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: null
//   });
//   const [messages, setMessages] = useState([]);
//   const [currentInput, setCurrentInput] = useState('');
//   const [showFAQs, setShowFAQs] = useState(false);
//   const messagesEndRef = useRef(null);

//   // Initial greeting and flow messages
//   const initialMessages = [
//     { sender: 'ai', text: 'Hello! Welcome to GNTIndia Support. What\'s your name?' }
//   ];

//   useEffect(() => {
//     if (isOpen && chatStage === 'closed') {
//       setChatStage('name');
//       setMessages(initialMessages);
//     }
//   }, [isOpen]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const addMessage = (text, sender = 'user') => {
//     setMessages(prev => [...prev, { text, sender }]);
//   };

//   const handleFAQSelection = (faq) => {
//     addMessage(faq.q, 'user');
//     addMessage(faq.a, 'ai');
//     setShowFAQs(false);
//   };

//   const handleNextStage = () => {
//     if (!currentInput.trim()) return;

//     // Add user's input as a message
//     addMessage(currentInput);

//     // Determine next stage based on current stage
//     switch (chatStage) {
//       case 'name':
//         setUserInfo(prev => ({ ...prev, name: currentInput }));
//         setChatStage('email');
//         addMessage('Thank you! Could you please provide your email address?', 'ai');
//         break;

//       case 'email':
//         // Basic email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(currentInput)) {
//           addMessage('Please enter a valid email address.', 'ai');
//           return;
//         }
//         setUserInfo(prev => ({ ...prev, email: currentInput }));
//         setChatStage('phone');
//         addMessage('Great! What is your phone number?', 'ai');
//         break;

//       case 'phone':
//         // Basic phone number validation
//         const phoneRegex = /^[0-9]{10}$/;
//         if (!phoneRegex.test(currentInput)) {
//           addMessage('Please enter a valid 10-digit phone number.', 'ai');
//           return;
//         }
//         setUserInfo(prev => ({ ...prev, phone: currentInput }));
//         setChatStage('service');
//         addMessage('Which service are you interested in?', 'ai');
        
//         // Add service selection buttons
//         const serviceMessage = services.map(service => 
//           `${service.id}: ${service.name}`
//         ).join('\n');
//         addMessage(serviceMessage, 'ai');
//         break;

//       case 'service':
//         const selectedService = services.find(
//           service => service.id.toLowerCase() === currentInput.toLowerCase() ||
//                      service.name.toLowerCase().includes(currentInput.toLowerCase())
//         );

//         if (!selectedService) {
//           addMessage('Please select a valid service by typing its number or name.', 'ai');
//           return;
//         }

//         setUserInfo(prev => ({ ...prev, service: selectedService }));
//         setChatStage('query');
//         addMessage(`Great! You've selected ${selectedService.name}. Would you like to see FAQs or ask a specific question?`, 'ai');
//         break;

//       case 'query':
//         if (currentInput.toLowerCase() === 'faq') {
//           setShowFAQs(true);
//           const faqMessage = userInfo.service.faqs.map((faq, index) => 
//             `${index + 1}: ${faq.q}`
//           ).join('\n');
//           addMessage('Here are the FAQs. Type the number to get the answer:', 'ai');
//           addMessage(faqMessage, 'ai');
//           return;
//         }

//         // Check if user selected a specific FAQ
//         if (showFAQs) {
//           const faqIndex = parseInt(currentInput) - 1;
//           if (faqIndex >= 0 && faqIndex < userInfo.service.faqs.length) {
//             handleFAQSelection(userInfo.service.faqs[faqIndex]);
//             return;
//           }
//         }

//         // Default query response
//         addMessage('Thank you for your query. Our support team will get back to you shortly.', 'ai');
//         break;

//       default:
//         break;
//     }

//     // Clear input after processing
//     setCurrentInput('');
//   };

//   const resetChat = () => {
//     setIsOpen(false);
//     setChatStage('closed');
//     setUserInfo({
//       name: '',
//       email: '',
//       phone: '',
//       service: null
//     });
//     setMessages([]);
//     setShowFAQs(false);
//   };

//   const renderChatContent = () => {
//     return (
//       <div className="flex flex-col h-full">
//         {/* Header */}
//         <div className="bg-green-600 text-white p-4 flex items-between">
//           <div className="flex-grow">
//             <h2 className="font-bold">GNTIndia Support</h2>
//             <p className="text-sm">Online</p>
//           </div>
//           <button 
//             onClick={resetChat} 
//             className="text-white hover:bg-green-700 p-2 rounded"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         {/* Messages */}
//         <div className="flex-grow overflow-y-auto p-4 space-y-2 bg-[#e5ddd5]">
//           {messages.map((msg, index) => (
//             <div 
//               key={index}
//               className={`flex ${
//                 msg.sender === 'user' ? 'justify-end' : 'justify-start'
//               }`}
//             >
//               <div 
//                 className={`p-2 rounded-lg max-w-[70%] ${
//                   msg.sender === 'user' 
//                     ? 'bg-green-100 text-black' 
//                     : 'bg-white text-black'
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             </div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Input Area */}
//         <div className="p-4 bg-white border-t flex items-center">
//           <input 
//             type="text"
//             value={currentInput}
//             onChange={(e) => setCurrentInput(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleNextStage()}
//             placeholder="Type your message..."
//             className="flex-grow p-2 border rounded-l mr-0"
//           />
//           <button 
//             onClick={handleNextStage}
//             className="bg-green-500 text-white p-2 rounded-r hover:bg-green-600"
//           >
//             <Send size={20} />
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {isOpen ? (
//         <div className="w-96 h-[600px] bg-white border rounded-lg shadow-xl flex flex-col">
//           {renderChatContent()}
//         </div>
//       ) : (
//         <button 
//           onClick={() => setIsOpen(true)}
//           className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition shadow-xl"
//         >
//           <MessageCircle size={24} />
//         </button>
//       )}
//     </div>
//   );
// };

// export default WhatsAppChatSupport;



























































































