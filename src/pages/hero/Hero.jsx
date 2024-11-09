// Hero.js
import React from 'react';

import image1 from '/src/assets/images/GNTIND1.png';
import image2 from '/src/assets/images/marketing.jpeg';
import image3 from '/src/assets/images/media.jpeg';          
import image4 from '/src/assets/images/software.jpeg';
import image5 from '/src/assets/images/website.jpeg';
import ReactPlayer from 'react-player';
import Vedio from '../../assets/videos/vedio2.mp4';     



// const Heros = () => {
//   return (
//     <section className="pt-16 flex flex-col lg:flex-row items-center justify-center h-screen bg-[#F2F2F2] text-black">
//       {/* Left Section (Content) */}
//       <div className="lg:w-1/2 px-8 text-center lg:text-left">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
//          Go to the Next Technology
//         </h1>
//         <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-gray-500">
//         We, at GNTINDIA, are not another technology company; we are your partner in growth,
//         innovation, and transformation. With our ever-changing digital world, we are here 
//         to bring forward your business.
//         </p>
//         <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition duration-200">
//         Get Free Website 2 Min
//         </button>
//       </div>

      
//       {/* Right Section (Video) */}
     
//       <div className="lg:w-1/2 p-8 flex justify-center lg:justify-end">
//         <div className="relative w-full h-full lg:w-4/5 lg:h-[480px] overflow-hidden rounded-lg ">
        
        
//            <video
//                 className="w-full h-full object-cover rounded-lg "
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//               >
//                 {/* <source src="https://hpcpl.gntind.com/hpcpl/wp-content/uploads/2024/10/Untitled-%E2%80%91-Made-with-FlexClip-13-online-video-cutter.com_-5.mp4" type="video/mp4" /> */}
//                 <source src={Vedio} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//         </div>
//       </div>
//     </section>
//   );
// };



// const Heros = () => {
//   return (
//     <section className="pt-16 flex flex-col lg:flex-row items-center justify-center bg-[#F2F2F2] text-black">
//       {/* Left Section (Content) */}
//       <div className="lg:w-1/2 px-8 text-center lg:text-left">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
//           Go to the Next Technology
//         </h1>
//         <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-gray-500">
//           We, at GNTINDIA, are not another technology company; we are your partner in growth,
//           innovation, and transformation. With our ever-changing digital world, we are here
//           to bring forward your business.
//         </p>
//         <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition duration-200">
//           Get Free Website 2 Min
//         </button>
//       </div>

//       {/* Right Section (Video) */}
//       <div className="lg:w-1/2 p-8 flex justify-center lg:justify-end">
//         <div className="relative w-full h-full lg:w-4/5 lg:h-[480px] overflow-hidden rounded-lg shadow-lg">
//           <iframe
//             className="w-full h-full rounded-lg shadow-lg"
//             src="../../assets/videos/vedio.mp4"
//             title="Hero Video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };







const ImageSlider = () => {
    const images = [image1, image2, image3, image4, image5];
  
    return (
        <div className="overflow-hidden relative w-full h-[300px] pt-16 bg-[#f2f2f2]">
          {/* Carousel container with auto-scrolling animation */}
          <div className="flex animate-autoSlide space-x-2"> {/* Adding space-x-2 for horizontal gap */}
            {images.concat(images).map((img, index) => (
              <div key={index} className="flex-shrink-0 w-[295px] h-[300px]">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
    
          {/* Gradient overlay for a fade effect on the edges */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-gray-900"></div>
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-gray-900"></div>
        </div>
    );
};





// import  { useState } from 'react';

// const CardSlider = () => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   const cards = [
//     { 
//       image: "/api/placeholder/295/200",
//       title: "Beautiful Landscape",
//       description: "Discover nature's beauty"
//     },
//     { 
//       image: "/api/placeholder/295/200",
//       title: "Urban Adventure",
//       description: "Explore city life"
//     },
//     { 
//       image: "/api/placeholder/295/200",
//       title: "Seaside Escape",
//       description: "Relax by the ocean"
//     },
//     { 
//       image: "/api/placeholder/295/200",
//       title: "Mountain Trek",
//       description: "Climb to new heights"
//     },
//     { 
//       image: "/api/placeholder/295/200",
//       title: "Desert Safari",
//       description: "Experience the wilderness"
//     }
//   ];

//   return (
//     <div className="w-full bg-gray-100 p-8">
//       <div 
//         className="overflow-hidden relative w-full h-96"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Cards container */}
//         <div className={`flex space-x-6 ${isHovered ? '' : 'animate-[slide_20s_linear_infinite]'}`}>
//           {/* Double the cards for infinite scroll effect */}
//           {[...cards, ...cards].map((card, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-72 group cursor-pointer"
//             >
//               <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform group-hover:scale-105 bg-white">
//                 {/* Image */}
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </div>
                
//                 {/* Content */}
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-600">
//                     {card.description}
//                   </p>
//                 </div>

//                 {/* Overlay gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Edge gradients */}
//         <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-100 to-transparent z-10" />
//         <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-100 to-transparent z-10" />
//       </div>
//     </div>
//   );
// };







// export default CardSlider;


import GntSohila from '../../assets/images/GNTINDSocila.png';

const HalfSideCard = () => {
    return (
      <div className="max-w-4xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Content */}
        <div className="p-8 flex-1">
          <h2 className="text-3xl font-bold mb-4">Are you ready to start a
            project? We are eager to
            hear from you</h2>
          <p className="text-gray-700 mb-4">
            We provide the best solutions for your business needs. Our team of experts is dedicated to delivering high-quality services tailored to your requirements.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Start a Project
          </button>
        </div>
  
        {/* Right Side - Image */}
        <div className="flex-shrink-0 md:w-1/2">
          <img
            src={GntSohila} // Replace with your image URL
            alt="Description"
            className="object-cover w-full h-full"
            style={{ width: '280px', height: '341px' }}
          />
        </div>
      </div>
    );
};

const awards = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/290x290?text=Award+1', // Replace with your image URL
      title: 'Best Innovation',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/290x290?text=Award+2', // Replace with your image URL
      title: 'Excellence in Service',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/290x290?text=Award+3', // Replace with your image URL
      title: 'Customer Choice Award',
    },
    {
      id: 4,
      imageUrl: 'https://via.placeholder.com/290x290?text=Award+4', // Replace with your image URL
      title: 'Outstanding Achievement',
    },
];





  
const AwardSection = () => {
    return (
      <div className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Our Awards</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={award.imageUrl}
                alt={award.title}
                className="object-cover w-full h-64"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">{award.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};








import Heros from '../../component/hero/Hero';
import ServiceComponent from '../../component/service/ServiceCompo';
import OnDemandService from '../../component/demand/OnDemandService';
import CardSlider from '../../component/cardslider/CardSlider';
import FounderIntroduction from '../../component/founder/FounderIntroduction';
const Hero = () => {
    return (
      <div>
        <Heros/>
        {/* <ServiceComponent/> */}
        {/* <ImageSlider /> */}
        <CardSlider/>
        
        {/* <OnDemandServices /> */}
        <OnDemandService />
        {/* <AwardSection/> */}
        <FounderIntroduction/>
        <HalfSideCard />
      </div>
    )
}

export default Hero;
























