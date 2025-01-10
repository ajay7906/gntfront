

import React, { useEffect, useState } from 'react';
import { Search, MapPin, Briefcase, Clock, ChevronRight, Users, Heart, X, Upload, FilePlus, User, Mail, FileText, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhyJoinUs from '../careerCompo/WhyJoinUs';
import ApplicationForm from '../careerCompo/ApplicationForm';

// Job Card Component
const JobCard = ({ title, location, type, experience, department, allJobList }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    console.log(title);
    

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
                    {['marketing'].map((skill) => (
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

            {/* <JobApplicationPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                jobTitle={title}
            /> */}
            <ApplicationForm
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                jobTitle={title}
                jobLocation={location}
            />
        </>
    );
};

// Main Careers Page Component
const CareersPage = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('All');
    const [selectedLocation, setSelectedLocation] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [allJobList, setAllJobList] = useState([]);


    const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Sales', 'Product'];
    const locations = ['All', 'Remote', 'Work from office'];
    console.log(allJobList);

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


    async function getAllJObs() {
        const response = await fetch('https://gntindia.com:5000/api/v1/job/getjob', {
            method: 'GET',

        });
        if (response.ok) {
            const data = await response.json(); 
            const trimmedData = data.map(job => ({
                ...job,
                location: job.location.trim()
            }));
            console.log(data);
            setAllJobList(trimmedData)

        }
        else {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to get data');
        }

    } 
    const checkJob = allJobList.filter((job)=>(
        (selectedLocation === job.location)

    )) 
    console.log('fileter Job', checkJob, allJobList[0].location === selectedLocation);
    
    // Filter jobs based on department, location, and search query
    const filteredJobs = allJobList.filter(job =>
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
    useEffect(() => {
        getAllJObs();
    }, [])

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
            <WhyJoinUs />

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

                                {locations.map((dept) => (
                                    <option key={dept} value={dept} className="bg-gray-100">
                                        {dept}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="space-y-6">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job, index) => (
                                <JobCard key={index} {...job} allJobList={allJobList} />
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






