import React, { useState } from 'react';
import { ArrowDown, Search, ImageMinus, CodeXml, BookCheck, Server, SquareUserRound, Smartphone, Shield } from 'lucide-react';
//import Card from "./CardIL";
//import Cards from "./CardIR";
//import FAQItem from "./FAQItem";
import smple from "./images/1.png"
import smple1 from "./images/2.png"
import smple2 from "./images/3.png"
import smple3 from "./images/4.png"
import smple4 from "./images/5.png"
import smple5 from "./images/6.png"
import smple6 from "./images/7.png"
import FAQItem from '../../component/faq/FaqItem';
import StyledCard from '../../component/whatsAppstyle/StyleCard';
import CardIl from '../../component/cardIl/CardIl';




const CustomSoftware = () => {
  const features = [
    {
      icon: <SquareUserRound className="w-40 h-40" />,
      title: "User-Friendly Interface",
      description: "Our designs are easy to use. This keeps customers interested and makes them more likely to buy things."
    },
    {
      icon: <Server className="w-40 h-40" />,
      title: "Scalable Architecture",
      description: "Built to grow with your business and handle increasing demands"
    },
    {
      icon: <Smartphone className="w-40 h-40" />,
      title: "Cross-Platform",
      description: "Seamless experience across all devices and platforms"
    },
    {
      icon: <Shield className="w-40 h-40" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and dependable performance"
    }
    
  ];

  const [hoveredId, setHoveredId] = useState(null);

  const awards = [
    {
      id: 1,
      title: "Best Innovation Award 2024",
      description: "Recognized for groundbreaking technological advancement in software development and digital transformation.",
      imageUrl: "/src/assets/images/GNTINDWeb.png",
      year: "2024",
      category: "Innovation"
    },
    {
      id: 2,
      title: "Excellence in Design",
      description: "Awarded for exceptional user experience and interface design across multiple digital platforms.",
      imageUrl: "/src/assets/images/GNTINDWeb.png",
      year: "2023",
      category: "Design"
    },
    {
      id: 3,
      title: "Industry Leadership Award",
      description: "Acknowledged as a leading force in shaping the future of digital solutions and client success.",
      imageUrl: "/src/assets/images/GNTINDWeb.png",
      year: "2023",
      category: "Leadership"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white bg-gradient-to-r from-[#dad6d6] to-indigo-600">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')]"></div>
        
        {/* Content */}
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            WhatsApp API Chatbot
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-blue-100">
          GNTINDIA's automated WhatsApp solution 
          engages customers instantly with real-time support, order tracking, and 
          personalized notifications to streamline communication.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg shadow-lg transition duration-300">
              Start Your Project
            </button>
           
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 w-full flex justify-center">
          <ArrowDown className="w-8 h-8 text-white animate-bounce" />
        </div>
      </section>


      {/*Story*/}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Customer Success Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating excellence and innovation in digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden 
                          transition-all duration-300 hover:shadow-2xl"
                onMouseEnter={() => setHoveredId(award.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={award.imageUrl}
                    alt={award.title}
                    className={`object-cover w-full h-48 transition-transform duration-500
                              ${hoveredId === award.id ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white 
                                px-3 py-1 rounded-full text-sm font-semibold">
                    {award.year}
                  </div>
                  <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-75 
                                text-white px-3 py-1 rounded-full text-sm">
                    {award.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {award.description}
                  </p>
                  <button 
                    className="group text-blue-600 font-semibold hover:text-blue-800 
                              transition-colors duration-300 flex items-center"
                  >
                    Learn More
                    <svg 
                      className={`w-4 h-4 ml-2 transition-transform duration-300
                                ${hoveredId === award.id ? 'translate-x-2' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>  
      
       {/* Project Showcase Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Features of our WhatsApp API Chatbot Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              WhatsApp solution 
              engages customers instantly with real-time support, order tracking, and 
              personalized notifications to streamline communication.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
};

function Solution() {
  const sampleImages = [
    smple
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0">
      <CardIl
        title="Whatsapp API Chatbot solution"
        description="GNTINDIA provides the solid WhatsApp API solution for bringing the power of WhatsApp to even better 
          communication with customers. The integration of WhatsApp API would be the first step toward 
          reaching out, sending automated messages, personalized alerts, notifications, and updates directly to 
          customers' WhatsApp accounts, thus providing instant and effective communication with your 
          customers."
        images={sampleImages}
      />
    </div>
  );
}



function Websites() {
  const sampleImages = [
    smple2,
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0">
      <StyledCard
        title="Whatsapp API Chatbot Website Development"
        images={sampleImages}
        description="As per the previous discussion, you may imagine that “creating an online marketplace is not an easy task right? ” Well, not really.
                  Thanks to the open-source and FREE eCommerce platforms, it becomes easy to build a marketplace.
                  Selling online not only helps to plot a giant selling gameplan but also helps retailers or suppliers to establish a continuous relationship with 
                  their customers to provide them a seamless buying experience from anywhere including web and mobile."
      />
    </div> 
  );
}

function Mobiles() {
  const sampleImages = [
    smple5,
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <CardIl
        title="Whatsapp API Chatbot Mobile App Development"
        images={sampleImages}
        description="We specialize in designing and developing mobile apps for online shopping that are easy for customers to use. 
                    Our goal is to give GNTINDIA's automated WhatsApp solution 

                    engages customers instantly with real-time support, order tracking, and 
                    personalized notifications to streamline communication."
        
      />
    </div>
  );
}

function Integration() {
  const sampleImages = [
    smple4,
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        
      <StyledCard
        title="Whatsapp API Chatbot Platform Integration"
        images={sampleImages}
        description="With GNTINDA's WhatsApp API solution, companies can integrate any WhatsApp messaging into any of 
        their existing systems such as CRM tools, eCommerce platforms or marketing automation systems, thus 
        truly reviving customer engagement. Two-way messaging, order tracking, and real-time support - Our 
        Solution allows customers to easily interact with your brand via the familiar WhatsApp system."
        
      />
    </div>
  );
}

function SEO() {
  const sampleImages = [
    smple3,
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0">
      <CardIl
        title="Whatsapp API Chatbot SEO Services"
        images={sampleImages}
        description="
        By providing real-time responses and personalized support, a WhatsApp API chatbot can increase customer interaction on your website, potentially reducing bounce rates. Bounce rates
         and time on site are SEO factors, as search engines interpret them as indicators of valuable content."
        
      />
    </div>
  );
}

function Support() {
  const sampleImages = [
    smple6,
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0">
      <StyledCard
        title="Support and Maintenance Service for Whatsapp API Chatbot"
        images={sampleImages}
        description="A WhatsApp API chatbot enables businesses to offer round-the-clock support, providing instant answers to frequently asked questions and support inquiries. This constant availability means customers 
        can get the help they need outside of regular business hours, improving satisfaction and brand loyalty."
        
      />
    </div>
  );
}


{/* Project design lifeCycle */}
const  Texts = () => {
  const feature = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "We start by learning about your business goals, customers, and competitors. This helps us to plan and move forward with the project."  
    },
    {
      icon: <ImageMinus className="w-8 h-8" />,
      title: "Design Concept Creation",
      description: "Built to grow with your business and handle increasing demandsWe create design ideas that match your brand and appeal to your customers. This involves making mood boards and initial design sketches."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Design and Prototyping",
      description: "We create the wireframes, choose colors, and decide on fonts to make interfaces. Our designs are easy to use and reflect your brand."
    },
    {
      icon: <CodeXml className="w-8 h-8" />,
      title: "Development",
      description: "We develop our solutions using the latest technologies and methods. Our team uses the best ways to add features and functionalities."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Testing and Deployment",
      description: " We check our solution on various devices and web browsers to make sure it works perfectly. Then we launch your WhatsApp Chatbot Services."
    },
    {
      icon: <BookCheck className="w-8 h-8" />,
      title: "Support and Upgrade",
      description: "We provide  help and updates to improve your website’s performance. Our continuous improvements ensure reliability."
    }
  ];

  return (
        <section className='py-20 bg-gray-50'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WhatsApp Chatbot Design Cycle
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are an WhatsApp Api Chatbot design company, that uses the best creative skills to meet your business needs and ensure customer satisfaction.
              We’re with you every step of the way, from the beginning of your project to its completion.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {feature.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );   
}

{/* Project FAQPage Section */}
const FAQPage = () => {
  const faqs = [
    {
      question: "What is GNTINDIA's WhatsApp chatbot?",
      answer: "GNTINDIA's automated WhatsApp solution engages customers instantly with real-time support, order tracking, and personalized notifications to streamline communication."
    },
    {
      question: "How can GNTINDIA's WhatsApp chatbot improve your customer service?",
      answer: "GNTINDIA's WhatsApp chatbot offers instant autoresponder replies with customer questions, hence improving quick replies and increasing customer delight. "
    },
    {
      question: "Is GNTINDIA's WhatsApp chatbot safe for sensitive information?",
      answer: " GNTINDIA maintains proper safety measures so that no leakage occurs in the data and related conversations on the chatbot."
    },
    // Add more FAQ items here
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

{/* Project start from  Section */}
const EnhancedCTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" 
             style={{ backgroundImage: 'url("/api/placeholder/32/32")', backgroundSize: '32px' }}>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how custom software can help you achieve your business goals.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            className="px-8 py-4 bg-white text-blue-600 
                       font-semibold rounded-lg shadow-lg 
                       transition-all duration-300 ease-in-out
                       transform hover:scale-105 hover:shadow-xl
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => console.log('Primary CTA clicked')}
          >
            Schedule a Consultation
          </button>
          <button 
            className="px-8 py-4 border-2 border-white text-white 
                       font-semibold rounded-lg
                       transition-all duration-300 ease-in-out
                       hover:bg-white hover:text-blue-600
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            onClick={() => console.log('Secondary CTA clicked')}
          >
            Learn More
          </button>
        </div>

        {/* Optional: Add a subtle animation when hovering over the primary button */}
        <div className={`mt-8 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-blue-100">
            Free 30-minute consultation • No obligations
          </p>
        </div>
      </div>
    </section>
  );
};


const WhatsAppChat = () => {
  return (
    <div>
      <CustomSoftware />
      <Solution />
      <Websites />
      <Mobiles />
      <Integration />
      <SEO />
      <Support />
      <Texts />
      <FAQPage />
      {/* <EnhancedCTA /> */}
    </div>
  )
};

export default WhatsAppChat;