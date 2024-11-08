
import React from 'react';
import { 
  Smartphone, 
  Users, 
  Cloud, 
  Brain, 
  Globe, 
  Paintbrush
} from 'lucide-react';

const services = [
  {
    title: "Mobile App Development",
    description: "We build native and cross-platform mobile apps to help retailers grow.",
    icon: Smartphone
  },
  {
    title: "CRM",
    description: "We build native and cross-platform mobile apps to help retailers grow.",
    icon: Users
  },
  {
    title: "Cloud Solution",
    description: "We build native and cross-platform mobile apps to help retailers grow.",
    icon: Cloud
  },
  {
    title: "AI-Powered Tool",
    description: "We build native and cross-platform mobile apps to help retailers grow.",
    icon: Brain
  },
  {
    title: "Website Development",
    description: "We build native and cross-platform mobile apps to help retailers grow.",
    icon: Globe
  },
  {
    title: "UI/UX Design",
    description: "We build native and cross-platform mobile apps to help retailers grow.",
    icon: Paintbrush
  },
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between group"
    >
      <div>
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
            <Icon 
              size={48} 
              className="text-blue-600 group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>
      </div>
      <a 
        href="#" 
        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
      >
        Read More
        <svg 
          className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
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
      </a>
    </div>
  );
};

const OnDemandServices = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            On-Demand Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of digital solutions designed to help your business thrive in the modern marketplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnDemandServices;




