

import React from 'react';

import WhatsappPlatforms from "./WhatsAppPlateform";
import AppShowcase from "./AppShowcase";
import ChatbotFeatures from "./ChatbotFeatures";
import WhatsAppIntegration from "./WhatsAppIntegration";
import TeamMemberAccess from "./TeamMemberAccess";
import WhatsAppBenefits from "./WhatsAppBenefits";
import WhatsAppAPIFeatures from "./WhatsAppAPIFeatures";
import FAQ from "./FAQ";
import LeadForm from "./LeadForm";
import CRMInterface from "./CRMInterface";
import Plan from "./PricingPlans";
import { Link } from 'react-router-dom';
import SplitCard from '../../component/startproject/HalfSide';
import { Helmet } from 'react-helmet';

{/* Hero section */ }
const HeroSection = () => {
  return (
    <>
      {/* Seo meta tag */}



      <Helmet>
        <title>WhatsApp API GNTIND | Simplifies Your Conversations with Customers</title>
        <meta name="description" content="Customer engagement simplified with GNTIndia's WhatsApp API. Automated messages respond faster, increasing customer satisfaction." />
        <meta name="keywords" content="WhatsApp API, Business Communication, Automated Customer Support, GNTIndia WhatsApp API, Customer Engagement" />
        <meta property="og:title" content="WhatsApp API GNTIND | Simplifies Your Conversations with Customers" />
        <meta property="og:description" content="Customer engagement simplified with GNTIndia's WhatsApp API. Automated messages respond faster, increasing customer satisfaction." />
        <meta property="og:url" content="https://yourdomain.com/products/whatsapp" />
        <meta property="og:image" content="https://yourdomain.com/assets/whatsapp-chatbot.jpg" />
        <link rel="canonical" href="https://yourdomain.com/products/whatsapp" />
      </Helmet>






      <div className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto ">
          {/* Yellow tag at top */}
          <div className="flex justify-center mb-6 ">
            <div className="bg-yellow-400 px-10 py-2 rounded-full">
              <span className="text-gray-800 font-medium">
                Business WhatsApp API Service Provider
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-center text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gray-800">Seamless Business Communication with GNTINDIA's </span>
            <span className="text-emerald-500">Whatsapp API</span>
            <span className="text-gray-800"> Solutions.</span>
          </h1>

          {/* Subheading */}
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Automate. Communicate. Accelerate Your Business Growth with Our Powerful API Solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4">
            <Link
              to='https://whatsapp.gntindia.com/register.php'
              className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Get a Free Trial
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const WhatsApps = () => {
  return (
    <div>
      <HeroSection />
      <LeadForm />
      <WhatsappPlatforms />
      <Plan />
      <AppShowcase />
      <ChatbotFeatures />
      <WhatsAppIntegration />
      <TeamMemberAccess />
      <WhatsAppBenefits />
      <WhatsAppAPIFeatures />
      <FAQ />
      <CRMInterface />
      <SplitCard />
    </div>
  )
};

export default WhatsApps;