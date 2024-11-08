import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    name: 'Custom Software Development',
    image: '/api/placeholder/400/300'
  },
  {
    name: 'Social Media Management',
    image: '/api/placeholder/400/300'
  },
  {
    name: 'Cloud Solutions',
    image: '/api/placeholder/400/300'
  },
  {
    name: 'CRM',
    image: '/api/placeholder/400/300'
  },
  {
    name: 'Web Development',
    image: '/api/placeholder/400/300'
  },
  {
    name: 'AI-Powered Tools',
    image: '/api/placeholder/400/300'
  },
  {
    name: 'UI/UX Design',
    image: '/api/placeholder/400/300'
  }
];

const ServiceComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollInterval = setInterval(() => {
        container.scrollBy({ left: 1, behavior: 'smooth' });
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        }
      }, 20);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-hidden pb-4 -mx-4"
      style={{ scrollBehavior: 'smooth' }}
    >
      {services.map((service, index) => (
        <motion.div
          key={service.name}
          className="flex-shrink-0 w-64 bg-white shadow-md rounded-lg overflow-hidden mx-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <img src={service.image} alt={service.name} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{service.name}</h3>
            <a href={`/services/${service.name.toLowerCase().replace(/\s/g, '-')}`} className="flex items-center text-blue-500 hover:text-blue-600">
              View Service
              <ChevronRight className="ml-2" size={16} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceComponent;