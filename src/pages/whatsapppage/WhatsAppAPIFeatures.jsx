import React from 'react';
import { Headset, DollarSign, Cloud, Calculator, Monitor, Users } from 'lucide-react';


const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center">
      <div className="w-12 h-12 text-green-600 mb-4">
        <Icon size={48} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
  
  const WhatsAppAPIFeatures = () => {
    const features = [
      {
        icon: Headset,
        title: "On Call Support",
        description: "We do not compromise on quality or service, that is why we provide you on call support."
      },
      {
        icon: DollarSign,
        title: "No Hidden Charge",
        description: "There are no hidden charges in any of our WhatsApp API plans."
      },
      {
        icon: Cloud,
        title: "FREE Verification Support",
        description: "We provide you the support of Meta Verification and Blue Tick Verification in WhatsApp API for free."
      },
      {
        icon: Calculator,
        title: "Direct Meta Billing",
        description: "In Direct Meta Connectivity, you get a discount of 40 to 50% (T&C) whenever you broadcast."
      },
      {
        icon: Monitor,
        title: "Live Personal Demo",
        description: "GNTINDIA provides you live demo where you can get answers to your questions."
      },
      {
        icon: Users,
        title: "Personal Training Support",
        description: "We personally train you on the features of WhatsApp API and how to use it"
      }
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why GNTINDIA WhatsApp API?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            In today's fast-paced business world, seamless communication with your customers is paramount. That's why we proudly present our cutting-edge WhatsApp Business API CRM Mobile Application, designed to revolutionize your customer relationship management
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    );
};

export default WhatsAppAPIFeatures;