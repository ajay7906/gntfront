



import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data with images


const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development",
        excerpt: "Exploring the latest trends and technologies shaping the future of web development...",
        content: `Web development is evolving at an unprecedented pace. From new frameworks to innovative 
              design patterns, developers need to stay ahead of the curve. This article explores the 
              latest trends including serverless architecture, edge computing, and AI integration.
              
              The rise of Web3 technologies is also transforming how we think about web applications.
              Decentralized apps (dApps) are becoming more prevalent, and blockchain integration is
              no longer just for cryptocurrency applications.
              
              Furthermore, the emphasis on performance and user experience has never been stronger.
              Tools like Next.js and Remix are pushing the boundaries of what's possible in web development,
              while maintaining excellent developer experience.`,
        category: "Technology",
        date: "March 15, 2024",
        readTime: "5 min read",
        author: "John Smith",
        authorRole: "Senior Developer",
        imageUrl: "/api/placeholder/800/400"
    },
    {
        id: 2,
        title: "Mastering React Hooks",
        excerpt: "A comprehensive guide to using React Hooks effectively in your applications...",
        content: `React Hooks have revolutionized how we write React components. This in-depth guide
              covers everything from basic useState and useEffect to creating custom hooks for
              specific use cases. Learn how to optimize your React applications and write
              cleaner, more maintainable code.
              
              We'll explore advanced patterns like useCallback and useMemo, and understand
              when and why to use them. Real-world examples and best practices are included
              to help you master these powerful features.`,
        category: "Programming",
        date: "March 12, 2024",
        readTime: "8 min read",
        author: "Sarah Johnson",
        authorRole: "Tech Lead",
        imageUrl: "/api/placeholder/800/400"
    },
    {
        id: 3,
        title: "Design Systems in 2024",
        excerpt: "How modern design systems are evolving to meet the needs of growing organizations...",
        content: `Design systems have become crucial for maintaining consistency across large applications.
              This article explores how modern design systems are adapting to new challenges and
              evolving to meet the needs of growing organizations.
              
              We'll look at tools like Figma, Storybook, and how they integrate with modern
              development workflows. Learn about atomic design principles and how to implement
              them effectively in your projects.`,
        category: "Design",
        date: "March 10, 2024",
        readTime: "6 min read",
        author: "Mike Chen",
        authorRole: "UX Designer",
        imageUrl: "/api/placeholder/800/400"
    }
];



const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};





// BlogCard Component



const BlogCard = ({ post, onReadMore }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-700 hover:scale-105">
        <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-48 object-cover"
        />
        <div className="p-6">
            <div className="flex items-center mb-4">
                <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{post.date}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.readTime}</span>
                <button
                    onClick={() => onReadMore(post.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    See More
                </button>
            </div>
        </div>
    </div>
);

// DetailedPost Component
const DetailedPost = ({ post, onBack }) => (
    <div className="min-h-screen bg-white pt-24">
        <div className="max-w-4xl mx-auto px-4 pb-20">
            <button
                onClick={onBack}
                className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
                <ArrowLeft className="mr-2" size={20} />
                Back to Blog
            </button>

            <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-xl mb-8"
            />

            <div className="flex items-center mb-6">
                <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

            <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-600">{post.authorRole}</p>
                </div>
            </div>

            <div className="prose max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    </div>
);

// Main BlogPage Component
const BlogPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleReadMore = (postId) => {
        const post = blogPosts.find(p => p.id === postId);
        setSelectedPost(post);
        window.scrollTo(0, 0);
    };

    if (selectedPost) {
        return <DetailedPost post={selectedPost} onBack={() => setSelectedPost(null)} />;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-r from-blue-50 to-purple-50 text-black py-24 pt-32 text-center relative overflow-hidden"
            >
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                        variants={fadeIn}
                    >
                        Welcome to BlogSpace
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl leading-relaxed text-gray-700"
                        variants={fadeIn}
                    >
                        Discover insightful articles about technology, design, and development
                    </motion.p>

                    <div className="relative max-w-2xl mx-auto pt-8">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <Search className="absolute right-3 top-11 text-gray-400" size={24} />
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
            </motion.section>








            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div
                            key={post.id}
                            className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <BlogCard post={post} onReadMore={handleReadMore} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="text-blue-600" size={32} />
            </div>
        </div>
    );
};

export default BlogPage;