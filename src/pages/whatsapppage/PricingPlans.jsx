import React, { useState } from 'react';
import { Check, X, Eye, Gift } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

const PlanPreviewModal = ({ plan, onClose }) => {






  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
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
                <li key={index} className="flex items-center text-green-600">
                  <Check className="text-green-500 mr-2" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Pricing Details:</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>3 Months: ₹{plan.prices['3month']}</div>
              <div>6 Months: ₹{plan.prices['6month']}</div>
              <div>Yearly: ₹{plan.prices.yearly}</div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
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
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate  = useNavigate();

  const plans = {
    basic: {
      name: 'Basic',
      monthly: {
        'monthly': 1, 
        '3month': 2100,
        '6month': 3600,
        yearly: 5000
      },
      features: [
        'Unlimited messages per month ',
        'Basic chatbot integration',
        'Basic analytics',
        'Basic Templates Only',
        'Email Support',
        'Integration Assistance'
      ]
    },
    business: {
      name: 'Business',
      monthly: {
        'monthly': 1200, 
        '3month': 3300,
        '6month': 6000,
        yearly: 10000
      },
      features: [
        'Unlimited messages per month ',
        'Advanced chatbot integration',
        'Advanced insights analytics',
        'Industry-Specific templates',
        'Email & Chat support',
        'Integration Assistance'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      monthly: {
        'monthly': 3000, 
        '3month': 8400,
        '6month': 16200,
        yearly: 25000
      },
      features: [
        'Unlimited messages per month',
        'AI-Powered with E-commerce Catalog Features',
        'Detailed Reports with Sales & Customer Insights',
        'All Templates + E-commerce Order Templates',
        'Email, Chat & Phone Support ',
        'Included – Online Store with Product Listings',
        'Complete E-commerce Setup',
        'Full Assistance with Advanced Customizations'
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
    // Navigate to payment form with plan details
    // If using React Router:
    navigate('/payment', { state: { planDetails: planData } });
    // Or manage with state if not using routing
  };



  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h1>
        
        {/* Billing Cycle Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-2 rounded-full shadow-md flex">
            {['monthly', '3month', '6month', 'yearly'].map((cycle) => (
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
            // Safely get the price, defaulting to 0 if not found
            const price = planDetails.monthly[billingCycle] || 0;
            
            return (
              <div 
                key={planName} 
                className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform relative"
              >
                {billingCycle === 'yearly' && (
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
                    <li key={index} className="flex items-center">
                      <Check className="text-green-500 mr-2" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-4">
                  <button 
                   onClick={() => handleBuyNow(planName, planDetails)}
                   className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
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
              const yearlyPrice = planDetails.monthly.yearly;
              const monthlyPrice = planDetails.monthly.monthly;
              const totalMonthlyPrice = monthlyPrice * 12;
              const savings = totalMonthlyPrice - yearlyPrice;
              
              return (
                <div key={planName} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold capitalize mb-2">{planName} Plan</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    ₹{yearlyPrice} 
                    <span className="text-sm text-gray-500 ml-2">/year</span>
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
                  {billingCycle === 'yearly' && (
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