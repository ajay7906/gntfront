import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const DetailsBlogPage = ({ post, onBack }) => {
  if (!post) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 pt-28"
    >
      <div className="max-w-4xl mx-auto  rounded-2xl overflow-hidden">
        {/* Back Button */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm">
          <button 
            onClick={onBack}
            className="flex items-center m-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <ArrowLeft className="mr-2" />
            Back to Blog List
          </button>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full h-[400px] md:h-[500px] overflow-hidden"
        >
          <img 
            src={post.image || "/api/placeholder/1200/600"} 
            alt={post.title} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Blog Content */}
        <div className="p-6 md:p-12">
          {/* Metadata */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center mb-6 text-gray-500"
          >
            <span className="text-blue-600 font-semibold">{post.option}</span>
            <span className="mx-3 text-gray-300">•</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
            <span className="mx-3 text-gray-300">•</span>
            <span>{Math.ceil(post.description.length / 1000)} min read</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="prose prose-lg max-w-full prose-blue"
          >
            {/* Split description into paragraphs */}
            {post.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailsBlogPage;