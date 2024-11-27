import React from 'react';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      duration: 'Monthly',
      price: 3000,
      billing: '/month',
      features: [
        'Full access to all features',
        'Priority support',
        'Regular updates',
        'Basic analytics'
      ]
    },
    {
      duration: '3 Months',
      price: 8400,
      billing: '/quarter',
      features: [
        'All monthly features',
        'Advanced analytics',
        'Custom reporting',
        'Team collaboration'
      ]
    },
    {
      duration: '6 Months',
      price: 16200,
      billing: '/6 months',
      features: [
        'All quarterly features',
        'Premium support',
        'Enhanced security',
        'API access'
      ]
    },
    {
      duration: 'Yearly',
      price: 25000,
      billing: '/year',
      features: [
        'All 6-month features',
        'Dedicated account manager',
        'Custom integration',
        'Advanced security'
      ]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <Card key={plan.duration} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">{plan.duration}</h3>
              <div className="text-center">
                <span className="text-3xl font-bold">₹{plan.price.toLocaleString()}</span>
                <span className="text-gray-600 text-sm">{plan.billing}</span>
              </div>
              <ul className="space-y-3 mt-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4">
                Choose Plan
              </button>
            </div>
          </Card>
        ))}
      </div>
      <p className="text-center text-sm text-gray-600 mt-6">
        Get 2 months free with yearly subscription
      </p>
    </div>
  );
};

export default PricingPlans;