import React, { useState } from 'react';
import Image1 from '../../assets/images/GNTIND1.png';
import Image2 from '../../assets/images/marketing.jpeg'
import Image3 from '../../assets/images/media.jpeg'
import Image4 from '../../assets/images/software.jpeg'
import Image5 from '../../assets/images/website.jpeg'
import Image6 from '../../assets/images/crm.jpeg'
import Image7 from '../../assets/images/cloud.jpeg'
import Image8 from '../../assets/images/ai.jpeg'

const CardSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cards = [
    { 
      image: Image1,
      title: "WhatsApp API",
    //   description: "Discover nature's beauty"
    },
    { 
      image: Image2,
      title: "Marketing",
    //   description: "Explore city life"
    },
    { 
      image: Image3,
      title: "Social Media Handling",
    //   description: "Relax by the ocean"
    },
    { 
      image: Image4,
      title: "Software Development",
    //   description: "Climb to new heights"
    },
    { 
      image: Image5,
      title: "Website Development",
    //   description: "Experience the wilderness"
    },
    { 
        image: Image6,
        title: "CRM",
        // description: "Experience the wilderness"
      },
      { 
        image: Image7,
        title: "Cloud Solution",
        // description: "Experience the wilderness"
      },
      { 
        image: Image8,
        title: "AI Tools",
        // description: "Experience the wilderness"
      }
  ];

  const totalWidth = cards.length * 288; // 272px card width + 16px gap

  return (
    <div className="w-full bg-gray-100 p-8">
      <div 
        className="overflow-hidden relative w-full h-96"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <style jsx>{`
          @keyframes slideLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
        
        {/* Cards container */}
        <div 
          className={`flex space-x-4 ${!isHovered ? 'animate-[slideLeft_20s_linear_infinite]' : ''}`}
          style={{ width: `${totalWidth * 2}px` }}
        >
          {/* Double the cards for infinite scroll effect */}
          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform group-hover:scale-105 bg-white">
                {/* Image */}
                <div className="h-68 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">
                    {card.description}
                  </p>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Edge gradients */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-100 to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-100 to-transparent z-10" />
      </div>
    </div>
  );
};

export default CardSlider;