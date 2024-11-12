import React from 'react';
import FOunderImg from '../../assets/images/founder.jpeg';
const FounderMessage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto pt-12 backdrop-blur-sm rounded-2xl ">
        <div className="p-6 md:p-10">
          {/* Header Section */}
          <div className="relative mb-8">
            <div className="absolute top-0 left-0 w-20 h-1 bg-blue-600"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-6">
              {/* Founder's Message */}
            </h1>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="aspect-square  rounded-2xl overflow-hidden">
                  <img
                    src={FOunderImg}
                    alt="Anand Gandhi"
                    className="w-full h-full object-cover mix-blend-overlay opacity-90"
                  />
                </div>
                {/* Custom Quote Icon */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                Anand Gandhi
              </h2>
              <h3 className="text-lg text-blue-600 font-semibold mb-6">
                Visionary Driver for Digital Transformation at GNTINDIA
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Anand Gandhi, from GNTINDIA, one name which has an approach towards innovation and purpose-driven technology. Known for his sharp industry insight combined with a passion for progress in the digital world, Anand founded GNTINDIA as a company to empower businesses to succeed in today's world.
                </p>
                <p>
                  His ability and hands-on work helped shape GNTINDIA into that dynamic company, understanding the dilemma of modern business, its requirements, and the solution through its management to bring results on the ground.
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Mission Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-blue-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                {/* Custom Arrow Icon */}
                <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <h4 className="text-xl font-bold text-blue-800">Vision</h4>
              </div>
              <p className="text-gray-700">
                Working on the belief of technology, Anand created GNTINDIA as a channel for businesses shifting towards smoother and technologically advanced operations. His vision is ahead of the curve, with solutions that address today's needs but are scalable, ready for the future, and capable of growing with their clients.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                {/* Custom Arrow Icon */}
                <svg className="w-5 h-5 text-indigo-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <h4 className="text-xl font-bold text-indigo-800">Leadership</h4>
              </div>
              <p className="text-gray-700">
                His leadership at GNTINDIA is based on building relationships that last, built on trust, excellence, and innovation. He is of the strong opinion that technology should be as flexible as it is powerful, and it has been bestowed into each service GNTINDIA provides.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Beyond the technical acumen, what characterizes Anand is his commitment to a collaborative work environment and his dedication to uplifting businesses of all sizes. The reputation as a visionary leader is matched by a genuine desire to see each client succeed.
            </p>
            <p>
              Digitization in businesses has found a great partner in GNTINDIA. GNTINDIA under the visionary leadership of Anand Gandhi is not just a service provider but a growth catalyst, innovation enabler, and a provider of digital empowerment.
            </p>
            <p className="font-medium text-blue-800">
              The successful pursuit of excellence continues to chart out the course of GNTINDIA as he and his team redefine what's possible in the world of technology—one solution at a time.
            </p>
          </div>

          {/* Footer Accent */}
          <div className="mt-10 border-t-2 border-blue-100 pt-6">
            <div className="flex items-center justify-center">
              <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderMessage;