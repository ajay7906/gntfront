import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TermsAndConditions = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: "When accessing or using our Website or Services, you agree to accept all the terms and conditions in its entirety. If, however, you disagree with any or even just part of these Terms and Conditions, then please do not visit or use our site."
    },
    {
      id: 2,
      title: "Services Available",
      content: "GNTINDIA offers a range of digital services which include ERP systems, ecommerce, security platforms, online marketing, AI-based tools, CRM, cloud solutions, and IT services. In the case of the described services, each is designed to suit the clients' needs and is nontransferable."
    },
    {
      id: 3,
      title: "Payments and Refunds",
      content: "Our payment for our services will never be refunded regardless of the circumstances. Project details should be accurate to avoid confusion and misdelivery. Refunds will not be done once service activation occurs."
    },
    {
      id: 4,
      title: "Proper Use of Services",
      content: "We want our clients to use our services properly, following all existing laws and regulations. Unethical and illegal utilization of our services will result in immediate account deactivation with no refund."
    },
    {
      id: 5,
      title: "Limitation of Liability",
      content: "Although perfection is our goal, GNTINDIA is not liable for any direct or indirect losses, delays, or other results brought about by the utilization of our services."
    },
    {
      id: 6,
      title: "Changing Terms",
      content: "GNTINDIA has the right to change and modify these Terms and Conditions at any given time. The continued access and use of our service shall be deemed as acceptance of the modified terms."
    },
    {
      id: 7,
      title: "Governing Law",
      content: "These Terms and Conditions are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in [City], India."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-20">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to GNTINDIA! Please review our terms carefully.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full p-4 flex justify-between items-center text-left hover:bg-indigo-50 transition-colors duration-200"
              >
                <h2 className="text-xl font-semibold text-indigo-900">
                  {section.title}
                </h2>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-6 h-6 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-indigo-600" />
                )}
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedSection === section.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="p-4 text-gray-700 bg-indigo-50 border-t border-indigo-100">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        {/* <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Last updated: November 2024
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default TermsAndConditions;