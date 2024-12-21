// import { useState } from 'react';

// export default function ApplicationForm({ job, onSubmit }) {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     linkedin: '',
//     experience: '',
//     portfolio: '',
//     coverLetter: '',
//     resume: null,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//     onSubmit();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             First Name *
//           </label>
//           <input
//             type="text"
//             required
//             className="w-full px-3 py-2 border rounded-lg"
//             value={formData.firstName}
//             onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Last Name *
//           </label>
//           <input
//             type="text"
//             required
//             className="w-full px-3 py-2 border rounded-lg"
//             value={formData.lastName}
//             onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Email *
//         </label>
//         <input
//           type="email"
//           required
//           className="w-full px-3 py-2 border rounded-lg"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Phone *
//         </label>
//         <input
//           type="tel"
//           required
//           className="w-full px-3 py-2 border rounded-lg"
//           value={formData.phone}
//           onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           LinkedIn Profile
//         </label>
//         <input
//           type="url"
//           className="w-full px-3 py-2 border rounded-lg"
//           value={formData.linkedin}
//           onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Years of Relevant Experience *
//         </label>
//         <input
//           type="text"
//           required
//           className="w-full px-3 py-2 border rounded-lg"
//           value={formData.experience}
//           onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Portfolio/GitHub
//         </label>
//         <input
//           type="url"
//           className="w-full px-3 py-2 border rounded-lg"
//           value={formData.portfolio}
//           onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Cover Letter
//         </label>
//         <textarea
//           className="w-full px-3 py-2 border rounded-lg h-32"
//           value={formData.coverLetter}
//           onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Resume/CV *
//         </label>
//         <input
//           type="file"
//           required
//           accept=".pdf,.doc,.docx"
//           className="w-full"
//           onChange={(e) => setFormData({ ...formData, resume: e.target.files ? e.target.files[0] : null })}
//         />
//       </div>

//       <div className="flex justify-end gap-4">
//         <button
//           type="button"
//           onClick={onSubmit}
//           className="px-6 py-2 border rounded-lg hover:bg-gray-50"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           Submit Application
//         </button>
//       </div>
//     </form>
//   );
// }



















import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, ChevronRight, Users, Heart, X, Upload, FilePlus, User, Mail, FileText, Check, Linkedin, Globe, FileEdit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JobApplicationPopup = ({ isOpen, onClose, jobTitle }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        linkedin: '',
        experience: '',
        portfolio: '',
        coverLetter: '',
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
                    linkedin: '',
                    experience: '',
                    portfolio: '',
                    coverLetter: '',
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
                        className="bg-white w-full max-w-md mx-4 rounded-2xl shadow-2xl relative overflow-y-auto max-h-[90vh]"
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
                                    <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="url"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleInputChange}
                                        placeholder="LinkedIn Profile URL"
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="relative">
                                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        placeholder="Years of Experience"
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="relative">
                                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="url"
                                        name="portfolio"
                                        value={formData.portfolio}
                                        onChange={handleInputChange}
                                        placeholder="Portfolio Website (Optional)"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="relative">
                                    <FileEdit className="absolute left-3 top-3 text-gray-400" size={20} />
                                    <textarea
                                        name="coverLetter"
                                        value={formData.coverLetter}
                                        onChange={handleInputChange}
                                        placeholder="Cover Letter"
                                        required
                                        rows="4"
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