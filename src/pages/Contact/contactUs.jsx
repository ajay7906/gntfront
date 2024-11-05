// src/components/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 pt-16">
      {/* Hero Section */}
      <section className="bg-[#F2F2F2] text-black py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">How We can help?</h1>
          <p className="text-lg">Happy to see you here. We are really glad to know,
            that you had interest in our products or services. Whether you have a query, 
            question or have something interesting to share, reach us and one of us will 
            get back to you shortly.
           </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-gray-600">GNT INDIA B-96,Road NO. 9,Industrial Area, RaniBazar, Bikaner</p>
              {/* <p className="text-gray-600">City, State, Zip Code</p> */}
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-600">info@gntind.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-600">+91 9672418000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
          <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
