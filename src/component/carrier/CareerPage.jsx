import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, ChevronRight, Star, Users, Heart } from 'lucide-react';

// Animated background bubble component
const AnimatedBubble = ({ color }) => {
    const size = Math.random() * 200 + 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * -20;

    return (
        <div
            className="absolute rounded-full mix-blend-soft-light animate-float opacity-20 blur-3xl"
            style={{
                backgroundColor: color,
                width: size,
                height: size,
                animation: `float ${duration}s infinite ease-in-out ${delay}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            }}
        />
    );
};

// Job Card Component
const JobCard = ({ title, location, type, experience, department }) => (
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
            <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                Apply Now <ChevronRight size={16} className="ml-1" />
            </button>
        </div>
    </div>
);
import { motion } from "framer-motion";
import SplitCard from '../startproject/HalfSide';
const CareersPage = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('All');
    const [selectedLocation, setSelectedLocation] = useState('All');

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

    return (
        <>
        <div className="min-h-screen ">
            {/* Animated Background */}
            {/* <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <AnimatedBubble
            key={i}
            color={['#4F46E5', '#7C3AED', '#2563EB', '#8B5CF6', '#3B82F6', '#6366F1'][i]}
          />
        ))}
      </div> */}

            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
                {/* <div className="fixed inset-0 -z-10 overflow-hidden">
            {[...Array(6)].map((_, i) => (
            <AnimatedBubble
                key={i}
                color={['#4F46E5', '#7C3AED', '#2563EB', '#8B5CF6', '#3B82F6', '#6366F1'][i]}
            />
            ))}
        </div> */}
                <div className="max-w-6xl mx-auto text-center py-28 ">
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
                            className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-black/20 rounded-xl text-black placeholder-gray-666 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>









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

            {/* Stats Section */}
            {/* <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, label: 'Global Team', value: '500+' },
            { icon: MapPin, label: 'Locations', value: '20+' },
            { icon: Star, label: 'Rating on Glassdoor', value: '4.8' }
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
              <stat.icon size={32} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section> */}

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
                                className="w-full px-4 py-3 bg-white backdrop-blur-sm border border-black/20 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                {locations.map((loc) => (
                                    <option key={loc} value={loc} className="bg-gray-100">
                                        {loc}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="space-y-6 ">
                        {jobs.map((job, index) => (
                            <JobCard key={index} {...job} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-20 px-6 ">
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
                            <div key={index} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-black/40 hover:border-black/10 transition-all duration-300">
                                <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                            <div key={index} className="p-6 rounded-xl bg-blue-300 backdrop-blur-sm border border-black/20 text-center hover:border-black/50 transition-all duration-300">
                                <p className="text-black font-medium">{benefit}</p>
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
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors duration-300">
                        View All Positions
                    </button>
                </div>
            </section>
        </div> 
        <SplitCard/>
        
        </>
    );
};

export default CareersPage;