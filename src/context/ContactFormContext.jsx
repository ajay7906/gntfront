// ContactFormContext.jsx
import React, { createContext, useContext, useState } from 'react';

const ContactFormContext = createContext();

export const ContactFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    businessName: ''
  });

  const openForm = () => setIsOpen(true);
  const closeForm = () => {
    setIsOpen(false);
    // Reset form after closing
    setFormData({
      name: '',
      email: '',
      mobile: '',
      businessName: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    closeForm();
  };

  const value = {
    isOpen,
    formData,
    setFormData,
    openForm,
    closeForm,
    handleSubmit
  };

  return (
    <ContactFormContext.Provider value={value}>
      {children}
    </ContactFormContext.Provider>
  );
};

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
};