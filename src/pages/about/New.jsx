// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Globe, Tool, BookOpen, Users, Check } from 'lucide-react';

// const AboutUs = () => {
//   // Existing animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   const scaleUp = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   const slideIn = {
//     hidden: { x: -100, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut" }
//     }
//   };

//   // Key features data
//   const features = [
//     {
//       icon: Globe,
//       title: "Global Reach",
//       description: "Partnering with clients in over 180 countries, delivering digital transformation worldwide."
//     },
//     {
//       icon: Tool,
//       title: "Advanced Tools",
//       description: "Custom integrations with WhatsApp API, AI-powered tools, and cutting-edge technology solutions."
//     },
//     {
//       icon: BookOpen,
//       title: "Educational Resources",
//       description: "Free educational content including webinars, blog posts, and expert videos."
//     },
//     {
//       icon: Users,
//       title: "Partnership Approach",
//       description: "Building lasting partnerships, not just providing services."
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section (Existing) */}
//       <motion.section 
//         initial="hidden"
//         whileInView="visible" 
//         viewport={{ once: true }}
//         variants={fadeIn}
//         className="bg-gradient-to-r from-blue-50 to-purple-50 text-black py-24 pt-32 text-center relative overflow-hidden"
//       >
//         <div className="max-w-4xl mx-auto px-4 relative z-10">
//           <motion.h1 
//             className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
//             variants={fadeIn}
//           >
//             Welcome to GNTINDIA
//           </motion.h1>
//           <motion.p 
//             className="text-lg md:text-xl leading-relaxed text-gray-700"
//             variants={fadeIn}
//           >
//             Powering up your business with innovative digital solutions. We transform the face of the digital age through technology and innovation.
//           </motion.p>
//         </div>
        
//         {/* Animated background elements (kept from original) */}
//         <motion.div 
//           className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
//           animate={{
//             x: [0, 100, 0],
//             y: [0, 50, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
//           animate={{
//             x: [0, -100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
//       </motion.section>

//       {/* New Introduction Section */}
//       <motion.section 
//         className="py-16 md:py-24"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//       >
//         <div className="max-w-6xl mx-auto px-4">
//           <motion.div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div variants={slideIn}>
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//                 Our Story
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 Founded by Anand Gandhi, GNTINDIA builds on the innovations and quality legacy of the Hannanth Group. The thinkers in GNTIND and Hannanth Group help businesses stay agile with the pace of technology, influencing markets across all industries.
//               </p>
//               <p className="text-gray-700 leading-relaxed">
//                 With years of experience in software development, web solutions, and IT services, we've partnered with clients worldwide to evolve their online presence and deliver measurable outcomes.
//               </p>
//             </motion.div>
//             <motion.div variants={scaleUp}>
//               <div className="bg-white rounded-2xl p-8 shadow-xl">
//                 <h3 className="text-2xl font-semibold mb-6 text-blue-600">Our Approach to Success</h3>
//                 <ul className="space-y-4">
//                   {['Enterprise & SMB Solutions', 'Advanced Tools Integration', 'Educational Resources', 'Partnership Building'].map((item, index) => (
//                     <motion.li 
//                       key={index}
//                       className="flex items-center space-x-3 text-gray-700"
//                       whileHover={{ x: 10 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <Check className="text-purple-500 w-5 h-5" />
//                       <span>{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Key Features Grid */}
//       <motion.section 
//         className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//       >
//         <div className="max-w-6xl mx-auto px-4">
//           <motion.h2 
//             className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
//             variants={fadeIn}
//           >
//             Why Choose GNTINDIA?
//           </motion.h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
//                 variants={scaleUp}
//                 whileHover={{ y: -5 }}
//               >
//                 <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Services Section */}
//       <motion.section 
//         className="py-16 md:py-24"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//       >
//         <div className="max-w-6xl mx-auto px-4">
//           <motion.h2 
//             className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
//             variants={fadeIn}
//           >
//             Our Comprehensive Solutions
//           </motion.h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <motion.div 
//               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
//               variants={scaleUp}
//               whileHover={{ y: -5 }}
//             >
//               <h3 className="text-2xl font-semibold mb-4 text-blue-600">Digital Solutions</h3>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 From website development to social media management and IT support, we provide comprehensive digital solutions to help your business thrive.
//               </p>
//               <motion.button 
//                 className="flex items-center text-purple-600 font-semibold"
//                 whileHover={{ x: 5 }}
//               >
//                 Learn More <ArrowRight className="ml-2 w-4 h-4" />
//               </motion.button>
//             </motion.div>
            
//             <motion.div 
//               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
//               variants={scaleUp}
//               whileHover={{ y: -5 }}
//             >
//               <h3 className="text-2xl font-semibold mb-4 text-blue-600">Advanced Integration</h3>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 Seamlessly integrate WhatsApp API, AI-powered tools, ERP systems, and CRM solutions to enhance your operational efficiency.
//               </p>
//               <motion.button 
//                 className="flex items-center text-purple-600 font-semibold"
//                 whileHover={{ x: 5 }}
//               >
//                 Learn More <ArrowRight className="ml-2 w-4 h-4" />
//               </motion.button>
//             </motion.div>
            
//             <motion.div 
//               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
//               variants={scaleUp}
//               whileHover={{ y: -5 }}
//             >
//               <h3 className="text-2xl font-semibold mb-4 text-blue-600">Knowledge Sharing</h3>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 Access our wealth of educational resources, including webinars, blog posts, expert videos, and industry insights.
//               </p>
//               <motion.button 
//                 className="flex items-center text-purple-600 font-semibold"
//                 whileHover={{ x: 5 }}
//               >
//                 Learn More <ArrowRight className="ml-2 w-4 h-4" />
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Call to Action Section */}
//       <motion.section 
//         className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//       >
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <motion.h2 
//             className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
//             variants={fadeIn}
//           >
//             Ready to Transform Your Business?
//           </motion.h2>
//           <motion.p 
//             className="text-lg md:text-xl text-gray-700 mb-8"
//             variants={fadeIn}
//           >
//             Let's innovate, grow, and succeed together. Join the many businesses that trust GNTINDIA for their digital transformation journey.
//           </motion.p>
//           <motion.button
//             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get Started Today
//           </motion.button>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default AboutUs;

























































































import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Wrench, BookOpen, Users2 } from 'lucide-react'; // Fixed icon imports

const AboutUs = () => {
  // Existing animation variants remain the same
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Updated features data with correct icon components
  const features = [
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Partnering with clients in over 180 countries, delivering digital transformation worldwide."
    },
    {
      icon: Wrench,
      title: "Advanced Tools",
      description: "Custom integrations with WhatsApp API, AI-powered tools, and cutting-edge technology solutions."
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Free educational content including webinars, blog posts, and expert videos."
    },
    {
      icon: Users2,
      title: "Partnership Approach",
      description: "Building lasting partnerships, not just providing services."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Rest of the code remains exactly the same until the Check icon usage */}
      
      {/* Updated Check icon usage in the Our Approach section */}
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded by Anand Gandhi, GNTINDIA builds on the innovations and quality legacy of the Hannanth Group. The thinkers in GNTIND and Hannanth Group help businesses stay agile with the pace of technology, influencing markets across all industries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With years of experience in software development, web solutions, and IT services, we've partnered with clients worldwide to evolve their online presence and deliver measurable outcomes.
              </p>
            </motion.div>
            <motion.div variants={scaleUp}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">Our Approach to Success</h3>
                <ul className="space-y-4">
                  {['Enterprise & SMB Solutions', 'Advanced Tools Integration', 'Educational Resources', 'Partnership Building'].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-3 text-gray-700"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRight className="text-purple-500 w-5 h-5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features Grid with updated icons */}
      <motion.section 
        className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            variants={fadeIn}
          >
            Why Choose GNTINDIA?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                variants={scaleUp}
                whileHover={{ y: -5 }}
              >
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            variants={fadeIn}
          >
            Our Comprehensive Solutions
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={scaleUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Digital Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                From website development to social media management and IT support, we provide comprehensive digital solutions to help your business thrive.
              </p>
              <motion.button 
                className="flex items-center text-purple-600 font-semibold"
                whileHover={{ x: 5 }}
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={scaleUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Advanced Integration</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Seamlessly integrate WhatsApp API, AI-powered tools, ERP systems, and CRM solutions to enhance your operational efficiency.
              </p>
              <motion.button 
                className="flex items-center text-purple-600 font-semibold"
                whileHover={{ x: 5 }}
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={scaleUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Knowledge Sharing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Access our wealth of educational resources, including webinars, blog posts, expert videos, and industry insights.
              </p>
              <motion.button 
                className="flex items-center text-purple-600 font-semibold"
                whileHover={{ x: 5 }}
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            variants={fadeIn}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-8"
            variants={fadeIn}
          >
            Let's innovate, grow, and succeed together. Join the many businesses that trust GNTINDIA for their digital transformation journey.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;