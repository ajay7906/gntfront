import React, { useState } from 'react';
import { ArrowDown, Search, ImageMinus, CodeXml, BookCheck, Server, SquareUserRound, Smartphone, Shield } from 'lucide-react';
import Card from "./CardIL";
import Cards from "./CardIR";
import FAQItem from "./FAQItem";
import smple from "./images/ai 1.png"
import smple1 from "./images/ai 2.png"
import smple2 from "./images/ai 3.png"
import smple3 from "./images/ai 4.png"
import smple4 from "./images/ai 5.png"
import smple5 from "./images/ai 6.png"
import smple6 from "./images/ai 7.png"
import smple7 from "./images/excellence.png"
import smple8 from "./images/innovaton.png"
import smple9 from "./images/leadership.png"
import HalfSideCard from '../startproject/HalfSide'

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

  const story = [smple7];
  const story2 = [smple8];
  const story3 = [smple9];

  const awards = [
    {
      id: 1,
      title: "Best Innovation",
      description: "Recognized for groundbreaking technological advancement in software development and digital transformation.",
      imageUrl: story2,
      year: "2024",
      category: "Innovation"
    },
    {
      id: 2,
      title: "Excellence in Design",
      description: "Awarded for exceptional user experience and interface design across multiple digital platforms.",
      imageUrl: story,
      year: "2023",
      category: "Design"
    },
    {
      id: 3,
      title: "Industry Leadership ",
      description: "Acknowledged as a leading force in shaping the future of digital solutions and client success.",
      imageUrl: story3,
      year: "2023",
      category: "Leadership"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white bg-gradient-to-r from-[#dad6d6] to-indigo-500">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')]"></div>
        
        {/* Content */}
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          AI-Powered Tools
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-blue-100">
          GNTINDIA's intelligent tools support automation, 
          predictive analytics, and personalized customer experiences, thereby 
          driving operational efficiency. 
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
                Features of our AI-Powered Tools 
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              GNTINDIA provides a suite of AI-based tools for optimizing business operations, supporting intuitive 
              decision-making, and driving growth. Our solutions apply the latest in artificial intelligence and machine 
              learning technologies to automate processes, analyze data, and provide actionable insights.
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
      <Card
        title=" AI-Powered Tools Solutions"
        description="GNTINDIA provides a comprehensive suite of AI-based tools 
        designed to optimize business operations, support intuitive decision-making,
        and drive growth. Our cutting-edge solutions harness the power of artificial 
        intelligence and machine learning to automate processes, analyze data, and deliver
        actionable insights."
        images={sampleImages}
      />
    </div>
  );
}



function Websites() {
  const sampleImages = [
    smple6,
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0">
      <Cards
        title="AI-Powered Tools Website Development"
        images={sampleImages}
        description="At GNTINDIA, we offer a powerful 
        suite of AI-based tools designed to optimize your business operations, support 
        intuitive decision-making, and drive unparalleled growth. Discover how our cutting-edge 
        solutions harness the latest in artificial intelligence and machine learning technologies 
        to transform your business."
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
      <Card
        title="AI-Powered Tools App Development"
        images={sampleImages}
        description="At GNTINDIA, we are committed
        to revolutionizing business operations and enhancing growth through our suite 
        of AI-powered tools. Our expertise in artificial intelligence and machine learning 
        allows us to develop applications that automate processes, analyze data, and provide 
        actionable insights to drive your business forward."
        
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
        
      <Cards
        title="AI-Powered Tools Platform Integration"
        images={sampleImages}
        description="At GNTINDIA, we recognize that seamless integration with existing
        platforms is essential for optimizing business operations and achieving digital 
        transformation. Our suite of AI-based tools is designed to easily integrate with 
        various platforms, ensuring a smooth transition and maximizing the benefits of artificial intelligence."
        
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
      <Card
        title="AI-Powered Tools SEO Services "
        images={sampleImages}
        description="At GNTINDIA, we offer cutting-edge AI-based tools designed to revolutionize
        SEO services. Our advanced AI and machine learning technologies empower businesses to optimize 
        their online presence, drive organic traffic, and achieve higher search engine rankings."
        
      />
    </div>
  );
}

function Support() {
  const sampleImages = [
    smple2,
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0">
      <Cards
        title="Support and Maintenance Service for AI-Powered Tools"
        images={sampleImages}
        description="At GNTINDIA, we understand that implementing AI-powered tools is 
        just the beginning. To ensure these tools continue to deliver optimal performance
        and value, we offer comprehensive support and maintenance services tailored to your 
        business needs. Our dedicated team of experts is committed to providing ongoing assistance, 
        ensuring your AI solutions remain efficient, secure, and up-to-date."
        
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
              AI-Powered Tools Design Cycle
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              At GNTINDIA, we follow a meticulously planned design cycle to ensure that
              our AI-powered tools are innovative, efficient, and tailored to meet the specific 
              needs of our clients.
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
      question: "What are the main benefits of using GNTINDIA's AI-powered tools?",
      answer: "Our AI-powered tools optimize business operations, support intuitive decision-making, and drive growth. They automate processes, analyze data for actionable insights, and enhance customer experience through intelligent chatbots, predictive analytics, and personalized marketing."
    },
    {
      question: "How can AI-powered chatbots and virtual assistants improve customer service?",
      answer: "AI-powered chatbots and virtual assistants provide 24/7 customer support, answer inquiries, and offer personalized interactions. This ensures customers receive timely assistance and enhances their overall experience."
    },
    {
      question: "What kind of support and maintenance services does GNTINDIA offer?",
      answer: "GNTINDIA provides comprehensive support and maintenance services, including 24/7 technical assistance, regular updates and upgrades, performance monitoring, security audits, and customer training. Our goal is to ensure the ongoing efficiency and reliability of your AI solutions."
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


const AiPowered = () => {
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
      <HalfSideCard/>
      {/* <EnhancedCTA /> */}
    </div>
  )
};

export default AiPowered;