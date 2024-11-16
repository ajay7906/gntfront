






// import React from 'react';
// import Start from '../../assets/images/start.jpeg'
// const SplitCard = () => {
//   const { openForm } = useContactForm();

//   return (
//     <div 
//       className="w-full min-h-[500px] bg-cover bg-center bg-no-repeat relative"
//       style={{
//         backgroundImage: `url('${Start}')`  // Your background image
//       }}
//     >
//       {/* Semi-transparent overlay for better readability */}
//       <div className="absolute inset-0 " />

//       {/* Main content container */}
//       <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-8 items-center min-h-[500px]">
//         {/* Left side content */}
//         <div className="p-6 md:p-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
//             Are you ready to start a project?
//             <span className="block mt-2">
//               We are eager to hear from you
//             </span>
//           </h2>
          
//           <p className="text-gray-700 mb-8 text-lg">
//             We provide the best solutions for your business needs. Our team of experts
//             is dedicated to delivering high-quality services tailored to your requirements.
//           </p>

//           <button
//             className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
//             onClick={openForm}
//           >
//             Start a Project
//             <svg 
//               className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth="2" 
//                 d="M14 5l7 7m0 0l-7 7m7-7H3" 
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Right side image */}
//         <div className="relative h-full min-h-[250px]   md:min-h-[500px]">
//           <img 
//             src={Man}  // Replace with your person image
//             alt="Business professional"
//             className="absolute bottom-0 right-0 h-full object-contain object-bottom"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SplitCard;



























// import React from 'react';
// import { useContactForm } from '../../context/ContactFormContext';
// import Start from '../../assets/images/start.jpeg'
// import Man from '../../assets/images/man.png'
// //import { useContactForm } from '../../hooks/useContactForm';

// const SplitCard = () => {
//   const { openForm } = useContactForm();
  
//   return (
//     <div
//       className="w-full h-[500px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
//       style={{
//         backgroundImage: `url('${Start}')`  // Using placeholder for demo
//       }}
//     >
//       {/* Semi-transparent overlay */}
//       <div className="absolute inset-0 " />
      
//       {/* Main content container */}
//       <div className="relative z-10 container mx-auto h-full">
//         <div className="grid md:grid-cols-2 gap-8 h-full">
//           {/* Left side content */}
//           <div className="p-6 md:p-12 flex flex-col justify-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
//               Are you ready to start a project?
//               <span className="block mt-2">
//                 We are eager to hear from you
//               </span>
//             </h2>
            
//             <p className="text-gray-700 mb-8 text-lg">
//               We provide the best solutions for your business needs. Our team of experts
//               is dedicated to delivering high-quality services tailored to your requirements.
//             </p>
            
//             <button
//               className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 w-fit"
//               onClick={openForm}
//             >
//               Start a Project
//               <svg
//                 className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M14 5l7 7m0 0l-7 7m7-7H3"
//                 />
//               </svg>
//             </button>
//           </div>
          
//           {/* Right side image */}
//           <div className="relative hidden md:block">
//             <img
//               src={Man}  // Using placeholder for demo
//               alt="Business professional"
//               className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom max-h-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SplitCard;




































// import React from 'react';
// import { useContactForm } from '../../context/ContactFormContext';


// import Start from '../../assets/images/start.jpeg'
// import Man from '../../assets/images/man.png'


// const SplitCard = () => {
//   const { openForm } = useContactForm();
    
//   return (
//     <div
//       className="w-full h-[500px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
//       style={{
//         backgroundImage: `url('${Start}')`  // Using placeholder for demo
//       }}
//     >
//       {/* Semi-transparent overlay */}
//       <div className="absolute inset-0" />
            
//       {/* Main content container */}
//       <div className="relative z-10 container mx-auto h-full">
//         <div className="grid md:grid-cols-2 gap-8 h-full">
//           {/* Left side content */}
//           <div className="p-6 md:p-12 flex flex-col justify-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
//               Are you ready to start a project?
//               <span className="block mt-2">
//                 We are eager to hear from you
//               </span>
//             </h2>
                        
//             <p className="text-gray-700 mb-8 text-lg">
//               We provide the best solutions for your business needs. Our team of experts
//               is dedicated to delivering high-quality services tailored to your requirements.
//             </p>
                        
//             <button
//               className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 w-fit"
//               onClick={openForm}
//             >
//               Start a Project
//               <svg
//                 className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M14 5l7 7m0 0l-7 7m7-7H3"
//                 />
//               </svg>
//             </button>
//           </div>
                    
//           {/* Right side image */}
//           <div className="relative h-full flex items-end">
//             <img
//               src={Man}  // Using placeholder for demo
//               alt="Business professional"
//               className="h-[90%] w-auto object-contain object-bottom mx-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SplitCard;









import React from 'react';
import { useContactForm } from '../../context/ContactFormContext';



import Start from '../../assets/images/start.jpeg'
import Man from '../../assets/images/man.png'

const SplitCard = () => {
  const { openForm } = useContactForm();
    
  return (
    <div
      className="w-full h-[500px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `url('${Start}')`  // Using placeholder for demo
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0" />
            
      {/* Main content container */}
      <div className="relative z-10 container mx-auto h-full">
        <div className="grid md:grid-cols-2 gap-8 h-full">
          {/* Left side content */}
          <div className="p-6 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Are you ready to start a project?
              <span className="block mt-2">
                We are eager to hear from you
              </span>
            </h2>
                        
            <p className="text-gray-700 mb-8 text-lg">
              We provide the best solutions for your business needs. Our team of experts
              is dedicated to delivering high-quality services tailored to your requirements.
            </p>
                        
            <button
              className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 w-fit"
              onClick={openForm}
            >
              Start a Project
              <svg
                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
                    
          {/* Right side image */}
          <div className="relative h-full overflow-hidden">
            <div className="absolute inset-0 flex items-end justify-center">
              <img
                src={Man} // Using placeholder for demo
                alt="Business professional"
                className="max-h-[500px] w-auto object-contain object-bottom"
                style={{ transform: 'scale(0.9)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitCard;