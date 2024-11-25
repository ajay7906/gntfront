import React, { useState } from 'react';
import { Mail, Shield, Lock, Users, Bell, FileText, HelpCircle } from 'lucide-react';

const PolicyPage = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const privacyPolicy = [
    {
      id: 1,
      title: "Information That We Collect",
      icon: <FileText className="w-6 h-6" />,
      content: "Personal information includes your name, email address, phone number, all information regarding payment, and any other information you may provide us during any form of interaction or service engagement."
    },
    {
      id: 2,
      title: "Using the Information",
      icon: <Users className="w-6 h-6" />,
      content: "Providing and bettering our services effectively. To send messages such as updates, offers or any technical support. To make your visit to our website straightforward and customized to your needs."
    },
    {
      id: 3,
      title: "Sharing of Data",
      icon: <Bell className="w-6 h-6" />,
      content: "Your data will not be sold, shared, or rented to third parties without asking your permission. But it may be shared with trusted partners solely to deliver our services."
    },
    {
      id: 4,
      title: "Data Protection",
      icon: <Shield className="w-6 h-6" />,
      content: "We adopt advanced security processes for the safeguarding of your personal data against access, misuse or public disclosure by unauthorized parties."
    },
    {
      id: 5,
      title: "Changes to Privacy Policy",
      icon: <Lock className="w-6 h-6" />,
      content: "Our Privacy Policy may change from time to time; thus, a frequent visit to our website will be considered as acceptance of the new privacy policy."
    },
    {
      id: 6,
      title: "Contact Us",
      icon: <Mail className="w-6 h-6" />,
      content: "If you have questions or concerns regarding our privacy policy, please do not hesitate to reach out to us at info@gntind.com."
    }
  ];

  const refundPolicy = [
    {
      id: 1,
      title: "Non-refundable Services",
      icon: <FileText className="w-6 h-6" />,
      content: "All services given by GNTINDIA are non-refundable. Some of the services include but are not limited to: Software development, and all other IT-related services."
    },
    {
      id: 2,
      title: "Pre-service Confirmation",
      icon: <HelpCircle className="w-6 h-6" />,
      content: "All the details of the project must be checked and confirmed by a client before starting work. You agree to our no-refund policy by paying."
    },
    {
      id: 3,
      title: "Dispute Resolution",
      icon: <Users className="w-6 h-6" />,
      content: "Although we look forward to making sure the clients are satisfied, we do not refund any money. We are open to communication for solving any issues or misunderstandings."
    },
    {
      id: 4,
      title: "Policy Changes",
      icon: <Bell className="w-6 h-6" />,
      content: "We may update this Refund Policy at any time. Continued use of our services constitutes your acceptance of the updated terms. For further queries, kindly reach us at info@gntind.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-20">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-900 mb-4">
            Our Policies
          </h1>
          <p className="text-lg text-gray-600">
            Your privacy and satisfaction are our top priorities
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-purple-100 p-1">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'privacy'
                  ? 'bg-white text-purple-900 shadow-md'
                  : 'text-purple-600 hover:text-purple-900'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('refund')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'refund'
                  ? 'bg-white text-purple-900 shadow-md'
                  : 'text-purple-600 hover:text-purple-900'
              }`}
            >
              Refund Policy
            </button>
          </div>
        </div>

        {/* Policy Content */}
        <div className="grid gap-6">
          {(activeTab === 'privacy' ? privacyPolicy : refundPolicy).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600 mr-4">
                  {item.icon}
                </div>
                <h2 className="text-xl font-semibold text-purple-900">
                  {item.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-purple-900 mb-4">
            Need More Information?
          </h3>
          <p className="text-gray-600 mb-4">
            We're here to help! Contact us for any questions about our policies.
          </p>
          <a
            href="mailto:info@gntind.com"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Support
          </a>
        </div>

        {/* Footer */}
        {/* <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            Last updated: November 2024
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default PolicyPage;