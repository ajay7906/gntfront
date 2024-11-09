// import React from 'react';
// import { motion } from 'framer-motion';
// import Videos from '../../assets/videos/vedio2.mp4'
// import { 
//   ArrowRight,
//   Globe, 
//   Smartphone, 
//   Palette, 
//   Share2, 
//   Code,
//   Database
// } from 'lucide-react';

// const FloatingIcon = ({ Icon, color, size, initialX, duration, delay }) => {
//   return (
//     <motion.div
//       initial={{ y: -100, x: initialX, opacity: 0 }}
//       animate={{ 
//         y: window.innerHeight + 100,
//         x: initialX + Math.sin(initialX) * 50,
//         opacity: [0, 1, 1, 0]
//       }}
//       transition={{
//         duration: duration,
//         repeat: Infinity,
//         delay: delay,
//         ease: "linear",
//         opacity: {
//           duration: duration / 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//           times: [0, 0.1, 0.9, 1]
//         }
//       }}
//       className="absolute z-0"
//     >
//       <div className={`p-3 rounded-xl bg-white/10 backdrop-blur-sm ${color}`}>
//         <Icon size={size} className="text-gray-800" />
//       </div>
//     </motion.div>
//   );
// };

// const Heros = () => {
//   const services = [
//     { icon: Globe, color: "bg-blue-100", size: 24 },
//     { icon: Smartphone, color: "bg-purple-100", size: 28 },
//     { icon: Palette, color: "bg-pink-100", size: 26 },
//     { icon: Share2, color: "bg-indigo-100", size: 24 },
//     { icon: Code, color: "bg-blue-100", size: 30 },
//     { icon: Database, color: "bg-purple-100", size: 24 }
//   ];

//   return (
//     <div className="relative min-h-screen bg-[#f2f2f2] overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-40">
//         {services.map((service, index) => (
//           <FloatingIcon
//             key={index}
//             Icon={service.icon}
//             color={service.color}
//             size={service.size}
//             initialX={Math.random() * window.innerWidth}
//             duration={20 + Math.random() * 10}
//             delay={Math.random() * 10}
//           />
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10">
//         <div className="container mx-auto px-4 pt-20 lg:pt-32">
//           <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
//             {/* Right Content */}
//             <div className="flex-1 text-center lg:text-left relative">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6"
//               >
//                 Welcome to GNT India
//               </motion.div>

//               <motion.h1 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7 }}
//                 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6"
//               >
//                 Go to the{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//                   Next Technology
//                 </span>
//               </motion.h1>
              
//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
//               >
//                 We, at GNTINDIA, are not another technology company; we are your partner in growth, 
//                 innovation, and transformation. With our ever-changing digital world, we are here to 
//                 bring forward your business.
//               </motion.p>
              
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.4 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//               >
//                 <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center">
//                   <span className="relative z-10">Get Free Website</span>
//                   <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-full group-hover:bg-white/30 transition-colors relative z-10">
//                     2 Min
//                   </span>
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all border-2 border-gray-200">
//                   Learn More
//                 </button>
//               </motion.div>

//               {/* Featured Services Pills */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start"
//               >
//                 {[
//                   { name: 'Web Dev', color: 'bg-blue-100 text-blue-600' },
//                   { name: 'Mobile Apps', color: 'bg-purple-100 text-purple-600' },
//                   { name: 'UI/UX', color: 'bg-pink-100 text-pink-600' },
//                   { name: 'Cloud', color: 'bg-indigo-100 text-indigo-600' }
//                 ].map((service) => (
//                   <div 
//                     key={service.name}
//                     className={`px-4 py-2 rounded-full ${service.color} font-medium text-sm`}
//                   >
//                     {service.name}
//                   </div>
//                 ))}
//               </motion.div>
//             </div>

//             {/* Left Content - Video Section */}
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.5 }}
//               className="flex-1 relative h-[600px] w-full lg:w-auto rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
//               <video 
//                 className="w-full h-full object-cover rounded-2xl"
//                 autoPlay 
//                 loop 
//                 muted 
//                 playsInline
//               >
//                 <source src={Videos} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>

//               {/* Video Overlay */}
//               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
//                 <div className="flex items-center gap-4">
//                   <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
//                   <span className="text-white text-sm font-medium">Watch Our Story</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Heros;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   ArrowRight,
//   Globe, 
//   Smartphone, 
//   Palette, 
//   Share2, 
//   Code,
//   Database
// } from 'lucide-react';

// const FloatingIcon = ({ Icon, color, size, initialX, duration, delay }) => {
//   return (
//     <motion.div
//       initial={{ y: -100, x: initialX, opacity: 0 }}
//       animate={{ 
//         y: window.innerHeight + 100,
//         x: initialX + Math.sin(initialX) * 50,
//         opacity: [0, 1, 1, 0]
//       }}
//       transition={{
//         duration: duration,
//         repeat: Infinity,
//         delay: delay,
//         ease: "linear",
//         opacity: {
//           duration: duration / 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//           times: [0, 0.1, 0.9, 1]
//         }
//       }}
//       className="absolute z-0"
//     >
//       <div className={`p-3 rounded-xl shadow-lg ${color}`}>
//         <Icon size={size} className="text-white" />
//       </div>
//     </motion.div>
//   );
// };

// const Hero = () => {
//   // Updated with darker background colors for better visibility
//   const services = [
//     { icon: Globe, color: "bg-blue-700", size: 24 },
//     { icon: Smartphone, color: "bg-purple-700", size: 28 },
//     { icon: Palette, color: "bg-pink-700", size: 26 },
//     { icon: Share2, color: "bg-indigo-700", size: 24 },
//     { icon: Code, color: "bg-blue-800", size: 30 },
//     { icon: Database, color: "bg-purple-800", size: 24 }
//   ];

//   return (
//     <div className="relative min-h-screen bg-[#f2f2f2] overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-50">
//         {services.map((service, index) => (
//           <FloatingIcon
//             key={index}
//             Icon={service.icon}
//             color={service.color}
//             size={service.size}
//             initialX={Math.random() * window.innerWidth}
//             duration={20 + Math.random() * 10}
//             delay={Math.random() * 10}
//           />
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10">
//         <div className="container mx-auto px-4 pt-20 lg:pt-32">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//             {/* Left Content - Video Section */}
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.5 }}
//               className="flex-1 relative h-[600px] w-full lg:w-auto rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
//               <video 
//                 className="w-full h-full object-cover rounded-2xl"
//                 autoPlay 
//                 loop 
//                 muted 
//                 playsInline
//               >
//                 <source src="/api/placeholder/400/320" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>

//               {/* Video Overlay */}
//               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
//                 <div className="flex items-center gap-4">
//                   <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
//                   <span className="text-white text-sm font-medium">Watch Our Story</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Content */}
//             <div className="flex-1 text-center lg:text-left relative">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6"
//               >
//                 Welcome to GNT India
//               </motion.div>

//               <motion.h1 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7 }}
//                 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6"
//               >
//                 Go to the{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//                   Next Technology
//                 </span>
//               </motion.h1>
              
//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
//               >
//                 We, at GNTINDIA, are not another technology company; we are your partner in growth, 
//                 innovation, and transformation. With our ever-changing digital world, we are here to 
//                 bring forward your business.
//               </motion.p>
              
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.4 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//               >
//                 <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center">
//                   <span className="relative z-10">Get Free Website</span>
//                   <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-full group-hover:bg-white/30 transition-colors relative z-10">
//                     2 Min
//                   </span>
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all border-2 border-gray-200">
//                   Learn More
//                 </button>
//               </motion.div>

//               {/* Featured Services Pills */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start"
//               >
//                 {[
//                   { name: 'Web Dev', color: 'bg-blue-100 text-blue-600' },
//                   { name: 'Mobile Apps', color: 'bg-purple-100 text-purple-600' },
//                   { name: 'UI/UX', color: 'bg-pink-100 text-pink-600' },
//                   { name: 'Cloud', color: 'bg-indigo-100 text-indigo-600' }
//                 ].map((service) => (
//                   <div 
//                     key={service.name}
//                     className={`px-4 py-2 rounded-full ${service.color} font-medium text-sm`}
//                   >
//                     {service.name}
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;















































// import React from 'react';
// import Videos from '../../assets/videos/vedio2.mp4'
// import { motion } from 'framer-motion';
// import { 
//   ArrowRight,
//   Globe, 
//   Smartphone, 
//   Palette, 
//   Share2, 
//   Code,
//   Database
// } from 'lucide-react';

// const FloatingIcon = ({ Icon, color, size, initialX, duration, delay }) => {
//   return (
//     <motion.div
//       initial={{ y: -100, x: initialX, opacity: 0 }}
//       animate={{ 
//         y: window.innerHeight + 100,
//         x: initialX + Math.sin(initialX) * 50,
//         opacity: [0, 1, 1, 0]
//       }}
//       transition={{
//         duration: duration,
//         repeat: Infinity,
//         delay: delay,
//         ease: "linear",
//         opacity: {
//           duration: duration / 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//           times: [0, 0.1, 0.9, 1]
//         }
//       }}
//       className="absolute z-0"
//     >
//       <div className={`p-3 rounded-xl shadow-lg ${color}`}>
//         <Icon size={size} className="text-white" />
//       </div>
//     </motion.div>
//   );
// };

// const Hero = () => {
//   const services = [
//     { icon: Globe, color: "bg-blue-700", size: 24 },
//     { icon: Smartphone, color: "bg-purple-700", size: 28 },
//     { icon: Palette, color: "bg-pink-700", size: 26 },
//     { icon: Share2, color: "bg-indigo-700", size: 24 },
//     { icon: Code, color: "bg-blue-800", size: 30 },
//     { icon: Database, color: "bg-purple-800", size: 24 }
//   ];

//   return (
//     <div className="relative min-h-screen bg-[#f2f2f2] overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-50">
//         {services.map((service, index) => (
//           <FloatingIcon
//             key={index}
//             Icon={service.icon}
//             color={service.color}
//             size={service.size}
//             initialX={Math.random() * window.innerWidth}
//             duration={20 + Math.random() * 10}
//             delay={Math.random() * 10}
//           />
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10">
//         <div className="container mx-auto px-4 pt-20 lg:pt-32">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//             {/* Left Content */}
//             <div className="flex-1 text-center lg:text-left relative order-2 lg:order-1">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6"
//               >
//                 Welcome to GNT India
//               </motion.div>

//               <motion.h1 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7 }}
//                 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6"
//               >
//                 Go to the{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//                   Next Technology
//                 </span>
//               </motion.h1>
              
//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
//               >
//                 We, at GNTINDIA, are not another technology company; we are your partner in growth, 
//                 innovation, and transformation. With our ever-changing digital world, we are here to 
//                 bring forward your business.
//               </motion.p>
              
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.4 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//               >
//                 <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center">
//                   <span className="relative z-10">Get Free Website</span>
//                   <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-full group-hover:bg-white/30 transition-colors relative z-10">
//                     2 Min
//                   </span>
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all border-2 border-gray-200">
//                   Learn More
//                 </button>
//               </motion.div>

//               {/* Featured Services Pills */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start"
//               >
//                 {[
//                   { name: 'Web Dev', color: 'bg-blue-100 text-blue-600' },
//                   { name: 'Mobile Apps', color: 'bg-purple-100 text-purple-600' },
//                   { name: 'UI/UX', color: 'bg-pink-100 text-pink-600' },
//                   { name: 'Cloud', color: 'bg-indigo-100 text-indigo-600' }
//                 ].map((service) => (
//                   <div 
//                     key={service.name}
//                     className={`px-4 py-2 rounded-full ${service.color} font-medium text-sm`}
//                   >
//                     {service.name}
//                   </div>
//                 ))}
//               </motion.div>
//             </div>

//             {/* Right Content - Video Section */}
//             <motion.div 
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.5 }}
//               className="flex-1 relative h-[600px] w-full lg:w-auto rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
//               <video 
//                 className="w-full h-full object-cover rounded-2xl"
//                 autoPlay 
//                 loop 
//                 muted 
//                 playsInline
//               >
//                 <source src={Videos} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>

//               {/* Video Overlay */}
//               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
//                 <div className="flex items-center gap-4">
//                   <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
//                   <span className="text-white text-sm font-medium">Watch Our Story</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




























// import React from 'react';
// import Videos from '../../assets/videos/vedio2.mp4';
// import { motion } from 'framer-motion';
// import { 
//   ArrowRight,
//   Globe, 
//   Smartphone, 
//   Palette, 
//   Share2, 
//   Code,
//   Database
// } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const FloatingIcon = ({ Icon, color, size, initialX, duration, delay }) => {
//   return (
//     <motion.div
//       initial={{ y: -100, x: initialX, opacity: 0 }}
//       animate={{ 
//         y: window.innerHeight + 100,
//         x: initialX + Math.sin(initialX) * 50,
//         opacity: [0, 1, 1, 0]
//       }}
//       transition={{
//         duration: duration,
//         repeat: Infinity,
//         delay: delay,
//         ease: "linear",
//         opacity: {
//           duration: duration / 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//           times: [0, 0.1, 0.9, 1]
//         }
//       }}
//       className="absolute z-0"
//     >
//       <div className={`p-3 rounded-xl shadow-lg ${color}`}>
//         <Icon size={size} className="text-white" />
//       </div>
//     </motion.div>
//   );
// };

// const Hero = () => {
//   const services = [
//     { icon: Globe, color: "bg-blue-700", size: 24 },
//     { icon: Smartphone, color: "bg-purple-700", size: 28 },
//     { icon: Palette, color: "bg-pink-700", size: 26 },
//     { icon: Share2, color: "bg-indigo-700", size: 24 },
//     { icon: Code, color: "bg-blue-800", size: 30 },
//     { icon: Database, color: "bg-purple-800", size: 24 }
//   ];

//   return (
//     <div className="relative min-h-screen bg-[#f2f2f2] overflow-hidden " >
//       {/* Animated Background */}
//       <div className="absolute inset-0 opacity-50">
//         {services.map((service, index) => (
//           <FloatingIcon
//             key={index}
//             Icon={service.icon}
//             color={service.color}
//             size={service.size}
//             initialX={Math.random() * window.innerWidth}
//             duration={20 + Math.random() * 10}
//             delay={Math.random() * 10}
//           />
//         ))}
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-10">
//         <div className="container mx-auto px-4 pt-20 lg:pt-32">
//           {/* Flex Container for Layout Management */}
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             {/* Text Content - On mobile: first, On desktop: first */}
//             <div className="w-full lg:w-1/2 text-center lg:text-left">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6"
//               >
//                 Welcome to GNT India
//               </motion.div>

//               <motion.h1 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7 }}
//                 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6"
//               >
//                 Go to the{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//                   Next Technology
//                 </span>
//               </motion.h1>
              
//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 className="text-xl text-gray-600 mb-8"
//               >
//                 We, at GNTINDIA, are not another technology company; we are your partner in growth, 
//                 innovation, and transformation. With our ever-changing digital world, we are here to 
//                 bring forward your business.
//               </motion.p>

//               {/* Buttons */}
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.4 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
//               >
//                 <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center">
//                   <span>Get Free Website</span>
//                   <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-full">2 Min</span>
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:shadow-lg transition-all border-2 border-gray-200">
//                   <Link to="/about"> Learn More</Link>
//                 </button>
//               </motion.div>

//               {/* Service Pills */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="flex flex-wrap gap-3 justify-center lg:justify-start"
//               >
//                 {[
//                   { name: 'Web Dev', color: 'bg-blue-100 text-blue-600' },
//                   { name: 'Mobile Apps', color: 'bg-purple-100 text-purple-600' },
//                   { name: 'UI/UX', color: 'bg-pink-100 text-pink-600' },
//                   { name: 'AI Tools', color: 'bg-indigo-100 text-indigo-600' },
//                   { name: 'Social Media Management', color: 'bg-indigo-100 text-indigo-600' },
//                   { name: 'Cloud', color: 'bg-blue-100 text-red-600' },
//                   { name: 'Software Development', color: 'bg-indigo-100 text-indigo-600' },
//                 ].map((service) => (
//                   <div 
//                     key={service.name}
//                     className={`px-4 py-2 rounded-full ${service.color} font-medium text-sm`}
//                   >
//                     {service.name}
//                   </div>
//                 ))}
//               </motion.div>
//             </div>

//             {/* Video Section - On mobile: second, On desktop: second */}
//             <motion.div 
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.5 }}
//               className="w-full lg:w-1/2 h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <div className="relative h-full">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
//                 <video 
//                   className="w-full h-full object-cover rounded-2xl"
//                   autoPlay 
//                   loop 
//                   muted 
//                   playsInline
//                 >
//                   <source src={Videos} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>

//                 {/* Video Overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
//                   <div className="flex items-center gap-4">
//                     <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
//                     <span className="text-white text-sm font-medium">Watch Our Story</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


























































































import React from 'react';
import Videos from '../../assets/videos/vedio2.mp4';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Globe, 
  Smartphone, 
  Palette, 
  Share2, 
  Code,
  Database,
  Brain,
  CloudDownload,
  CodeIcon,
  ShoppingBag,
  ChartBarBig,
  IndianRupee
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingIcon = ({ Icon, color, size, initialX, duration, delay }) => {
  return (
    <motion.div
      initial={{ y: -100, x: initialX, opacity: 0 }}
      animate={{ 
        y: window.innerHeight + 100,
        x: initialX + Math.sin(initialX) * 50,
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
        opacity: {
          duration: duration / 3,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.1, 0.9, 1]
        }
      }}
      className="absolute z-0"
    >
      <div className={`p-3 rounded-xl shadow-lg ${color}`}>
        <Icon size={size} className="text-white" />
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const services = [
    { icon: Globe, color: "bg-blue-900", size: 24 },
    { icon: Smartphone, color: "bg-purple-700", size: 28 },
    { icon: Palette, color: "bg-pink-900", size: 26 },
    { icon: Share2, color: "bg-indigo-700", size: 24 },
    { icon: Brain, color: "bg-red-700", size: 24 },
    { icon: Code, color: "bg-red-800", size: 30 },
    { icon: CloudDownload, color: "bg-red-800", size: 30 },
    { icon: CodeIcon, color: "bg-red-800", size: 30 },
    { icon: Code, color: "bg-red-800", size: 30 },
    { icon: ShoppingBag, color: "bg-red-800", size: 30 },
    { icon: Code, color: "bg-red-800", size: 30 },
    { icon: ChartBarBig, color: "bg-red-800", size: 30 },
    { icon: Code, color: "bg-red-800", size: 30 },
    { icon: IndianRupee, color: "bg-red-800", size: 30 },
    { icon: Code, color: "bg-red-800", size: 30 },
    { icon: Code, color: "bg-red-800", size: 30 },
    { icon: Database, color: "bg-purple-800", size: 24 }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden mb-12">
      {/* New Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
               backgroundSize: '32px 32px'
             }} 
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Animated Icons Background */}
      <div className="absolute inset-0 opacity-50">
        {services.map((service, index) => (
          <FloatingIcon
            key={index}
            Icon={service.icon}
            color={service.color}
            size={service.size}
            initialX={Math.random() * window.innerWidth}
            duration={20 + Math.random() * 10}
            delay={Math.random() * 10}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-20 lg:pt-32">
          {/* Rest of your content remains the same */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6"
              >
                Welcome to GNT India
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6"
              >
                Go to the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Next Technology
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                We, at GNTINDIA, are not another technology company; we are your partner in growth, 
                innovation, and transformation. With our ever-changing digital world, we are here to 
                bring forward your business.
              </motion.p>

              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center">
                  <span>Get Free Website</span>
                  <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-full">2 Min</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:shadow-lg transition-all border-2 border-gray-200">
                  <Link to="/about">Learn More</Link>
                </button>
              </motion.div>

              {/* Service Pills */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {[
                  { name: 'Web Dev', color: 'bg-blue-100 text-blue-600' },
                  { name: 'Mobile Apps', color: 'bg-purple-100 text-purple-600' },
                  { name: 'UI/UX', color: 'bg-pink-100 text-pink-600' },
                  { name: 'AI Tools', color: 'bg-indigo-100 text-indigo-600' },
                  { name: 'Social Media Management', color: 'bg-indigo-100 text-indigo-600' },
                  { name: 'Cloud', color: 'bg-blue-100 text-red-600' },
                  { name: 'Software Development', color: 'bg-indigo-100 text-indigo-600' },
                ].map((service) => (
                  <div 
                    key={service.name}
                    className={`px-4 py-2 rounded-full ${service.color} font-medium text-sm`}
                  >
                    {service.name}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Video Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="w-full lg:w-1/2 h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
                <video 
                  className="w-full h-full object-cover rounded-2xl"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={Videos} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex items-center gap-4">
                    {/* <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">Watch Our Story</span> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;