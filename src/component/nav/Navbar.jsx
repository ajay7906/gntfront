// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-[#F2F2F2] text-black left-0 right-0 shadow-md py-2 px-2 fixed top-0 w-full z-50">
         
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
            <img src="/src/assets/images/GNTIND LOGO.png" alt="Logo" 
            className="w-[66px] h-[66px] object-contain rounded-full" srcset="" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            
            <Link to="/"  className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
            Home
            </Link>

            <Link to="/about"  className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            
            {/* <div className="relative">
              {/* About Dropdown }
              <button
                onClick={() => toggleDropdown('about')}
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                About
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute bg-white text-black rounded-md mt-2 w-48 shadow-lg">
                  <a href="#team" className="block px-4 py-2 text-sm hover:bg-gray-200">
                    Our Team
                  </a>
                  <a href="#mission" className="block px-4 py-2 text-sm hover:bg-gray-200">
                    Mission
                  </a>
                </div>
              )}
            </div> */}

            <div className="relative">
              {/* Services Dropdown */}
              <button
                onClick={() => toggleDropdown('services')}
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Services
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute bg-white text-black rounded-md mt-2 w-48 shadow-lg">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Custom Software Development</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Social Media Management</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">CRM</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cloud Solutions</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Web Development</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">AI-Powered Tools</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">UI/UX Design</a>
                </div>
              )}
            </div>

            <div className="relative">
              {/* Products Dropdown */}
              <button
                onClick={() => toggleDropdown('products')}
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Products
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute bg-white text-black rounded-md mt-2 w-48 shadow-lg">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">WhatsApp API</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">ERP Solutions </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">E-Commerce Platforms</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cybersecurity Solutions</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Digital Marketing Tools</a>
                </div>
              )}
            </div>

            <div className="relative">
              {/* Blog Dropdown */}
              <button
                onClick={() => toggleDropdown('blogs')}
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Blog
              </button>
              {activeDropdown === 'blogs' && (
                <div className="absolute bg-white text-black rounded-md mt-2 w-48 shadow-lg">
                 <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Educational Content</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Regular Updates</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">SEO Benefits</a>
                </div>
              )}
            </div>

            <a href="#protfolio" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Portfolio
            </a>

            <a href="#careers" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                Careers
            </a>

            <a href="#careers" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Project Demo
            </a>

            <button class="bg-[#2E338C] hover:bg-indigo-500 text-white px-3 py-2 rounded-md font-medium">
                Start a Project
            </button>

        </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#260101] hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F2F2F2]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

            <Link to="/"  className="block px-3 py-2 rounded-md text-base font-medium">
            Home
            </Link>

            <Link to="/about"  className="block px-3 py-2 rounded-md text-base font-medium">
            About
            </Link>

            {/* Mobile Services Dropdown */}
            <button
              onClick={() => toggleDropdown('services')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none"
            >
              Services
            </button>
            {activeDropdown === 'services' && (
              <div className="pl-5">
                <a href="#design" className="block px-3 py-2 text-sm">
                Custom Software Development
                </a>
                <a href="#development" className="block px-3 py-2 text-sm">
                Social Media Management
                </a>
                <a href="#marketing" className="block px-3 py-2 text-sm">
                Cloud Solutions
                </a>
                <a href="#marketing" className="block px-3 py-2 text-sm">
                Web Development
                </a>
                <a href="#marketing" className="block px-3 py-2 text-sm">
                CRM
                </a>
                <a href="#marketing" className="block px-3 py-2 text-sm">
                AI-Powered Tools
                </a>
                <a href="#marketing" className="block px-3 py-2 text-sm">
                UI/UX Design
                </a>
                </div>
            )}

            {/* Mobile products Dropdown */}
            <button
              onClick={() => toggleDropdown('products')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none"
            >
              Products
            </button>
            {activeDropdown === 'products' && (
              <div className="pl-5">
                <a href="#design" className="block px-3 py-2 text-sm">
                WhatsApp API
                </a>
                <a href="#development" className="block px-3 py-2 text-sm">
                ERP Solutions
                </a>
                <a href="#marketing" className="block px-3 py-2 text-sm">
                E-Commerce Platforms
                </a>
                <a href="#marketing" className="block px-3 py-2 text-sm">
                Cybersecurity Solutions
                </a>
                <a href="#marketing" className="block px-3 py-2 text-sm">
                Digital Marketing Tools
                </a>
              </div>
            )}

             {/* Mobile Blog Dropdown */}
             <button
              onClick={() => toggleDropdown('blog')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none"
            >
              Blog
            </button>
            {activeDropdown === 'blog' && (
              <div className="pl-5">
                <a href="#design" className="block px-3 py-2 text-sm">
                Educational Content
                </a>
                <a href="#development" className="block px-3 py-2 text-sm">
                Regular Updates
                </a>
                <a href="#marketing" className="block px-3 py-2 text-sm">
                SEO Benefits
                </a>
              </div>
            )}

            <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium">
            Portfolio
            </a>

            <a href="#careers" className="block px-3 py-2 rounded-md text-base font-medium">
            Careers
            </a>

            <a href="#project" className="block px-3 py-2 rounded-md text-base font-medium">
            Project Demo
            </a>

            <button class="bg-[#2E338C] hover:bg-indigo-500 text-white px-3 py-2 rounded-md font-medium">
                Start a Project
            </button>

          </div>
        </div> 
      )}
    </nav>
  );
};

export default Navbar;
