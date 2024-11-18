import React, { useState } from 'react';
import { ChevronRight, Search, Filter, ArrowRight } from 'lucide-react';
import images1 from "./images/excellence.png";
import images2 from "./images/innovaton.png";
import images3 from "./images/leadership.png";
import { motion } from 'framer-motion';
import SplitCard from '../startproject/HalfSide';
const PortFolio = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [hoveredId, setHoveredId] = useState(null);

    const filters = [
        { id: 'all', label: 'All Cases' },
        { id: 'technology', label: 'Technology' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'finance', label: 'Finance' },
        { id: 'retail', label: 'Retail' }
    ];

    const story1 = [images1];
    const story2 = [images2];
    const story3 = [images3];

    const caseStudies = [
        {
            id: 1,
            title: "Digital Transformation for Global Retail Chain",
            category: "retail",
            impact: "40% increase in online sales",
            description: "Revolutionized the digital presence of a leading retail chain through implementation of AI-driven customer experience platform.",
            imageUrl: story1,
            tags: ["E-commerce", "AI", "Digital Strategy"],
            metrics: {
                roi: "+125%",
                timeframe: "12 months",
                satisfaction: "98%"
            }
        },
        {
            id: 2,
            title: "Healthcare Provider Cloud Migration",
            category: "healthcare",
            impact: "60% reduction in operational costs",
            description: "Seamlessly migrated legacy healthcare systems to cloud infrastructure while maintaining HIPAA compliance.",
            imageUrl: story2,
            tags: ["Cloud", "Healthcare", "Security"],
            metrics: {
                roi: "+85%",
                timeframe: "9 months",
                satisfaction: "95%"
            }
        },
        {
            id: 3,
            title: "FinTech Mobile App Development",
            category: "finance",
            impact: "2M+ active users in 6 months",
            description: "Developed a revolutionary mobile banking application with advanced security features and intuitive UX.",
            imageUrl: story3,
            tags: ["Mobile", "FinTech", "UX Design"],
            metrics: {
                roi: "+200%",
                timeframe: "6 months",
                satisfaction: "97%"
            }
        }
    ];

    const filteredCases = caseStudies.filter(study => {
        const matchesFilter = selectedFilter === 'all' || study.category === selectedFilter;
        const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            study.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <>
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-50 to-purple-50 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold mb-6  bg-clip-text   text-transparent bg-gradient-to-r from-blue-600 to-purple-600 ">
                            Customer Success Stories
                        </h1>
                        <p className="text-2xl  mb-8  leading-relaxed text-gray-700">
                            Discover how we've helped organizations achieve their digital transformation goals
                        </p>
                        <div className="flex items-center space-x-4">
                            <span className="text-blue-300">Featured by:</span>
                            {/* Placeholder logos */}
                            <div className="flex space-x-6">
                                <div className="w-24 h-8 bg-blue-600 rounded"></div>
                                <div className="w-24 h-8 bg-blue-600 rounded"></div>
                                <div className="w-24 h-8 bg-blue-600 rounded"></div>
                            </div>
                        </div>
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
                {/* <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                </div> */}
            </section>



            {/* Search and Filter Section */}
            <section className="py-8 border-b bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="relative flex-1 max-w-lg">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search case studies..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
                            <Filter className="text-gray-400 w-5 h-5" />
                            {filters.map(filter => (
                                <button
                                    key={filter.id}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedFilter === filter.id
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                    onClick={() => setSelectedFilter(filter.id)}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCases.map((study) => (
                            <div
                                key={study.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                                onMouseEnter={() => setHoveredId(study.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                                    <img
                                        src={study.imageUrl}
                                        alt={study.title}
                                        className={`object-cover w-full h-full transition-transform duration-500
                      ${hoveredId === study.id ? 'scale-110' : 'scale-100'}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                                        <div className="absolute bottom-4 left-4">
                                            <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                                                {study.impact}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {study.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {study.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {study.description}
                                    </p>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500">ROI</p>
                                            <p className="font-bold text-blue-600">{study.metrics.roi}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500">Timeline</p>
                                            <p className="font-bold text-blue-600">{study.metrics.timeframe}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500">Satisfaction</p>
                                            <p className="font-bold text-blue-600">{study.metrics.satisfaction}</p>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button className="group w-full bg-white border border-blue-600 text-blue-600 
                    font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors
                    duration-300 flex items-center justify-center">
                                        View Case Study
                                        <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300
                      ${hoveredId === study.id ? 'translate-x-2' : ''}`}
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Join these success stories and discover how we can help you achieve your digital transformation goals.
                    </p>
                    <button className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-lg
            hover:bg-blue-50 transition-colors duration-300">
                        Schedule a Consultation
                    </button>
                </div>
            </section>
        </div>



        <SplitCard/>
        </>
    );
};

export default PortFolio;