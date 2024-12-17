// import React, { useState } from 'react';
// import { Search, MapPin, Briefcase, Clock, ChevronRight, Star, Users, Heart } from 'lucide-react';

// // Animated background bubble component
// const AnimatedBubble = ({ color }) => {
//     const size = Math.random() * 200 + 100;
//     const duration = Math.random() * 20 + 10;
//     const delay = Math.random() * -20;

//     return (
//         <div
//             className="absolute rounded-full mix-blend-soft-light animate-float opacity-20 blur-3xl"
//             style={{
//                 backgroundColor: color,
//                 width: size,
//                 height: size,
//                 animation: `float ${duration}s infinite ease-in-out ${delay}s`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//             }}
//         />
//     );
// };

// // Job Card Component
// const JobCard = ({ title, location, type, experience, department }) => (
//     <div className="group p-6 rounded-xl bg-blue-200 backdrop-blur-sm border border-black/20 hover:border-white/40 transition-all duration-300 cursor-pointer">
//         <div className="flex justify-between items-start mb-4">
//             <div>
//                 <h3 className="text-xl font-bold text-black mb-2 group-hover:text-blue-500 transition-colors">
//                     {title}
//                 </h3>
//                 <div className="flex flex-wrap gap-3">
//                     <span className="flex items-center text-gray-500 text-sm">
//                         <MapPin size={16} className="mr-1" /> {location}
//                     </span>
//                     <span className="flex items-center text-gray-500 text-sm">
//                         <Briefcase size={16} className="mr-1" /> {type}
//                     </span>
//                     <span className="flex items-center text-gray-500 text-sm">
//                         <Clock size={16} className="mr-1" /> {experience}
//                     </span>
//                     <span className="flex items-center text-gray-500 text-sm">
//                         <Users size={16} className="mr-1" /> {department}
//                     </span>
//                 </div>
//             </div>
//             <button className="text-blue-300 hover:text-blue-500 transition-colors">
//                 <Heart size={24} />
//             </button>
//         </div>
//         <div className="flex justify-between items-center">
//             <div className="flex gap-2">
//                 {['React', 'Node.js', 'TypeScript'].map((skill) => (
//                     <span key={skill} className="px-3 py-1 rounded-full bg-white/10 text-sm text-black">
//                         {skill}
//                     </span>
//                 ))}
//             </div>
//             <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
//                 Apply Now <ChevronRight size={16} className="ml-1" />
//             </button>
//         </div>
//     </div>
// );
// import { motion } from "framer-motion";
// import SplitCard from '../startproject/HalfSide';
// const CareersPage = () => {
//     const [selectedDepartment, setSelectedDepartment] = useState('All');
//     const [selectedLocation, setSelectedLocation] = useState('All');

//     const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Sales', 'Product'];
//     const locations = ['All', 'Remote', 'Work from office'];

//     const jobs = [
//         {
//             title: 'Senior Frontend Developer',
//             location: 'Work from office',
//             type: 'Full-time',
//             experience: '5+ years',
//             department: 'Engineering'
//         },
//         {
//             title: 'UX Designer',
//             location: 'Remote',
//             type: 'Full-time',
//             experience: '3+ years',
//             department: 'Design'
//         },
//         {
//             title: 'Product Manager',
//             location: 'Remote',
//             type: 'Full-time',
//             experience: '4+ years',
//             department: 'Product'
//         }
//     ];

//     // Function to scroll to top
//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     };

//     return (
//         <>
//             <div className="min-h-screen ">
//                 {/* Animated Background */}
//                 {/* <div className="fixed inset-0 -z-10 overflow-hidden">
//         {[...Array(6)].map((_, i) => (
//           <AnimatedBubble
//             key={i}
//             color={['#4F46E5', '#7C3AED', '#2563EB', '#8B5CF6', '#3B82F6', '#6366F1'][i]}
//           />
//         ))}
//       </div> */}

//                 {/* Hero Section */}
//                 <section className="relative py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
//                     {/* <div className="fixed inset-0 -z-10 overflow-hidden">
//             {[...Array(6)].map((_, i) => (
//             <AnimatedBubble
//                 key={i}
//                 color={['#4F46E5', '#7C3AED', '#2563EB', '#8B5CF6', '#3B82F6', '#6366F1'][i]}
//             />
//             ))}
//         </div> */}
//                     <div className="max-w-6xl mx-auto text-center py-28 ">
//                         <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 animate-fade-in">
//                             Work at GNTINDIA
//                         </h1>
//                         <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
//                             Be part of something extraordinary. We're looking for talented individuals
//                             who share our passion for innovation and excellence.
//                         </p>
//                         <div className="relative max-w-2xl mx-auto animate-fade-in-delay-2">
//                             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-666" size={20} />
//                             <input
//                                 type="text"
//                                 placeholder="Search for jobs..."
//                                 className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-black/20 rounded-xl text-black placeholder-gray-666 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             />
//                         </div>









//                         <motion.div
//                             className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
//                             animate={{
//                                 x: [0, 100, 0],
//                                 y: [0, 50, 0],
//                             }}
//                             transition={{
//                                 duration: 20,
//                                 repeat: Infinity,
//                                 ease: "linear"
//                             }}
//                         />
//                         <motion.div
//                             className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
//                             animate={{
//                                 x: [0, -100, 0],
//                                 y: [0, -50, 0],
//                             }}
//                             transition={{
//                                 duration: 15,
//                                 repeat: Infinity,
//                                 ease: "linear"
//                             }}
//                         />















//                     </div>
//                 </section>

//                 {/* Stats Section */}


//                 {/* Filters Section */}
//                 <section className="py-12 px-6 bg-[#f2f2f2] rounded-md">
//                     <div className="max-w-6xl mx-auto">
//                         <div className="flex flex-wrap gap-4 mb-8">
//                             <div className="flex-1">
//                                 <label className="block text-black mb-2">Department</label>
//                                 <select
//                                     value={selectedDepartment}
//                                     onChange={(e) => setSelectedDepartment(e.target.value)}
//                                     className="w-full px-4 py-3 bg-white backdrop-blur-sm border border-black/20 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 >
//                                     {departments.map((dept) => (
//                                         <option key={dept} value={dept} className="bg-gray-100">
//                                             {dept}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>
//                             <div className="flex-1">
//                                 <label className="block text-black mb-2">Location</label>
//                                 <select
//                                     value={selectedLocation}
//                                     onChange={(e) => setSelectedLocation(e.target.value)}
//                                     className="w-full px-4 py-3 bg-white backdrop-blur-sm border border-black/20 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
//                                 >
//                                     {locations.map((loc) => (
//                                         <option key={loc} value={loc} className="bg-gray-100">
//                                             {loc}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Job Listings */}
//                         <div className="space-y-6 ">
//                             {jobs.map((job, index) => (
//                                 <JobCard key={index} {...job} />
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Culture Section */}
//                 <section className="py-20 px-6 ">
//                     <div className="max-w-6xl mx-auto">
//                         <h2 className="text-4xl font-bold text-black mb-12 text-center">Our Culture</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                             {[
//                                 {
//                                     title: 'Innovation First',
//                                     description: 'We encourage creative thinking and innovative solutions.'
//                                 },
//                                 {
//                                     title: 'Work-Life Balance',
//                                     description: 'Flexible schedules and remote work options for our team.'
//                                 },
//                                 {
//                                     title: 'Growth Opportunities',
//                                     description: 'Continuous learning and career development paths.'
//                                 }
//                             ].map((item, index) => (
//                                 <div key={index} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-black/40 hover:border-black/10 transition-all duration-300">
//                                     <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
//                                     <p className="text-gray-500">{item.description}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Benefits Section */}
//                 <section className="py-20 px-6 bg-[#f2f2f2] backdrop-blur-sm rounded-md">
//                     <div className="max-w-6xl mx-auto">
//                         <h2 className="text-4xl font-bold text-black mb-12 text-center">Benefits & Perks</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//                             {[
//                                 'Health Insurance',
//                                 'Stock Options',
//                                 'Flexible Hours',
//                                 'Remote Work',
//                                 'Learning Budget',
//                                 'Paid Time Off',
//                                 'Gym Membership',
//                                 'Team Events'
//                             ].map((benefit, index) => (
//                                 <div key={index} className="p-6 rounded-xl bg-blue-300 backdrop-blur-sm border border-black/20 text-center hover:border-black/50 transition-all duration-300">
//                                     <p className="text-black font-medium">{benefit}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* CTA Section */}
//                 <section className="py-20 px-6">
//                     <div className="max-w-4xl mx-auto text-center">
//                         <h2 className="text-4xl font-bold text-black mb-6">Ready to Join Us?</h2>
//                         <p className="text-xl text-gray-500 mb-8">
//                             Take the first step towards an exciting career with us.
//                         </p>
//                         <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors duration-300"
//                          onClick={scrollToTop}
//                         >
//                             View All Positions
//                         </button>
//                     </div>
//                 </section>
//             </div>
//             <SplitCard />

//         </>
//     );
// };

// export default CareersPage;


























































import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, ChevronRight, Users, Heart, X, Upload, FilePlus, User, Mail, FileText, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Job Application Popup Component
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

// Job Card Component
const JobCard = ({ title, location, type, experience, department }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            <div className="group p-6 rounded-xl bg-blue-200 backdrop-blur-sm border border-black/20 hover:border-white/40 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-blue-500 transition-colors">
                            {title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <span className="flex items-center text-gray-500 text-sm">
                                <MapPin size={16} className="mr-1" /> {location}
                            </span>
                            <span className="flex items-center text-gray-500 text-sm">
                                <Briefcase size={16} className="mr-1" /> {type}
                            </span>
                            <span className="flex items-center text-gray-500 text-sm">
                                <Clock size={16} className="mr-1" /> {experience}
                            </span>
                            <span className="flex items-center text-gray-500 text-sm">
                                <Users size={16} className="mr-1" /> {department}
                            </span>
                        </div>
                    </div>
                    <button className="text-blue-300 hover:text-blue-500 transition-colors">
                        <Heart size={24} />
                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        {['React', 'Node.js', 'TypeScript'].map((skill) => (
                            <span key={skill} className="px-3 py-1 rounded-full bg-white/10 text-sm text-black">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Apply Now <ChevronRight size={16} className="ml-1" />
                    </button>
                </div>
            </div>

            <JobApplicationPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                jobTitle={title}
            />
        </>
    );
};

// Main Careers Page Component
const CareersPage = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('All');
    const [selectedLocation, setSelectedLocation] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Sales', 'Product'];
    const locations = ['All', 'Remote', 'Work from office'];

    const jobs = [
        {
            title: 'Senior Frontend Developer',
            location: 'Work from office',
            type: 'Full-time',
            experience: '5+ years',
            department: 'Engineering'
        },
        {
            title: 'UX Designer',
            location: 'Remote',
            type: 'Full-time',
            experience: '3+ years',
            department: 'Design'
        },
        {
            title: 'Product Manager',
            location: 'Remote',
            type: 'Full-time',
            experience: '4+ years',
            department: 'Product'
        }
    ];

    // Filter jobs based on department, location, and search query
    const filteredJobs = jobs.filter(job =>
        (selectedDepartment === 'All' || job.department === selectedDepartment) &&
        (selectedLocation === 'All' || job.location === selectedLocation) &&
        (searchQuery === '' || job.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="max-w-6xl mx-auto text-center py-28">
                    <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 animate-fade-in">
                        Work at GNTINDIA
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
                        Be part of something extraordinary. We're looking for talented individuals
                        who share our passion for innovation and excellence.
                    </p>
                    <div className="relative max-w-2xl mx-auto animate-fade-in-delay-2">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-666" size={20} />
                        <input
                            type="text"
                            placeholder="Search for jobs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-black/20 rounded-xl text-black placeholder-gray-666 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Animated background elements */}
                    <motion.div
                        className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                        animate={{
                            x: [0, -100, 0],
                            y: [0, -50, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </div>
            </section>

            {/* Filters Section */}
            <section className="py-12 px-6 bg-[#f2f2f2] rounded-md">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex-1">
                            <label className="block text-black mb-2">Department</label>
                            <select
                                value={selectedDepartment}
                                onChange={(e) => setSelectedDepartment(e.target.value)}
                                className="w-full px-4 py-3 bg-white backdrop-blur-sm border border-black/20 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {departments.map((dept) => (
                                    <option key={dept} value={dept} className="bg-gray-100">
                                        {dept}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block text-black mb-2">Location</label>
                            <select
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                className="w-full px-4 py-3 bg-white backdrop-blur-sm border border-black/20 rounded-xl text-black focus:outline-none focus:ring-2 ">

                            </select>
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="space-y-6">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job, index) => (
                                <JobCard key={index} {...job} />
                            ))
                        ) : (
                            <div className="text-center py-10 bg-white rounded-xl">
                                <p className="text-gray-500 text-lg">
                                    No jobs found matching your search criteria.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-black mb-12 text-center">Our Culture</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Innovation First',
                                description: 'We encourage creative thinking and innovative solutions.'
                            },
                            {
                                title: 'Work-Life Balance',
                                description: 'Flexible schedules and remote work options for our team.'
                            },
                            {
                                title: 'Growth Opportunities',
                                description: 'Continuous learning and career development paths.'
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-black/40 hover:border-black/10 transition-all duration-300 group"
                            >
                                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6 bg-[#f2f2f2] backdrop-blur-sm rounded-md">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-black mb-12 text-center">Benefits & Perks</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            'Health Insurance',
                            'Stock Options',
                            'Flexible Hours',
                            'Remote Work',
                            'Learning Budget',
                            'Paid Time Off',
                            'Gym Membership',
                            'Team Events'
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-blue-300 backdrop-blur-sm border border-black/20 text-center hover:border-black/50 transition-all duration-300 group"
                            >
                                <p className="text-black font-medium group-hover:text-blue-700 transition-colors">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-black mb-6">Ready to Join Us?</h2>
                    <p className="text-xl text-gray-500 mb-8">
                        Take the first step towards an exciting career with us.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors duration-300 group flex items-center justify-center mx-auto"
                    >
                        View All Positions
                        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;






