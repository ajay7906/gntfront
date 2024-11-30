// Hero.js
import React from 'react';

import image1 from '/src/assets/images/GNTIND1.png';
import image2 from '/src/assets/images/marketing.jpeg';
import image3 from '/src/assets/images/media.jpeg';
import image4 from '/src/assets/images/software.jpeg';
import image5 from '/src/assets/images/website.jpeg';
import ReactPlayer from 'react-player';
import Vedio from '../../assets/videos/vedio2.mp4';









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
import WhatsAppAPISection from '../../component/whatsapp/WhatsApp';
import HalfSideCard from '../../component/startproject/HalfSide';
import { Helmet } from 'react-helmet';
const Hero = () => {
  return (
    <>


      <Helmet>
        <title>GNTIndia | Simplify Business Communication with WhatsApp API Chatbots</title>
        <meta
          name="description"
          content="GNTIndia offers innovative WhatsApp API chatbot solutions to automate business communication, enhance customer engagement, and improve productivity."
        />
        {/* <meta name="google-site-verification" content="CYZixTiJ3X3Dtr_3EtfdLYAyajyvboU267blv4x_mWc" /> */}

        <meta name="google-site-verification" content="CYZixTiJ3X3Dtr_3EtfdLYAyajyvboU267blv4x_mWc" />



        <meta name="keywords" content="GNTIndia, WhatsApp API, Business Chatbots, Automation, Customer Engagement" />
      </Helmet>










      <div>

        <Heros />
        {/* <ServiceComponent/> */}
        {/* <ImageSlider /> */}
        <CardSlider />
        <WhatsAppAPISection />
        {/* <OnDemandServices /> */}
        <OnDemandService />
        {/* <AwardSection/> */}
        <FounderIntroduction />
        <HalfSideCard />
      </div>
    </>
  )
}

export default Hero;
























