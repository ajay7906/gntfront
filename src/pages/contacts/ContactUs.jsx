













// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

// const ContactUs = () => {
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const floatAnimation = {
//     hidden: { y: 0 },
//     visible: {
//       y: [-10, 0, -10],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const contactInfo = [
//     {
//       icon: <MapPin className="w-12 h-12 md:w-16 md:h-16 text-blue-600" />,
//       title: "Address",
//       content: "GNT INDIA B-96, Road NO. 9, Industrial Area, RaniBazar, Bikaner",
//       color: "from-blue-500 to-blue-600"
//     },
//     {
//       icon: <Mail className="w-12 h-12 md:w-16 md:h-16 text-purple-600" />,
//       title: "Email",
//       content: "info@gntind.com",
//       color: "from-purple-500 to-purple-600"
//     },
//     {
//       icon: <Phone className="w-12 h-12 md:w-16 md:h-16 text-green-600" />,
//       title: "Phone",
//       content: "+91 9672418000",
//       color: "from-green-500 to-green-600"
//     },
//     {
//       icon: <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-emerald-600" />,
//       title: "WhatsApp Chat",
//       content: "+91 9672418000",
//       color: "from-emerald-500 to-emerald-600"
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white pt-16 relative overflow-hidden">
//       {/* Animated background elements */}
//       <motion.div
//         className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//         animate={{
//           x: [0, 100, 0],
//           y: [0, 50, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear"
//         }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//         animate={{
//           x: [0, -100, 0],
//           y: [0, -50, 0],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "linear"
//         }}
//       />

//       {/* Hero Section */}
//       {/* <motion.section 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         className="bg-gradient-to-r from-gray-50 to-gray-100 text-black py-20 text-center relative"
//       >
//         <div className="max-w-4xl mx-auto px-4">
//           <motion.h1 
//             className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
//             variants={fadeIn}
//           >
//             How Can We Help?
//           </motion.h1>
//           <motion.p 
//             className="text-lg md:text-xl text-gray-700 leading-relaxed"
//             variants={fadeIn}
//           >
//             Happy to see you here. We are really glad to know that you had interest in our products or services. 
//             Whether you have a query, question or have something interesting to share, reach us and one of us will 
//             get back to you shortly.
//           </motion.p>
//         </div>
//       </motion.section> */}














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
//             How Can We Help?
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl leading-relaxed text-gray-700"
//             variants={fadeIn}
//           >
//             Happy to see you here. We are really glad to know that you had interest in our products or services.
//             Whether you have a query, question or have something interesting to share, reach us and one of us will
//             get back to you shortly.


//           </motion.p>
//         </div>

//         {/* Animated background elements */}
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



















//       {/* Get In Touch Section */}
//       <motion.section
//         className="py-20 relative z-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//       >
//         <div className="max-w-6xl mx-auto px-4">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
//             variants={fadeIn}
//           >
//             Get In Touch
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {contactInfo.map((info, index) => (
//               <motion.div
//                 key={index}
//                 className="relative group"
//                 variants={fadeIn}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="bg-white rounded-xl shadow-lg p-8 text-center relative z-10 h-full">
//                   <motion.div
//                     className="flex justify-center mb-6"
//                     variants={floatAnimation}
//                     animate="visible"
//                   >
//                     {info.icon}
//                   </motion.div>
//                   <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
//                   <p className="text-gray-600">{info.content}</p>
//                   <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl ${info.color}" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Contact Form Section */}
//       <motion.section
//         className="py-20 bg-gradient-to-b from-gray-50 to-white relative z-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//       >
//         <div className="max-w-4xl mx-auto px-4">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
//             variants={fadeIn}
//           >
//             Send Us a Message
//           </motion.h2>
//           <motion.form
//             className="bg-white shadow-xl rounded-2xl p-8 md:p-12 space-y-6 relative z-10"
//             variants={fadeIn}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Name</label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Email</label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                   placeholder="Your Email"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">Subject</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 placeholder="Subject"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">Message</label>
//               <textarea
//                 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 rows="5"
//                 placeholder="Write your message here..."
//               ></textarea>
//             </div>
//             <motion.button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Send Message
//             </motion.button>
//           </motion.form>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default ContactUs;





























































































































import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactUs = () => {
  // Animation variants for different elements
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

  const floatAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [-10, 0, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Function to handle Google Maps redirect
  const handleAddressClick = () => {
    // Encode the address for the URL
    const encodedAddress = encodeURIComponent("GNT INDIA B-96, Road NO. 9, Industrial Area, RaniBazar, Bikaner");
    // Open Google Maps in a new tab
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  // Function to handle email click
  const handleEmailClick = () => {
    // Open default email client
    window.location.href = 'mailto:info@gntind.com';
  };

  // Contact information array
  const contactInfo = [
    {
      icon: <MapPin className="w-12 h-12 md:w-16 md:h-16 text-blue-600" />,
      title: "Address",
      content: "GNT INDIA B-96, Road NO. 9, Industrial Area, RaniBazar, Bikaner",
      color: "from-blue-500 to-blue-600",
      onClick: handleAddressClick,
      isClickable: true
    },
    {
      icon: <Mail className="w-12 h-12 md:w-16 md:h-16 text-purple-600" />,
      title: "Email",
      content: "info@gntind.com",
      color: "from-purple-500 to-purple-600",
      onClick: handleEmailClick,
      isClickable: true
    },
    {
      icon: <Phone className="w-12 h-12 md:w-16 md:h-16 text-green-600" />,
      title: "Phone",
      content: "+91 9672418000",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-emerald-600" />,
      title: "WhatsApp Chat",
      content: "+91 9672418000",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pt-16 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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
            How Can We Help?
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-gray-700"
            variants={fadeIn}
          >
            Happy to see you here. We are really glad to know that you had interest in our products or services.
            Whether you have a query, question or have something interesting to share, reach us and one of us will
            get back to you shortly.
          </motion.p>
        </div>

        {/* Hero section background elements */}
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

      {/* Get In Touch Section */}
      <motion.section
        className="py-20 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            variants={fadeIn}
          >
            Get In Touch
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={`relative group ${info.isClickable ? 'cursor-pointer' : ''}`}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                onClick={info.onClick}
              >
                <div className={`bg-white rounded-xl shadow-lg p-8 text-center relative z-10 h-full 
                  ${info.isClickable ? 'hover:bg-gray-50 transition-colors duration-300' : ''}`}>
                  <motion.div
                    className="flex justify-center mb-6"
                    variants={floatAnimation}
                    animate="visible"
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                  <p className={`text-gray-600 ${info.isClickable ? 'hover:text-blue-600' : ''}`}>
                    {info.content}
                  </p>
                  {/* {info.isClickable && (
                    <p className="text-sm text-blue-600 mt-2">Click to open</p>
                  )} */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 
                    transition-opacity duration-300 rounded-xl ${info.color}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            variants={fadeIn}
          >
            Send Us a Message
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 md:p-12 space-y-6 relative z-10"
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;