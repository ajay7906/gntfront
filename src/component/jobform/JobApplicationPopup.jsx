import React, { useState } from 'react';
import { X, Upload, FilePlus, User, Mail, Briefcase, FileText, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JobApplicationPopup = ({ isOpen, onClose, jobTitle }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: null
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            resume: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitted(true);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                onClose();
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    resume: null
                });
            }, 3000);
        }, 1000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <AnimatePresence>
                {!isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white w-full max-w-md mx-4 rounded-2xl shadow-2xl relative"
                    >
                        <button 
                            onClick={onClose} 
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-black mb-2">
                                Apply for {jobTitle}
                            </h2>
                            <p className="text-gray-500 mb-6">
                                Fill out the form below to submit your application.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input 
                                        type="text" 
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email Address"
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="relative">
                                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone Number"
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="relative">
                                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input 
                                        type="file" 
                                        name="resume"
                                        onChange={handleFileChange}
                                        accept=".pdf,.doc,.docx"
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                    {formData.resume && (
                                        <span className="text-sm text-gray-500 mt-2 block">
                                            {formData.resume.name}
                                        </span>
                                    )}
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center"
                                >
                                    <Upload className="mr-2" size={20} /> Submit Application
                                </button>
                            </form>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white w-full max-w-md mx-4 rounded-2xl shadow-2xl p-8 text-center"
                    >
                        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check size={48} className="text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-black mb-4">
                            Application Submitted!
                        </h2>
                        <p className="text-gray-500">
                            Thank you for your interest. We will review your application soon.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default JobApplicationPopup;