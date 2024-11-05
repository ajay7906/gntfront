// Hero.js
import React from 'react';

import image1 from '/src/assets/images/GNTIND1.png';
import image2 from '/src/assets/images/GNTINDdigital.png';
import image3 from '/src/assets/images/GNTINDSocila.png';          
import image4 from '/src/assets/images/GNTINDSoftware.png';
import image5 from '/src/assets/images/GNTINDWeb.png';
import ReactPlayer from 'react-player';
import Vedio from '../../assets/videos/vedio.mp4';

const Heros = () => {
  return (
    <section className="pt-16 flex flex-col lg:flex-row items-center justify-center h-screen bg-[#F2F2F2] text-black">
      {/* Left Section (Content) */}
      <div className="lg:w-1/2 px-8 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
         Go to the Next Technology
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-gray-500">
        We, at GNTINDIA, are not another technology company; we are your partner in growth,
        innovation, and transformation. With our ever-changing digital world, we are here 
        to bring forward your business.
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition duration-200">
        Get Free Website 2 Min
        </button>
      </div>

      
      {/* Right Section (Video) */}
      {/* <div className="lg:w-1/2 p-8 flex justify-center lg:justify-end">
        <div className="relative w-full h-[356px] sm:h-64 md:h-80 lg:h-full lg:w-4/5 overflow-hidden rounded-lg shadow-lg">
      
         <iframe
            className="w-full h-auto rounded-lg shadow-lg"
            src="../../assets/videos/vedio.mp4"
            title="Hero Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
         ></iframe>
        </div>
      </div> */}
      <div className="lg:w-1/2 p-8 flex justify-center lg:justify-end">
        <div className="relative w-full h-full lg:w-4/5 lg:h-[480px] overflow-hidden rounded-lg shadow-lg">
        
          {/* <ReactPlayer
           src="https://drive.google.com/file/d/1qQlGcaExZGEijoNNT-fUGXwH--Yjjyfd/view"
            width="100%"
            height="100%"
            controls
            className="rounded-lg shadow-lg"
          /> */}
           <video
                className="w-full h-full object-cover rounded-lg "
                autoPlay
                loop
                muted
                playsInline
              >
                {/* <source src="https://hpcpl.gntind.com/hpcpl/wp-content/uploads/2024/10/Untitled-%E2%80%91-Made-with-FlexClip-13-online-video-cutter.com_-5.mp4" type="video/mp4" /> */}
                <source src={Vedio} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
        </div>
      </div>
    </section>
  );
};



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
        <div className="overflow-hidden relative w-full h-[300px]">
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


const services = [
    {
      title: "Mobile App Development",
      description: "We build native and cross-platform mobile apps to help retailers grow.",
    },
    {
      title: "CRM",
      description: "We build native and cross-platform mobile apps to help retailers grow.",
    },
    {
      title: "Cloud Solution",
      description: "We build native and cross-platform mobile apps to help retailers grow.",
    },
    {
      title: "Ai-Powered Tool",
      description: "We build native and cross-platform mobile apps to help retailers grow.",
    },
    {
      title: "Website Development",
      description: "We build native and cross-platform mobile apps to help retailers grow.",
    },
    {
      title: "UI/UX Desgin",
      description: "We build native and cross-platform mobile apps to help retailers grow.",
    },
];
  
const OnDemandServices = () => {
    return (
      <div className="py-10 px-4 bg-gray-300 ">
        <h2 className="text-3xl font-bold text-center mb-6">On-Demand Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col justify-between"
              style={{ width: '380px', height: '341px' }} // Fixed card size
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
              </div>
              <a href="#" className="text-blue-500 hover:underline self-end">Read More</a>
            </div>
          ))}
        </div>
      </div>
    );
}; 
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

const Hero = () => {
    return (
      <div>
        <Heros />
        <ImageSlider />
        <OnDemandServices />
        <AwardSection/>
        <HalfSideCard />
      </div>
    )
}

export default Hero;
