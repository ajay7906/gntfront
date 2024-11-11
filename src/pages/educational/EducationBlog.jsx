import { motion } from "framer-motion";
import { ChevronDown, Menu, X, Search, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from "react";









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







const EducationBlog = () => {


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











    return (
        <div className="bg-gray-50">
            <motion.section
                className="bg-gradient-to-r from-blue-50 to-purple-50 text-black py-16 pt-16 text-center relative overflow-hidden"

            >
                <div className="max-w-4xl mx-auto relative z-10 px-4">
                    <motion.h1
                        className="text-lg md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mt-20"
                    >
                        Welcome to the Educational Blog
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl leading-relaxed text-gray-700"

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
                {/* animated background elements go here */}

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



        </div>
    );
}

export default EducationBlog