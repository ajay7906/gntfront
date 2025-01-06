import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { Link } from 'react-router-dom';
import axios from "axios"; // For API requests

const RescheduleTaskForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    mobile: "",
    rescheduleRegions: "",
    currentLocation: "",
    date: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending form data to backend
      const response = await axios.post("http://localhost:5000/api/rejected-task", formData);
      setSubmittedData(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmittedData(null);
  };

  return (
    <div className="pt-16">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Reschedule Task</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Company Name", name: "companyName", placeholder: "Company name" },
            { label: "Name", name: "name", placeholder: "Name" },
            { label: "Mobile", name: "mobile", placeholder: "Mobile" },
            { label: "Reschedule Regions", name: "rescheduleRegions", placeholder: "reschedule regions" },
            { label: "Current Location", name: "currentLocation", placeholder: "Current Location" },
          ].map((field) => (
            <div className="mb-4" key={field.name}>
              <label className="block font-medium mb-1">{field.label}:</label>
              <input
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="block font-medium mb-1">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Submit
          </button>
        </form>
      </div>

      {/* Thank You Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-md w-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={20} />
            </button>
            
            <div className="text-center">
              {/* Success Icon */}
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
              </div>

              {/* Thank You Message */}
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You</h2>
              <p className="text-gray-600 mb-6">
                Send your message. Your dashboard has been updated. Please check it.
              </p>

              {/* Button */}
              <Link
                to="/"
                className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
              >
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      )} 
    </div>
  );
};

export default RescheduleTaskForm;
