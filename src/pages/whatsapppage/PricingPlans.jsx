

import React, { useState } from 'react';
import { Check, X, Eye, Gift } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

const PlanPreviewModal = ({ plan, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-3 max-w-md w-full relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl font-bold capitalize mb-6">{plan.name} Plan Preview</h2>
        
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className={`flex items-center ${feature.available ? 'text-green-600' : 'text-red-600'}`}>
                  {feature.available ? (
                    <Check className="text-green-500 mr-2" size={20} />
                  ) : (
                    <X className="text-red-500 mr-2" size={20} />
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Pricing Details:</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>Monthly: ₹{plan.prices['Monthly']}</div>
              <div>3 Months: ₹{plan.prices['3 Months']}</div>
              <div>6 Months: ₹{plan.prices['6 Months']}</div>
              <div>Yearly: ₹{plan.prices.Yearly}</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('Monthly'); // Changed from 'yearly' to 'Monthly'
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const plans = {
    basic: {
      name: 'Basic',
      monthly: {
        'Monthly': 800, 
        '3 Months': 2100,
        '6 Months': 3600,
        Yearly: 5000
      },
      features: [
        { text: 'Unlimited messages per month', available: true },
        { text: 'Basic chatbot integration', available: true },
        { text: 'Basic analytics', available: true },
        { text: 'Basic Templates Only', available: true },
        { text: 'Email Support', available: true },
        { text: 'Integration Assistance', available: true },
        { text: 'Complete E-commerce Setup', available: false },
        { text: 'Full Assistance with Advanced Customizations', available: false }
      ]
    },
    business: {
      name: 'Business',
      monthly: {
        'Monthly': 1200, 
        '3 Months': 3300,
        '6 Months': 6000,
        Yearly: 10000
      },
      features: [
        { text: 'Unlimited messages per month', available: true },
        { text: 'Advanced chatbot integration', available: true },
        { text: 'Advanced insights analytics', available: true },
        { text: 'Industry-Specific templates', available: true },
        { text: 'Email & Chat support', available: true },
        { text: 'Integration Assistance', available: true },
        { text: 'Complete E-commerce Setup', available: false },
        { text: 'Full Assistance with Advanced Customizations', available: false }
      ]
    },
    enterprise: {
      name: 'Enterprise',
      monthly: {
        'Monthly': 3000, 
        '3 Months': 8400,
        '6 Months': 16200,
        Yearly: 25000
      },
      features: [
        { text: 'Unlimited messages per month', available: true },
        { text: 'AI-Powered with E-commerce Catalog Features', available: true },
        { text: 'Detailed Reports with Sales/Customer Insights', available: true },
        { text: 'All Templates + E-commerce Order Templates', available: true },
        { text: 'Email, Chat & Phone Support', available: true },
        { text: 'Included – Online Store with Product Listings', available: true },
        { text: 'Complete E-commerce Setup', available: true },
        { text: 'Full Assistance with Advanced Customizations', available: true }
      ]
    }
  };

  const handlePreview = (planName, planDetails) => {
    setSelectedPlan({
      name: planName,
      features: planDetails.features,
      prices: planDetails.monthly
    });
  };

  const handleBuyNow = (planName, planDetails) => {
    const planData = {
      name: planName,
      price: planDetails.monthly[billingCycle],
      cycle: billingCycle
    };
    navigate('/payment', { state: { planDetails: planData } });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h1>
        
        {/* Billing Cycle Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-2 rounded-full shadow-md flex">
            {['Monthly', '3 Months', '6 Months', 'Yearly'].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  billingCycle === cycle 
                    ? 'bg-green-500 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(plans).map(([planName, planDetails]) => {
            const price = planDetails.monthly[billingCycle] || 0;
            
            return (
              <div 
                key={planName} 
                className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform relative"
              >
                {billingCycle === 'Yearly' && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-lg flex items-center">
                    <Gift className="mr-1" size={16} />
                    10 Months and 2 Months Free
                  </div>
                )}
                <h2 className="text-2xl font-bold capitalize p-2 mb-4">{planName} Plan</h2>
                <div className="text-4xl font-extrabold text-green-600 mb-4">
                  ₹{price.toFixed(2)}
                  <span className="text-sm text-gray-500 ml-2">/{billingCycle}</span>
                </div>
                
                <ul className="mb-6 space-y-3">
                  {planDetails.features.map((feature, index) => (
                    <li key={index} className={`flex items-center ${feature.available ? 'text-gray-800' : 'text-gray-400'}`}>
                      {feature.available ? (
                        <Check className="text-green-500 mr-2" size={20} />
                      ) : (
                        <X className="text-red-500 mr-2" size={20} />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleBuyNow(planName, planDetails)}
                    className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
                  >
                    Buy Now
                  </button>
                  <button 
                    onClick={() => handlePreview(planName, planDetails)}
                    className="w-full border border-green-500 text-green-500 py-3 rounded-lg hover:bg-green-50 transition flex items-center justify-center"
                  >
                    <Eye className="mr-2" size={20} />
                    Preview
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Yearly Full Payment Section */}
        <div className="mt-12 bg-green-50 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Yearly Full Payment Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(plans).map(([planName, planDetails]) => {
              const yearlyPrice = planDetails.monthly.Yearly;
              const monthlyPrice = planDetails.monthly.Monthly;
              const totalMonthlyPrice = monthlyPrice * 12;
              const savings = totalMonthlyPrice - yearlyPrice;
              
              return (
                <div key={planName} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold capitalize mb-2">{planName} Plan</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    ₹{yearlyPrice} 
                    <span className="text-sm text-gray-500 ml-2">/Year</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    Monthly Price: ₹{monthlyPrice}
                  </div>
                  <div className="text-sm text-gray-600 mb-2 line-through">
                    Total Monthly Price (12 months): ₹{totalMonthlyPrice}
                  </div>
                  <div className="text-green-700 font-medium">
                    You Save: ₹{savings} 
                    <span className="text-sm ml-1">({Math.round((savings / totalMonthlyPrice) * 100)}% Off)</span>
                  </div>
                  {billingCycle === 'Yearly' && (
                    <div className="mt-2 bg-green-100 text-green-800 px-2 py-1 rounded text-sm flex items-center justify-center">
                      <Gift className="mr-1" size={16} />
                      10 Months and 2 Months Free
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-gray-600">
            Pay for the entire year upfront and get amazing savings!
          </p>
        </div>
      </div>

      {/* Preview Modal */}
      {selectedPlan && (
        <PlanPreviewModal 
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </div>
  );
};

export default PricingPlans;
