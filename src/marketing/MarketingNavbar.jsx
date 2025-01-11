import React, { useState, useRef, useEffect } from 'react';
import LOGO from "./images/GNTIND.png";
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {    
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {  
        
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const buttonStyle = "hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium";
  const mobileButtonStyle = "block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500";

  return (
    <nav className=" text-black left-0 right-0 py-2 px-2 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold">
              <img 
                src={LOGO}
                alt="Logo" 
                className="w-[66px] h-[66px] object-contain rounded-full" 
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/marketing/dashboard"  className={buttonStyle}>
              Home
            </Link>

            {/* <Link to="/adminDashboard"  className={buttonStyle}>
              Admin
            </Link> */}

            <Link to="/marketing/alltask"  className={buttonStyle}>
              All Task
            </Link>

            {/* <button className={buttonStyle}>
              Today Task
            </button>
            */}
            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={buttonStyle}
              >
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </div>
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 w-full text-left">
                    User Name
                  </button>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 w-full text-left">
                    User Id 
                  </button>
                  <hr className="my-1" />
                  <button className="block px-4 py-2 text-sm text-red-600 hover:bg-blue-500 w-full text-left">
                    Logout
                  </button>
                </div>
              )}
            </div>
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
            <Link to="/"  className={mobileButtonStyle}>
              Home
            </Link>

            <button className={mobileButtonStyle}>
              All Task
            </button>

            <button className={mobileButtonStyle}>
              Today Task
            </button>

            <button className={mobileButtonStyle}>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </div>
            </button>

            {/* Mobile Profile Options */}
            <div className="pl-8 space-y-1">
              <button className="block w-full text-left px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-blue-500">
                Usre Name
              </button>
              <button className="block w-full text-left px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-blue-500">
                User id
              </button>
              <button className="block w-full text-left px-3 py-2 rounded-md text-sm text-red-600 hover:bg-blue-500">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MarketingNavbar;