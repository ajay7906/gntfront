import React, { useState } from 'react';
import { Headset, DollarSign, Cloud, Calculator, Monitor, Users } from 'lucide-react';
import { Phone,Plus, Minus, MessageSquare, Badge, Bot, UserPlus, Inbox, ClipboardList } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description }) => (
    <div className="mb-8">
      <div className="flex items-start space-x-3">
        <div className="bg-green-50 p-2 rounded-lg">
          <Icon className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
  
  const WhatsAppBenefits = () => {
    const benefits = [
      {
        icon: MessageSquare,
        title: "Customer Engagement",
        description: "People open and view WhatsApp several times a day, due to which the customer engagement ratio on WhatsApp is very high."
      },
      {
        icon: Badge,
        title: "Meta Verified Badge",
        description: "With Meta's verification badge, your customer's trust will be maintained and your business will be portrayed differently."
      },
      {
        icon: Bot,
        title: "WhatsApp Business Chat Automation",
        description: "With the help of WhatsApp, you can automate your business chats, along with this you can save your or your employee's time by automating chats for customer queries or support."
      },
      {
        icon: Users,
        title: "One Account, Multi User Access",
        description: "You can create multiple users from the same WhatsApp account and assign roles to them, so that they can play their dedicated roles from a single account."
      }
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="lg:pr-8">
            <h2 className="text-3xl font-bold mb-6">
              Benefits of WhatsApp Business API Service
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The advantages of incorporating WhatsApp API Service into a business are immeasurable. From fast customer support to easy tracking of orders and personalized conversations that help build trust among customers; this integration can make a big difference on your profits. So get ready for an insight on how making use of WhatsApp API can change how you communicate in business thereby promoting engagement as well as unlocking new opportunities for growth.
            </p>
          </div>
  
          {/* Right Column - Benefits List */}
          <div>
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default WhatsAppBenefits;