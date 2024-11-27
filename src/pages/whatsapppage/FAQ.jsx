import React, { useState } from 'react';
import { Phone,Plus, Minus, MessageSquare, Badge, Bot, UserPlus, Inbox, ClipboardList } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="mb-3">
      <button
        className={`w-full p-4 text-left bg-green-100/70 hover:bg-green-100 rounded-lg flex justify-between items-center transition-colors duration-200 ${isOpen ? 'rounded-b-none' : ''}`}
        onClick={onClick}
      >
        <span className="font-medium text-gray-800 flex items-center">
          {isOpen ? (
            <Minus className="h-5 w-5 text-green-800 mr-2" />
          ) : (
            <Plus className="h-5 w-5 text-green-800 mr-2" />
          )}
          {question}
        </span>
      </button>
      {isOpen && answer && (
        <div className="p-6 border border-t-0 border-gray-200 bg-white rounded-b-lg">
          {typeof answer === 'string' ? (
            <p className="text-gray-700">{answer}</p>
          ) : (
            answer
          )}
        </div>
      )}
    </div>
  );
  
  
  const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0); // Set to 1 to show the second item by default
  
    const document1VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        The WhatsApp Business API is designed for medium to large businesses to automate and scale 
        customer communications. Unlike the WhatsApp Business App, which is suitable for small 
        businesses, the API offers features like automation, broadcast messaging, and multi-user access. 
        </p>
      </div>
    );

    const document2VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        WhatsApp API messages are not free of cost. Charges depend upon the kind of 
        message and the number of messages sent. 
        </p>
        
      </div>
    );

    const document3VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        
        </p>
        <ul className="space-y-2 mt-3">
          <li className="flex items-center">
            <span className="text-green-700 mr-2">1-</span>
            <span>User-Initiated Message: When a customer messages your business first or responds to your 
            message after 24 hours.</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-700 mr-2">2-</span>
            <span>Business-Initiated Message: When your business initiates the first message 
            or makes contact with a customer 24 hours after their last interaction.
            </span>
          </li>
          
        </ul>
      </div>
    );

    const document4VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
          For use of WhatsApp API, businesses would be required to pass through Meta's 
          verification process and provide valid business documents to activate their WhatsApp API account. 
        </p>
      </div>
    );

    const document5VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        Yes, you could easily transfer your service on the WhatsApp API platform of GNTINDIA without 
        losing your data and customer conversations.
        </p>
      </div>
    );

    const document6VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        No, GNTINDIA is transparent with no additional hidden fees. All charges, 
        including your charges for messages, as well as Meta connectivity, are clearly outlined in 
        our price plans.
        </p>
      </div>
    );

    const document7VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        Yes, we have support in place post-enablement consisting of: 
        </p>
        <ul className="space-y-2 mt-3">
          <li className="flex items-center">
            <span className="text-green-700 mr-2">1-</span>
            <span>Free Meta Verification help</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-700 mr-2">2-</span>
            <span>Individual training on features of the WhatsApp API.</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-700 mr-2">3-</span>
            <span>Availability for on-call support for queries and troubleshooting.</span>
          </li>
          
        </ul>
      </div>
    );

    const document8VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        The blue tick verification, also known as Meta Verified Badge, creates trust by confirming the 
        authenticity of your business. GNTINDIA offers free blue tick verification-related support.
        </p>
      </div>
    );

    const document9VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        Template messages are pre-approved message formats that businesses can use for 
        notifications, reminders, and updates. These templates need Meta's approval before being sent to 
        customers.  
        </p>
      </div>
    );

    const document10VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        GNTINDIA's WhatsApp API lets the various team members manage 
        conversations using the same WhatsApp account. Roles such as an administrator or a support 
        agent can be assigned in order to ensure effective communication.
        </p>
      </div>
    );

    const document11VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        You can import your contact lists directly from Google Sheets to the GNTINDIA system. This 
        integration makes lead managing much easier and better data handling.
        </p>
      </div>
    );

    const document12VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        WhatsApp API allows sending a variety of media:
        </p>
        <ul className="space-y-2 mt-3">
          <li className="flex items-center">
            <span className="text-green-700 mr-2">1-</span>
            <span>Messages (up to 1500 characters).</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-700 mr-2">2-</span>
            <span>Photos</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-700 mr-2">3-</span>
            <span>Videos</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-700 mr-2">4-</span>
            <span>Documents PDF, Word, etc.</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-700 mr-2">5-</span>
            <span>Interactive buttons and call-to-action links.</span>
          </li>
          
        </ul>
      </div>
    );

    const document13VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        The "Call Now", "Sign Up", or "Visit Website" call-to-action buttons make 
        messages interactive, which raises the click-through rate and gets customers engaging. 
        </p>
      </div>
    );
    

    const document14VerificationAnswer = (
      <div className="space-y-2">
        <p className="text-gray-700">
        
        </p>
        <ul className="space-y-2 mt-3">
          <li className="flex items-center">
            <span className="text-green-700 mr-2">1-</span>
            <span>Transparent pricing with no hidden charges.</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-700 mr-2">2-</span>
            <span>Free Meta Verification and training</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-700 mr-2">3-</span>
            <span>User-Friendly interface with CRM integration</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-700 mr-2">4-</span>
            <span>Direct Meta billing with discounts</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-700 mr-2">4-</span>
            <span>Dedicated support and live demos.</span>
          </li>
          
        </ul>
      </div>
    );


    const faqData = [
      {
        question: "What is WhatsApp Business API, and how is it different from WhatsApp Business?",
        answer: document1VerificationAnswer,
        id: 1
      },
      {
        question: "Is WhatsApp API messaging free? ",
        answer: document2VerificationAnswer,
        id: 2
      },
      {
        question: "What is a user-initiated vs. business-initiated message?",
        answer: document3VerificationAnswer,
        id: 3
      },
      {
        question: "Will I need to undergo document verification to use WhatsApp API?",
        answer: document4VerificationAnswer,
        id: 4
      },
      {
        question: "Can I switch my WhatsApp API service from another provider?",
        answer: document5VerificationAnswer,
        id: 5
      },
      {
        question: "Can there be any additional fees post enabling?",
        answer: document6VerificationAnswer,
        id: 6
      },
      {
        question: " Do I receive support post enabling?",
        answer: document7VerificationAnswer,
        id: 7
      },
      {
        question: "What does the blue tick verification mean and do they charge for it?",
        answer: document8VerificationAnswer,
        id: 8
      },
      {
        question: "What are template messages and how do they function?",
        answer: document9VerificationAnswer,
        id: 9
      },
      {
        question: "How does the multiple access system work? ",
        answer: document10VerificationAnswer,
        id: 10
      },
      {
        question: "How do I add Google Sheets to WhatsApp API?",
        answer: document11VerificationAnswer,
        id: 11
      },
      {
        question: "What kind of media can I send by way of WhatsApp API?",
        answer: document12VerificationAnswer,
        id: 12
      },
      {
        question: "How does call-to-action buttons work in messaging? ",
        answer: document13VerificationAnswer,
        id: 13
      },
      {
        question: "Why GNTINDIA for WhatsApp API services?",
        answer: document14VerificationAnswer,
        id: 14
      },
    ];
  
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 bg-green-600 text-white text-sm rounded-md mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Clarification Questions Answers
          </h2>
          <p className="text-center font-medium text-blue-900 mb-4">
            Leading Business WhatsApp API Service Provider
          </p>
          <p className="text-gray-600 mb-8">
            WhatsApp is a powerful messaging platform that allows businesses to talk with customers in
            their preferred medium and has over 2 billion active users globally. For instance, with WhatsApp
            API integration into your existing systems, you are able to automate messages, send notifications
            or even personalize marketing campaigns right from the usual WhatsApp interface.
          </p>
        </div>
  
        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    );
};

export default FAQ;