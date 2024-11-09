// // src/components/AboutPage.js
// import React from 'react';
// // import AwardSection from './AwardSection';

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-100 pt-16">
//       {/* Hero Section */}
//       <section className="bg-[#F2F2F2] text-black py-16  pt-16 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold mb-4">About Us</h1>
//           <p className="text-lg">
//           GNTINDIA - Go to the Next Technology is just a name, but is more of a call towards innovation, transformation, and progress.
//           At GNTINDIA, we love to bring the future closer to businesses of all sizes and industries.With
//           expertise in software development, website creation, social media management, and many other
//           high-tech digital tools such as WhatsApp chatbot integration, we go way beyond technical solutions. We are here
//           to help our clients harness technology to build stronger, smarter, and more resilient businesses.
//           Simple yet potent, that is the mantra of Anand Gandhi: creating change through technology for good. GNTINDIA
//           allows business growth with the assistance of the most advanced tools: innovative WhatsApp Chatbots connect businesses
//           with their customers. Here to support growth by changing the rules of the game. Join us, and you will see how technologies
//           can drive your business up a level.
//           </p>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-16">
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">Our Mission & Vision</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
//               <p>
//               GNTINDIA - Next Technology, with a singular mission: to empower businesses
//               with technology that fuels growth, innovation, and success. Founded by Anand Gandhi, 
//               visionary leader of the Hannanth Group of Industries, GNTINDIA is built to deliver
//               cutting-edge digital solutions that transform the way companies operate. With a focus
//               on software development, web creation, and dynamic social media tools, we offer tailor-made
//               solutions to simplify complexities and unlock potential.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
//               <p>
//               At GNTINDIA, our vision is to redefine digital growth for any business, big or small. We see ourselves at the
//               helm of technology that is advanced but accessible and impactful. We want to help businesses succeed by arming 
//               them with solutions that drive innovation and make a real difference in the world. We are creating a future where
//               businesses feel confident and clear in flying to new heights with GNTINDIA. Every tool, strategy, and solution we build
//               is to unlock your potential and take you further.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {/* Team Member Card */}
//             {[
//               { name: "Ansul", role: "", img: "https://via.placeholder.com/150" },
//               { name: "Ajay", role: "", img: "https://via.placeholder.com/150" },
//               { name: "Sandeep", role: "", img: "https://via.placeholder.com/150" },
//               { name: "Upkar Bharti", role: "", img: "https://via.placeholder.com/150" },
//             ].map((member, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <h3 className="text-xl font-semibold">{member.name}</h3>
//                 <p className="text-gray-500">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Award Section
//       <section className="py-16">
//         <AwardSection />
//       </section> */}
//     </div>
//   );
// };

// export default AboutUs;








































// import React from 'react';
// import { motion } from 'framer-motion';
// import Hero from '../../component/hero/Hero';

// const AboutUs = () => {
//   // Fade in animation variant
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   // Stagger children animation variant
//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   // Scale up animation for cards
//   const scaleUp = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   return (
//     <>
// {/* 
//   <Hero/> */}

//     <div className="bg-gradient-to-b from-gray-50 to-white pt-16">
//       {/* Hero Section */}
//       <motion.section 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         className="bg-gradient-to-r from-blue-50 to-purple-50 text-black py-16 pt-16 text-center relative overflow-hidden"
//       >
//         <div className="max-w-4xl mx-auto px-4 relative z-10">
//           <motion.h1 
//             className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
//             variants={fadeIn}
//           >
//             About Us
//           </motion.h1>
//           <motion.p 
//             className="text-lg leading-relaxed"
//             variants={fadeIn}
//           >
//             GNTINDIA - Go to the Next Technology is just a name, but is more of a call towards innovation, transformation, and progress.
//             At GNTINDIA, we love to bring the future closer to businesses of all sizes and industries.
//             {/* Rest of the text */}
//           </motion.p>
//         </div>
        
//         {/* Decorative background elements */}
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

//       {/* Mission & Vision Section */}
//       <motion.section 
//         className="py-16"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//       >
//         <div className="max-w-5xl mx-auto px-4">
//           <motion.h2 
//             className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
//             variants={fadeIn}
//           >
//             Our Mission & Vision
//           </motion.h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <motion.div 
//               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
//               variants={scaleUp}
//               whileHover={{ y: -5 }}
//             >
//               <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 GNTINDIA - Next Technology, with a singular mission: to empower businesses
//                 with technology that fuels growth, innovation, and success.
//                 {/* Rest of the mission text */}
//               </p>
//             </motion.div>
//             <motion.div 
//               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
//               variants={scaleUp}
//               whileHover={{ y: -5 }}
//             >
//               <h3 className="text-2xl font-semibold mb-4 text-purple-600">Our Vision</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 At GNTINDIA, our vision is to redefine digital growth for any business, big or small.
//                 {/* Rest of the vision text */}
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Team Section */}
//       <motion.section 
//         className="py-16 bg-gradient-to-b from-gray-50 to-white"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//       >
//         <div className="max-w-5xl mx-auto px-4">
//           <motion.h2 
//             className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
//             variants={fadeIn}
//           >
//             Meet Our Team
//           </motion.h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { name: "Ansul", role: "Team Member", img: "/api/placeholder/150/150" },
//               { name: "Ajay", role: "Team Member", img: "/api/placeholder/150/150" },
//               { name: "Sandeep", role: "Team Member", img: "/api/placeholder/150/150" },
//               { name: "Upkar Bharti", role: "Team Member", img: "/api/placeholder/150/150" },
//             ].map((member, index) => (
//               <motion.div 
//                 key={index} 
//                 className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
//                 variants={scaleUp}
//                 whileHover={{ y: -5 }}
//               >
//                 <motion.img
//                   src={member.img}
//                   alt={member.name}
//                   className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-purple-100"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 />
//                 <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
//                 <p className="text-purple-500">{member.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//     </div> </>
//   );
// };

// export default AboutUs;






































import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
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
            About Us
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl leading-relaxed text-gray-700"
            variants={fadeIn}
          >
            GNTINDIA - Go to the Next Technology is more than just a name; it's a call towards innovation, transformation, and progress.
          </motion.p>
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

      {/* Innovation Section */}
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
                Innovation Founded in Passion
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                GNTIND - Next Technology, with a singular mission: to empower businesses with technology that fuels growth, innovation, and success. Founded by Anand Gandhi, visionary leader of the Hannanth Group of Industries, GNTIND is built to deliver cutting-edge digital solutions that transform the way companies operate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Simple yet potent, that is the mantra of Anand Gandhi: creating change through technology for good. GNTIND allows business growth with the assistance of the most advanced tools: innovative WhatsApp Chatbots connect businesses with their customers.
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              variants={scaleUp}
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Solutions</h3>
                <ul className="space-y-4">
                  {['Software Development', 'Web Creation', 'Dynamic Social Media Tools', 'WhatsApp Chatbots'].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-3 text-gray-700"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
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
            Our Mission & Vision
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={scaleUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth and success. We're committed to delivering cutting-edge digital solutions that transform operations and unlock new possibilities.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={scaleUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the catalyst for digital transformation, helping businesses of all sizes harness the power of technology to achieve their full potential and create lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
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
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Ansul", role: "Team Member", img: "/api/placeholder/150/150" },
              { name: "Ajay", role: "Team Member", img: "/api/placeholder/150/150" },
              { name: "Sandeep", role: "Team Member", img: "/api/placeholder/150/150" },
              { name: "Upkar Bharti", role: "Team Member", img: "/api/placeholder/150/150" },
            ].map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                variants={scaleUp}
                whileHover={{ y: -5 }}
              >
                <motion.img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-purple-100"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center">{member.name}</h3>
                <p className="text-purple-500 text-center">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;