import React, { useState } from 'react';
import { ArrowDown, Search, ImageMinus, CodeXml, BookCheck, Server, SquareUserRound, Smartphone, Shield } from 'lucide-react';
import Card from "./CardIL";
import Cards from "./CarIR";
import FAQItem from "./FAQItem";
import smple from "./images/website 1.png"
import smple1 from "./images/website 2.png"
import smple2 from "./images/website 3.png"
import smple3 from "./images/website 4.png"
import smple4 from "./images/website 5.png"
import smple5 from "./images/website 6.png"
import smple6 from "./images/website 7.png"
import smple7 from "./images/excellence.png"
import smple8 from "./images/innovaton.png"
import smple9 from "./images/leadership.png"


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
          Web Development
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-blue-100">
          The professionally designed GNTINDIA 
          websites are responsive, high-performance, secure, and SEO-optimized 
          for serving customers better.

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
                Features of our Web Development
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              GNTINDIA offers professional website development services tailored to meet the 
              unique needs of businesses. Our team of skilled developers and designers work 
              closely with clients to create high-quality, user-friendly, and responsive websites 
              that deliver an exceptional user experience across all devices.
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
        title="Web Development Solutions  "
        description="GNTINDIA offers comprehensive and professional website development services 
        designed to create high-quality, user-friendly, and responsive websites that cater to the 
        unique needs of businesses. Our expert team of developers and designers works closely with 
        clients to deliver custom websites that not only look stunning but also provide an exceptional 
        user experience across all devices"
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
        title=" Website Development "
        images={sampleImages}
        description="GNTINDIA provides professional website development services that cater to 
        the unique needs of businesses, ensuring high-quality, user-friendly, and responsive websites. 
        Our expert team of developers and designers work collaboratively with clients to create custom 
        websites that are not only visually stunning but also deliver exceptional user experiences across 
        all devices"
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
        title="Website App Development"
        images={sampleImages}
        description="GNTINDIA offers professional website app development services 
        aimed at creating high-quality, user-friendly, and responsive web applications 
        that cater to the unique needs of businesses. Our experienced team of developers 
        and designers works closely with clients to build custom web apps that not only look 
        stunning but also provide an exceptional user experience across all devices."
        
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
        title="Website Platform Integration "
        images={sampleImages}
        description="GNTINDIA offers comprehensive website platform integration services 
        designed to enhance your online presence and streamline your business operations. 
        Our expert team of developers and designers work closely with clients to integrate 
        various platforms seamlessly into your website, ensuring a cohesive and efficient 
        online experience."
        
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
        title="Website SEO Services "
        images={sampleImages}
        description="GNTINDIA offers professional website SEO services designed to optimize 
        your online presence, improve search engine rankings, and drive organic traffic. Our 
        team of skilled SEO experts works closely with clients to implement effective strategies 
        that enhance visibility, attract relevant audiences, and meet business objectives."
        
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
        title="Support and Maintenance Service for Website Development  "
        images={sampleImages}
        description="GNTINDIA offers comprehensive support and maintenance services for websites 
        to ensure they operate at peak efficiency and continue to meet the evolving needs of your 
        business. Our dedicated team of experts provides ongoing assistance to keep your website 
        up-to-date, secure, and performing optimally."
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
              Website Development Design Cycle                       
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              At GNTINDIA, we follow a meticulous and structured design cycle to ensure our
               website development services are high-quality, user-friendly, and responsive. 
               Our design cycle includes the following key phases to deliver exceptional websites
                that meet the unique needs of businesses.
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
      question: "What are the benefits of using GNTINDIA's website development services?",
      answer: "GNTINDIA's website development services create high-quality, user-friendly, and responsive websites tailored to your business needs. Our custom solutions enhance your online presence, improve user experience, and ensure fast load times, seamless navigation, and mobile compatibility."
    },
    {
      question: "What are the kinds of websites GNTINDIA develops? ",
      answer: "GNTINDIA builds a wide variety of websites from eCommerce sites, corporate websites, portfolios, and custom web applications etc."
    },
    {
      question: "Does GNTINDIA host websites and also include website maintenance services?",
      answer: "Yes, GNTINDIA also offers the option of hosting and a complete maintenance plan that ensures keeping your website safe and up-to-date. "
    },
    {
      question: "How long does it take to develop a website with GNTINDIA? ",
      answer: ":  Do GNTINDIA development timelines depend on the complexity, but does provide transparent timelines post initial project assessment?  "
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

import HalfSideCard from '../startproject/HalfSide'
import { Helmet } from 'react-helmet';

const WebDevelopment = () => {
  return (
    <>
    <Helmet>
        <title>GNTIndia Website Development | Professional and Custom Solutions</title>
        <meta name="description" content="GNTIndia specializes in creating custom sites that aren't just beautiful but are also developed to be highly usable and efficient." />
        <meta name="keywords" content="Website Development, Custom Website Solutions, Professional Web Development, GNTIndia Web Services, Scalable Web Design" />
        <meta property="og:title" content="GNTIndia Website Development | Professional and Custom Solutions" />
        <meta property="og:description" content="Take your online presence to the next level with GNTIndia's website development services. Expect measurable results and guaranteed success." />
        <meta property="og:url" content="https://yourdomain.com/services/web-development" />
        <meta property="og:image" content="https://yourdomain.com/assets/web-development.jpg" />
        <link rel="canonical" href="https://yourdomain.com/services/web-development" />
      </Helmet>



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
    </>
  )
};

export default WebDevelopment;