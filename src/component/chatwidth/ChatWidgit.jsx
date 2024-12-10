


// import React, { useState } from 'react';
// import { MessageCircle, Send, X } from 'lucide-react';

// const WhatsAppWidget = () => {
//   const [isWidgetOpen, setIsWidgetOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//   });
//   const [currentStep, setCurrentStep] = useState('welcome');
//   const [isUserRegistered, setIsUserRegistered] = useState(false);

//   const widgetOptions = {
//     Position: 'right',
//     Contact: '919784044883',
//     SiteName: 'GNT INDIA',
//     SiteTag: 'Go To The Next Technology India',
//     SiteLogo:
//       'https://datapartner.btpr.online/ProductPictures/47757954399_GNTINDLOGO.png',
//     WidgetColor: '#128c7e',
//     TextColor: '#ffffff',
//   };

//   const chatFlow = {
//     welcome: {
//       message: "Hello! I'm here to help. Could you please share your name?",
//       next: 'getName',
//     },
//     getName: {
//       message: 'Great! Could you please share your email address?',
//       next: 'getEmail',
//       updateField: 'name',
//     },
//     getEmail: {
//       message: 'Thank you! And your mobile number?',
//       next: 'getMobile',
//       updateField: 'email',
//     },
//     getMobile: {
//       message:
//         "Perfect! Your details have been saved. You can now send 'hello' to start chatting on WhatsApp!",
//       next: 'awaitingHello',
//       updateField: 'mobile',
//     },
//     awaitingHello: {
//       message: "Send 'hello' to start chatting!",
//       next: 'awaitingHello',
//     },
//   };

//   const [messages, setMessages] = useState([
//     { text: chatFlow.welcome.message, type: 'bot' },
//   ]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;

//     setMessages((prev) => [...prev, { text: message, type: 'user' }]);

//     if (!isUserRegistered) {
//       if (currentStep !== 'welcome') {
//         setUserDetails((prev) => ({
//           ...prev,
//           [chatFlow[currentStep].updateField]: message,
//         }));

//         if (chatFlow[currentStep].updateField === 'mobile') {
//           setIsUserRegistered(true);
//         }
//       }

//       const nextStep = chatFlow[currentStep].next;

//       setMessages((prev) => [
//         ...prev,
//         { text: chatFlow[nextStep].message, type: 'bot' },
//       ]);
//       setCurrentStep(nextStep);
//     } else {
//       if (message.toLowerCase() === 'hello') {
//         const whatsappUrl = `https://wa.me/${widgetOptions.Contact}?text=hello`;
//         window.open(whatsappUrl, '_blank');

//         setIsWidgetOpen(false);
//         setMessage('');
//         setUserDetails({ name: '', email: '', mobile: '' });
//         setCurrentStep('welcome');
//         setMessages([{ text: chatFlow.welcome.message, type: 'bot' }]);
//         setIsUserRegistered(false);
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           { text: "Please send 'hello' to start chatting on WhatsApp!", type: 'bot' },
//         ]);
//       }
//     }

//     setMessage('');
//   };

//   return (
//     <div className="fixed bottom-4 z-[9999]">
//       {!isWidgetOpen && (
//         <button
//           onClick={() => setIsWidgetOpen(true)}
//           className="fixed bottom-4 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
//           style={{
//             backgroundColor: widgetOptions.WidgetColor,
//             color: widgetOptions.TextColor,
//             [widgetOptions.Position === 'left' ? 'left' : 'right']: '20px',
//           }}
//         >
//           <MessageCircle size={30} />
//         </button>
//       )}

//       {isWidgetOpen && (
//         <div
//           className="fixed bottom-24 w-96 max-w-full bg-white rounded-lg shadow-xl overflow-hidden"
//           style={{
//             [widgetOptions.Position === 'left' ? 'left' : 'right']: '30px',
//           }}
//         >
//           <div
//             className="p-4 flex items-center relative"
//             style={{
//               backgroundColor: widgetOptions.WidgetColor,
//               color: widgetOptions.TextColor,
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
//               onClick={() => {
//                 setIsWidgetOpen(false);
//                 setMessage('');
//                 setUserDetails({ name: '', email: '', mobile: '' });
//                 setCurrentStep('welcome');
//                 setMessages([{ text: chatFlow.welcome.message, type: 'bot' }]);
//                 setIsUserRegistered(false);
//               }}
//               className="absolute top-4 right-4"
//             >
//               <X size={20} color={widgetOptions.TextColor} />
//             </button>
//           </div>

//           <div
//             className="p-4 h-64 overflow-y-auto bg-cover"
//             style={{
//               backgroundImage: "url('https://datapartner.btpr.online/chat-bg.svg')",
//             }}
//           >
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`${
//                   msg.type === 'bot'
//                     ? 'bg-white ml-4 mr-auto'
//                     : 'bg-green-100 ml-auto mr-4'
//                 } p-3 rounded-lg max-w-[75%] mb-4 relative`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           <form onSubmit={handleSubmit} className="p-4 bg-white flex items-center">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder={
//                 currentStep === 'awaitingHello'
//                   ? "Type 'hello' to start chatting..."
//                   : 'Type your response...'
//               }
//               required
//               className="flex-grow rounded-full px-4 py-2 mr-2 border border-gray-300"
//             />
//             <button
//               type="submit"
//               className="w-10 h-10 rounded-full flex items-center justify-center"
//               style={{
//                 backgroundColor: widgetOptions.WidgetColor,
//                 color: widgetOptions.TextColor,
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
































































































// import React, { useState } from 'react';
// import { MessageCircle, Send, X } from 'lucide-react';

// const WhatsAppWidget = () => {
//   const [isWidgetOpen, setIsWidgetOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//   });
//   const [currentStep, setCurrentStep] = useState('welcome');
//   const [isUserRegistered, setIsUserRegistered] = useState(false);
//   const [isInServiceQuery, setIsInServiceQuery] = useState(false);

//   const widgetOptions = {
//     Position: 'right',
//     Contact: '919784044883',
//     SiteName: 'GNT INDIA',
//     SiteTag: 'Go To The Next Technology India',
//     SiteLogo: 'https://datapartner.btpr.online/ProductPictures/47757954399_GNTINDLOGO.png',
//     WidgetColor: '#128c7e',
//     TextColor: '#ffffff',
//   };

//   const chatFlow = {
//     welcome: {
//       message: "Hello! I'm here to help. Could you please share your name?",
//       next: 'getName',
//     },
//     getName: {
//       message: 'Great! Could you please share your email address?',
//       next: 'getEmail',
//       updateField: 'name',
//     },
//     getEmail: {
//       message: 'Thank you! And your mobile number?',
//       next: 'getMobile',
//       updateField: 'email',
//     },
//     getMobile: {
//       message: "Perfect! Your details have been saved. How can I help you today? We offer:\n- WhatsApp API\n- Website Development\n- Social Media Management\n- Custom Software Development\n- CRM Solutions",
//       next: 'serviceQuery',
//       updateField: 'mobile',
//     },
//     serviceQuery: {
//       message: "What would you like to know about our services?",
//       next: 'serviceQuery',
//     },
//     readyForWhatsApp: {
//       message: "Would you like to continue this conversation on WhatsApp? Type 'yes' to connect.",
//       next: 'awaitingYes',
//     },
//     awaitingYes: {
//       message: "Great! Type 'hello' to start chatting on WhatsApp!",
//       next: 'awaitingHello',
//     },
//   };

//   // Service intents from your backend
//   const serviceIntents = {
//     "WhatsApp_API": {
//       keywords: ["whatsapp", "api", "automation", "messaging"],
//       response: "Our WhatsApp API service helps businesses automate customer communications with features like:\n- Automated responses\n- Real-time customer support\n- Easy integration\n- Message templates\n- Customer engagement tracking"
//     },
//     "Website_Development": {
//       keywords: ["website", "web", "development", "design"],
//       response: "Our website development services include:\n- Custom design and development\n- Responsive layouts\n- SEO optimization\n- E-commerce functionality\n- Content management systems"
//     },
//     "Social_Media": {
//       keywords: ["social", "media", "marketing", "facebook", "instagram"],
//       response: "Our social media management services include:\n- Content strategy and creation\n- Regular posting schedule\n- Engagement monitoring\n- Analytics and reporting\n- Brand growth strategies"
//     },
//     "Custom_Software": {
//       keywords: ["software", "development", "custom", "application"],
//       response: "Our custom software development services provide:\n- Tailored business solutions\n- Process automation\n- Scalable architecture\n- Integration capabilities\n- Ongoing support"
//     },
//     "CRM": {
//       keywords: ["crm", "customer", "relationship", "management"],
//       response: "Our CRM solutions offer:\n- Customer data management\n- Lead tracking\n- Sales pipeline management\n- Customer interaction history\n- Performance analytics"
//     }
//   };

//   const [messages, setMessages] = useState([
//     { text: chatFlow.welcome.message, type: 'bot' },
//   ]);

//   const detectIntent = (userMessage) => {
//     const lowercaseMessage = userMessage.toLowerCase();
//     for (const [intent, data] of Object.entries(serviceIntents)) {
//       if (data.keywords.some(keyword => lowercaseMessage.includes(keyword))) {
//         return { intent, response: data.response };
//       }
//     }
//     return null;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;

//     setMessages(prev => [...prev, { text: message, type: 'user' }]);

//     if (!isUserRegistered) {
//       if (currentStep !== 'welcome') {
//         setUserDetails(prev => ({
//           ...prev,
//           [chatFlow[currentStep].updateField]: message,
//         }));

//         if (chatFlow[currentStep].updateField === 'mobile') {
//           setIsUserRegistered(true);
//           setIsInServiceQuery(true);
//         }
//       }

//       const nextStep = chatFlow[currentStep].next;
//       setMessages(prev => [...prev, { text: chatFlow[nextStep].message, type: 'bot' }]);
//       setCurrentStep(nextStep);
//     } else if (isInServiceQuery) {
//       const intent = detectIntent(message);
//       if (intent) {
//         setMessages(prev => [
//           ...prev, 
//           { text: intent.response, type: 'bot' },
//           { text: chatFlow.readyForWhatsApp.message, type: 'bot' }
//         ]);
//         setIsInServiceQuery(false);
//         setCurrentStep('readyForWhatsApp');
//       } else {
//         setMessages(prev => [...prev, {
//           text: "I can help you with WhatsApp API, Website Development, Social Media Management, Custom Software Development, or CRM Solutions. Which would you like to know more about?",
//           type: 'bot'
//         }]);
//       }
//     } else if (currentStep === 'readyForWhatsApp' && message.toLowerCase() === 'yes') {
//       setMessages(prev => [...prev, { text: chatFlow.awaitingYes.message, type: 'bot' }]);
//       setCurrentStep('awaitingHello');
//     } else if (currentStep === 'awaitingHello' && message.toLowerCase() === 'hello') {
//       const whatsappUrl = `https://wa.me/${widgetOptions.Contact}?text=hello`;
//       window.open(whatsappUrl, '_blank');
//       resetWidget();
//     } else {
//       setMessages(prev => [...prev, {
//         text: currentStep === 'awaitingHello' 
//           ? "Please type 'hello' to start chatting on WhatsApp!"
//           : "Please type 'yes' if you'd like to continue on WhatsApp.",
//         type: 'bot'
//       }]);
//     }

//     setMessage('');
//   };

//   const resetWidget = () => {
//     setIsWidgetOpen(false);
//     setMessage('');
//     setUserDetails({ name: '', email: '', mobile: '' });
//     setCurrentStep('welcome');
//     setMessages([{ text: chatFlow.welcome.message, type: 'bot' }]);
//     setIsUserRegistered(false);
//     setIsInServiceQuery(false);
//   };

//   return (
//     <div className="fixed bottom-4 z-[9999]">
//       {!isWidgetOpen && (
//         <button
//           onClick={() => setIsWidgetOpen(true)}
//           className="fixed bottom-4 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
//           style={{
//             backgroundColor: widgetOptions.WidgetColor,
//             color: widgetOptions.TextColor,
//             [widgetOptions.Position === 'left' ? 'left' : 'right']: '20px',
//           }}
//         >
//           <MessageCircle size={30} />
//         </button>
//       )}

//       {isWidgetOpen && (
//         <div
//           className="fixed bottom-24 w-96 max-w-full bg-white rounded-lg shadow-xl overflow-hidden"
//           style={{
//             [widgetOptions.Position === 'left' ? 'left' : 'right']: '30px',
//           }}
//         >
//           <div
//             className="p-4 flex items-center relative"
//             style={{
//               backgroundColor: widgetOptions.WidgetColor,
//               color: widgetOptions.TextColor,
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
//               onClick={resetWidget}
//               className="absolute top-4 right-4"
//             >
//               <X size={20} color={widgetOptions.TextColor} />
//             </button>
//           </div>

//           <div
//             className="p-4 h-64 overflow-y-auto bg-cover"
//             style={{
//               backgroundImage: "url('https://datapartner.btpr.online/chat-bg.svg')",
//             }}
//           >
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`${
//                   msg.type === 'bot'
//                     ? 'bg-white ml-4 mr-auto'
//                     : 'bg-green-100 ml-auto mr-4'
//                 } p-3 rounded-lg max-w-[75%] mb-4 relative`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           <form onSubmit={handleSubmit} className="p-4 bg-white flex items-center">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder={
//                 currentStep === 'awaitingHello'
//                   ? "Type 'hello' to start chatting..."
//                   : 'Type your response...'
//               }
//               required
//               className="flex-grow rounded-full px-4 py-2 mr-2 border border-gray-300"
//             />
//             <button
//               type="submit"
//               className="w-10 h-10 rounded-full flex items-center justify-center"
//               style={{
//                 backgroundColor: widgetOptions.WidgetColor,
//                 color: widgetOptions.TextColor,
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
import { MessageCircle, Send, X, Globe, Code, BarChart, Database } from 'lucide-react';

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
  const [isInServiceQuery, setIsInServiceQuery] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const widgetOptions = {
    Position: 'right',
    Contact: '919784044883',
    SiteName: 'GNT INDIA',
    SiteTag: 'Go To The Next Technology India',
    SiteLogo: 'https://datapartner.btpr.online/ProductPictures/47757954399_GNTINDLOGO.png',
    WidgetColor: '#128c7e',
    TextColor: '#ffffff',
  };

  const serviceDetails = {
    "Website_Development": {
      title: "Website Development Services",
      icon: Globe,
      detailedInfo: [
        {
          category: "Types of Websites",
          items: [
            "Corporate Websites",
            "E-commerce Platforms",
            "Portfolio Sites",
            "Blog Websites",
            "Educational Websites",
            "Restaurant & Hospitality Websites",
            "Real Estate Websites"
          ]
        },
        {
          category: "Key Features",
          items: [
            "Responsive Design",
            "Mobile-Friendly Layouts",
            "SEO Optimization",
            "Fast Loading Speed",
            "Security Integration",
            "Content Management System (CMS)"
          ]
        },
        {
          category: "SEO Services",
          items: [
            "Keyword Research",
            "On-Page SEO Optimization",
            "Meta Tag Optimization",
            "Content Strategy",
            "Local SEO",
            "Google Analytics Integration"
          ]
        },
        {
          category: "Pricing",
          items: [
            "Basic Website: ₹15,000 - ₹30,000",
            "Standard Website: ₹30,000 - ₹50,000",
            "Advanced Website: ₹50,000 - ₹1,00,000",
            "E-commerce Website: ₹75,000 - ₹2,00,000"
          ]
        },
        {
          category: "Turnaround Time",
          items: [
            "Basic Website: 7-15 days",
            "Standard Website: 15-30 days",
            "Complex Website: 30-60 days"
          ]
        }
      ]
    },
    "WhatsApp_API": {
      title: "WhatsApp API Services",
      icon: MessageCircle,
      detailedInfo: [
        {
          category: "API Features",
          items: [
            "Automated Messaging",
            "Customer Support Chatbots",
            "Message Templates",
            "Real-time Communication",
            "Bulk Messaging",
            "Integration Capabilities"
          ]
        },
        {
          category: "Pricing",
          items: [
            "Basic Plan: ₹5,000/month",
            "Standard Plan: ₹10,000/month",
            "Enterprise Plan: Custom Pricing"
          ]
        },
        {
          category: "Implementation Time",
          items: [
            "Basic Integration: 3-7 days",
            "Custom Solution: 15-30 days"
          ]
        }
      ]
    },
    "Social_Media": {
      title: "Social Media Management",
      icon: BarChart,
      detailedInfo: [
        {
          category: "Services Offered",
          items: [
            "Content Creation",
            "Content Calendar",
            "Social Media Strategy",
            "Engagement Monitoring",
            "Performance Analytics",
            "Ad Campaign Management"
          ]
        },
        {
          category: "Platforms Covered",
          items: [
            "Facebook",
            "Instagram",
            "LinkedIn",
            "Twitter",
            "YouTube"
          ]
        },
        {
          category: "Pricing",
          items: [
            "Basic Package: ₹15,000/month",
            "Standard Package: ₹25,000/month",
            "Advanced Package: ₹40,000/month"
          ]
        }
      ]
    },
    "Custom_Software": {
      title: "Custom Software Development",
      icon: Code,
      detailedInfo: [
        {
          category: "Software Types",
          items: [
            "Business Management Systems",
            "Enterprise Resource Planning (ERP)",
            "Customer Relationship Management (CRM)",
            "Inventory Management",
            "HR Management Systems",
            "Custom Mobile Applications"
          ]
        },
        {
          category: "Development Process",
          items: [
            "Requirements Analysis",
            "System Design",
            "Development",
            "Testing",
            "Deployment",
            "Ongoing Support"
          ]
        },
        {
          category: "Pricing",
          items: [
            "Small Project: ₹50,000 - ₹1,50,000",
            "Medium Project: ₹1,50,000 - ₹5,00,000",
            "Complex Enterprise Solution: ₹5,00,000+"
          ]
        }
      ]
    },
    "CRM": {
      title: "CRM Solutions",
      icon: Database,
      detailedInfo: [
        {
          category: "CRM Features",
          items: [
            "Contact Management",
            "Sales Pipeline Tracking",
            "Lead Scoring",
            "Email Integration",
            "Reporting & Analytics",
            "Task Management"
          ]
        },
        {
          category: "Customization Levels",
          items: [
            "Standard CRM",
            "Industry-Specific CRM",
            "Enterprise-Level CRM"
          ]
        },
        {
          category: "Pricing",
          items: [
            "Basic CRM: ₹5,000/month",
            "Advanced CRM: ₹10,000/month",
            "Enterprise CRM: Custom Pricing"
          ]
        }
      ]
    }
  };

  const chatFlow = {
    welcome: {
      message: "Hello! I'm here to help. Could you please share your name?",
      next: 'getName',
    },
    getName: {
      message: 'Great! Could you please share your email address?',
      next: 'getEmail',
      updateField: 'name',
    },
    getEmail: {
      message: 'Thank you! And your mobile number?',
      next: 'getMobile',
      updateField: 'email',
    },
    getMobile: {
      message: "Perfect! Your details have been saved. How can I help you today? We offer:\n- WhatsApp API\n- Website Development\n- Social Media Management\n- Custom Software Development\n- CRM Solutions",
      next: 'serviceQuery',
      updateField: 'mobile',
    },
    serviceQuery: {
      message: "Choose a service to learn more:",
      next: 'serviceDetails',
    },
    readyForWhatsApp: {
      message: "Would you like to continue this conversation on WhatsApp? Type 'yes' to connect.",
      next: 'awaitingYes',
    },
    awaitingYes: {
      message: "Great! Type 'hello' to start chatting on WhatsApp!",
      next: 'awaitingHello',
    },
  };

  const [messages, setMessages] = useState([
    { text: chatFlow.welcome.message, type: 'bot' },
  ]);

  const renderServiceButtons = () => {
    return (
      <div className="grid grid-cols-3 gap-2 p-2">
        {Object.keys(serviceDetails).map((service) => {
          const ServiceIcon = serviceDetails[service].icon;
          return (
            <button
              key={service}
              onClick={() => {
                setSelectedService(service);
                setMessages(prev => [
                  ...prev, 
                  { 
                    text: `Selected: ${serviceDetails[service].title}`, 
                    type: 'user' 
                  },
                  {
                    type: 'bot',
                    text: serviceDetails[service].detailedInfo.map(section => 
                      `${section.category}:\n${section.items.join('\n')}`
                    ).join('\n\n')
                  }
                ]);
              }}
              className="flex flex-col items-center justify-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <ServiceIcon size={24} className="mb-2" />
              <span className="text-xs text-center">
                {service.replace('_', ' ')}
              </span>
            </button>
          );
        })}
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages(prev => [...prev, { text: message, type: 'user' }]);

    if (!isUserRegistered) {
      if (currentStep !== 'welcome') {
        setUserDetails(prev => ({
          ...prev,
          [chatFlow[currentStep].updateField]: message,
        }));

        if (chatFlow[currentStep].updateField === 'mobile') {
          setIsUserRegistered(true);
          setIsInServiceQuery(true);
        }
      }

      const nextStep = chatFlow[currentStep].next;
      setMessages(prev => [...prev, { text: chatFlow[nextStep].message, type: 'bot' }]);
      setCurrentStep(nextStep);
    } else if (!selectedService) {
      // If no service is selected yet, show service buttons
      setMessages(prev => [
        ...prev, 
        { 
          text: "Please select a service you're interested in:", 
          type: 'bot' 
        }
      ]);
      setCurrentStep('serviceQuery');
    } else {
      // Handle follow-up questions or redirect to WhatsApp
      setMessages(prev => [...prev, {
        text: "Would you like to discuss this further on WhatsApp? Type 'yes' to connect.",
        type: 'bot'
      }]);
      setCurrentStep('readyForWhatsApp');
    }

    setMessage('');
  };

  const resetWidget = () => {
    setIsWidgetOpen(false);
    setMessage('');
    setUserDetails({ name: '', email: '', mobile: '' });
    setCurrentStep('welcome');
    setMessages([{ text: chatFlow.welcome.message, type: 'bot' }]);
    setIsUserRegistered(false);
    setIsInServiceQuery(false);
    setSelectedService(null);
  };

  return (
    <div className="fixed bottom-4 z-[9999]">
      {!isWidgetOpen && (
        <button
          onClick={() => setIsWidgetOpen(true)}
          className="fixed bottom-4 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
          style={{
            backgroundColor: widgetOptions.WidgetColor,
            color: widgetOptions.TextColor,
            [widgetOptions.Position === 'left' ? 'left' : 'right']: '20px',
          }}
        >
          <MessageCircle size={30} />
        </button>
      )}

      {isWidgetOpen && (
        <div
          className="fixed bottom-24 w-96 max-w-full bg-white rounded-lg shadow-xl overflow-hidden"
          style={{
            [widgetOptions.Position === 'left' ? 'left' : 'right']: '30px',
          }}
        >
          <div
            className="p-4 flex items-center relative"
            style={{
              backgroundColor: widgetOptions.WidgetColor,
              color: widgetOptions.TextColor,
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
              onClick={resetWidget}
              className="absolute top-4 right-4"
            >
              <X size={20} color={widgetOptions.TextColor} />
            </button>
          </div>

          <div
            className="p-4 h-64 overflow-y-auto bg-cover"
            style={{
              backgroundImage: "url('https://datapartner.btpr.online/chat-bg.svg')",
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
              </div>
            ))}
          </div>

          {currentStep === 'serviceQuery' && renderServiceButtons()}

          <form onSubmit={handleSubmit} className="p-4 bg-white flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                currentStep === 'awaitingHello'
                  ? "Type 'hello' to start chatting..."
                  : 'Type your response...'
              }
              required
              className="flex-grow rounded-full px-4 py-2 mr-2 border border-gray-300"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: widgetOptions.WidgetColor,
                color: widgetOptions.TextColor,
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