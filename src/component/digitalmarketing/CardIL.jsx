import React from 'react';

const StyledCard = ({ title, description, images }) => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transform transition-all hover:scale-105 hover:shadow-xl">
      
      <div className="flex flex-col md:flex-row">
        
        {/* Description Section */}
        <div className="md:w-1/2 w-full p-8 bg-gray-50 flex items-center justify-center">
          <div> 
            <h2 className="text-2xl font-semibold items-center">{title}</h2> <br />
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Images Section */}
        <div className="md:w-1/2 w-full relative bg-gray-100">
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-0 pb-[85.92%]"> {/* Aspect ratio 547/471 */}
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-transform duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>

         {/*  */}

      </div>
    </div>
  );
};

export default StyledCard;
