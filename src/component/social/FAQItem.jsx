import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 bg-gray-50 text-left rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        {isOpen ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-gray-600" />}
      </button>

      {isOpen && (
        <div className="p-4 text-gray-700 bg-white">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
