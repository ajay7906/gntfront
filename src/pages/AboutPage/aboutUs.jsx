// src/components/AboutPage.js
import React from 'react';
// import AwardSection from './AwardSection';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 pt-16">
      {/* Hero Section */}
      <section className="bg-[#F2F2F2] text-black py-16  pt-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
          GNTINDIA - Go to the Next Technology is just a name, but is more of a call towards innovation, transformation, and progress.
          At GNTINDIA, we love to bring the future closer to businesses of all sizes and industries.With
          expertise in software development, website creation, social media management, and many other
          high-tech digital tools such as WhatsApp chatbot integration, we go way beyond technical solutions. We are here
          to help our clients harness technology to build stronger, smarter, and more resilient businesses.
          Simple yet potent, that is the mantra of Anand Gandhi: creating change through technology for good. GNTINDIA
          allows business growth with the assistance of the most advanced tools: innovative WhatsApp Chatbots connect businesses
          with their customers. Here to support growth by changing the rules of the game. Join us, and you will see how technologies
          can drive your business up a level.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p>
              GNTINDIA - Next Technology, with a singular mission: to empower businesses
              with technology that fuels growth, innovation, and success. Founded by Anand Gandhi, 
              visionary leader of the Hannanth Group of Industries, GNTINDIA is built to deliver
              cutting-edge digital solutions that transform the way companies operate. With a focus
              on software development, web creation, and dynamic social media tools, we offer tailor-made
              solutions to simplify complexities and unlock potential.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p>
              At GNTINDIA, our vision is to redefine digital growth for any business, big or small. We see ourselves at the
              helm of technology that is advanced but accessible and impactful. We want to help businesses succeed by arming 
              them with solutions that drive innovation and make a real difference in the world. We are creating a future where
              businesses feel confident and clear in flying to new heights with GNTINDIA. Every tool, strategy, and solution we build
              is to unlock your potential and take you further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member Card */}
            {[
              { name: "Ansul", role: "", img: "https://via.placeholder.com/150" },
              { name: "Ajay", role: "", img: "https://via.placeholder.com/150" },
              { name: "Sandeep", role: "", img: "https://via.placeholder.com/150" },
              { name: "Upkar Bharti", role: "", img: "https://via.placeholder.com/150" },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Section
      <section className="py-16">
        <AwardSection />
      </section> */}
    </div>
  );
};

export default AboutUs;
