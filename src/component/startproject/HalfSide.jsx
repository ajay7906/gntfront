// import { useState } from 'react';

// const HalfSideCard = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="max-w-4xl mx-auto my-8 p-1">
//       {/* Main card with gradient border animation */}
//       <div 
//         className="relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Background image with overlay */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('/api/placeholder/800/600')`, // Replace with your image URL
//           }}
//         >
//           {/* Gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/75" />
//         </div>

//         {/* Content container */}
//         <div className="relative z-10 flex flex-col md:flex-row items-center p-8 gap-8">
//           {/* Left side content */}
//           <div className="flex-1 text-white">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 transform transition-transform duration-300 hover:scale-105">
//               Are you ready to start a project?
//               <span className="block mt-2 text-blue-300">We are eager to hear from you</span>
//             </h2>
            
//             <p className="text-gray-200 mb-8 max-w-xl leading-relaxed opacity-90">
//               We provide the best solutions for your business needs. Our team of experts 
//               is dedicated to delivering high-quality services tailored to your requirements.
//             </p>

//             <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-500 px-8 py-3 font-bold text-white transition duration-300 ease-out hover:bg-blue-600">
//               <span className="absolute inset-0 flex h-full w-full -translate-x-full transform items-center justify-center bg-blue-600 text-white duration-300 group-hover:translate-x-0">
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </span>
//               <span className="relative transition duration-300 group-hover:translate-x-4">
//                 Start a Project
//               </span>
//             </button>
//           </div>

//           {/* Right side decorative elements */}
//           <div className="flex-shrink-0 w-full md:w-1/3">
//             <div className="relative">
//               {/* Animated circles */}
//               <div className={`absolute -top-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} />
//               <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-blue-300/20 rounded-full transition-transform duration-700 delay-100 ${isHovered ? 'scale-110' : 'scale-100'}`} />
              
//               {/* Main decorative shape */}
//               <div className="relative h-64 w-64 mx-auto bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full backdrop-blur-sm transform transition-transform duration-500 hover:rotate-12">
//                 <div className="absolute inset-2 bg-gradient-to-br from-blue-300/20 to-blue-500/20 rounded-full" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HalfSideCard;

















import { useState } from 'react';
import Start from '../../assets/images/start.jpeg'
import { useContactForm } from '../../context/ContactFormContext';
// const HalfSideCard = () => {
//   return (
//     <div className="w-full">
//       {/* Main card */}
//       <div className="relative overflow-hidden">
//         {/* Background image with overlay */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full "
//           style={{
//             backgroundImage: `url('${Start}')`, // Replace with your image URL
//           }}
//         >
//           {/* Gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/75" />
//         </div>

//         {/* Content container */}
//         <div className="relative z-10 flex flex-col md:flex-row items-center container mx-auto  gap-8">
//           {/* Left side content */}
//           <div className="flex-1 text-white px-4 py-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Are you ready to start a project?
//               <span className="block mt-2 text-blue-300">We are eager to hear from you</span>
//             </h2>
            
//             <p className="text-gray-200 mb-8 max-w-xl leading-relaxed opacity-90">
//               We provide the best solutions for your business needs. Our team of experts 
//               is dedicated to delivering high-quality services tailored to your requirements.
//             </p>

//             {/* Simplified button with subtle hover effect */}
//             <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2">
//               Start a Project
//               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </button>
//           </div>

//           {/* Right side decorative elements */}
//           <div className="flex-shrink-0 w-full md:w-1/3">
//             <div className="relative">
//               {/* Static decorative circles */}
//               <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full" />
//               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-300/20 rounded-full" />
              
//               {/* Main decorative shape */}
//               <div className="relative h-64 w-64 mx-auto bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full backdrop-blur-sm">
//                 <div className="absolute inset-2 bg-gradient-to-br from-blue-300/20 to-blue-500/20 rounded-full" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HalfSideCard;



const HalfSideCard = () => {
  const { openForm } = useContactForm();
    return (
      <div 
        className="w-full min-h-[500px] bg-cover bg-center bg-no-repeat relative"
        style={{
            backgroundImage: `url('${Start}')`,// Replace with your actual image URL
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 " />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Are you ready to start a project?
              <span className="block mt-2 text-blue-900">
                We are eager to hear from you
              </span>
            </h2>
            
            <p className="text-black-100 mb-8 text-lg">
              We provide the best solutions for your business needs. Our team of experts 
              is dedicated to delivering high-quality services tailored to your requirements.
            </p>
  
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
            onClick={openForm}
            
            >
              Start a Project
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HalfSideCard;