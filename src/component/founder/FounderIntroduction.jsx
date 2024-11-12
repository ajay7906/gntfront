



// import React from 'react';
// import { motion } from 'framer-motion';
// import FounderImg from '../../assets/images/founder.png';
// const FounderIntroduction = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-7xl mx-auto relative overflow-hidden rounded-2xl shadow-xl"
//       >
//         {/* Background Image Section */}
//         <div className="absolute inset-0 w-full h-full">
//           <img
//             src={FounderImg}
//             alt="Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
//         </div>

//         {/* Content Overlay */}
//         <div className="relative z-10 min-h-[600px] flex flex-col md:flex-row items-center p-8 lg:p-12">
//           {/* Left Content */}
//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="w-full md:w-1/2 text-white space-y-6 md:pr-8"
//           >
//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <h1 className="text-4xl lg:text-5xl font-bold mb-2">
//                 Anand Gandhi
//               </h1>
//               <h2 className="text-xl lg:text-2xl text-orange-400 font-semibold">
//                 Founder & CEO, GNTINDIA
//               </h2>
//             </motion.div>

//             <motion.p
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="text-lg text-gray-100 leading-relaxed"
//             >
//               A visionary leader revolutionizing the IT landscape, Anand Gandhi is driving GNTINDIA 
//               to new heights through groundbreaking solutions and a relentless focus on digital 
//               transformation. His passion for innovation and technology has established GNTINDIA 
//               as a pioneer in delivering exceptional IT services that empower businesses worldwide.
//             </motion.p>

//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.8 }}
//               className="flex flex-wrap gap-4"
//             >
//               <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
//                 <h3 className="text-orange-400 font-semibold mb-1">Vision</h3>
//                 <p className="text-gray-100">Shaping the future of technology</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
//                 <h3 className="text-orange-400 font-semibold mb-1">Mission</h3>
//                 <p className="text-gray-100">Empowering digital transformation</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Side Decorative Elements */}
//           <motion.div
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="w-full md:w-1/2 mt-8 md:mt-0"
//           >
          
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default FounderIntroduction;






















import React from 'react';
import CeoImage from '../../assets/images/founder.jpeg';
const FounderIntroduction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 min-h-[600px] flex flex-col md:flex-row items-center p-8 lg:p-12 gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-white space-y-6 md:pr-8">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-2 opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]">
                Anand Gandhi
              </h1>
              <h2 className="text-xl lg:text-2xl text-orange-400 font-semibold opacity-0 animate-[fadeIn_0.5s_0.2s_ease-in_forwards]">
                Founder & CEO, GNTINDIA
              </h2>
            </div>

            <p className="text-lg text-gray-100 leading-relaxed opacity-0 animate-[fadeIn_0.5s_0.4s_ease-in_forwards]">
              A visionary leader revolutionizing the IT landscape, Anand Gandhi is driving GNTINDIA
              to new heights through groundbreaking solutions and a relentless focus on digital
              transformation. His passion for innovation and technology has established GNTINDIA
              as a pioneer in delivering exceptional IT services that empower businesses worldwide.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-[fadeIn_0.5s_0.6s_ease-in_forwards]">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20">
                <h3 className="text-orange-400 font-semibold mb-1">Vision</h3>
                <p className="text-gray-100">Shaping the future of technology</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20">
                <h3 className="text-orange-400 font-semibold mb-1">Mission</h3>
                <p className="text-gray-100">Empowering digital transformation</p>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center opacity-0 animate-[fadeIn_0.5s_0.8s_ease-in_forwards]">
            <div className="relative group">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-4 border-orange-400/30 animate-ping" />
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-[spin_10s_linear_infinite]" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/30 transform transition-transform duration-500 group-hover:scale-105">
                <img
                  src={CeoImage}
                  alt="Anand Gandhi"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderIntroduction;