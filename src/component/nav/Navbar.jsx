
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../../assets/images/Logo.png';
import { useContactForm } from '../../context/ContactFormContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openForm } = useContactForm();

  const menuItems = {
    About: [
      { title: 'About Us', path: '/about/aboutus' },
      { title: 'Founder Message', path: '/about/founder ' }
    
    ],

    Services: [
      { title: 'Custom Software Development', path: '/services/web-development' },
      { title: 'Social Media Management', path: '/services/mobile-development' },
      { title: 'CRM', path: '/services/ui-ux-design' },
      { title: 'Cloud Solutions', path: '/services/cloud' },
      { title: 'Web Development', path: '/services/cloud-services' },
      { title: 'AI-Powered Tools', path: '/services/ai' },
      { title: 'UI/UX Design', path: '/services/cloud-services' },
    ],
    Products: [
      { title: 'WhatsApp API', path: '/products/whatsapp' },
      { title: 'ERP Solutions', path: '/products/erp' },
      { title: 'E-Commerce Platforms', path: '/products/ecom' },
      { title: 'Cybersecurity Solutions', path: '/products/cybersecurity' },
      { title: 'Digital Marketing Tools', path: '/products/digitalmarketing' },
    ],
    Blog: [
      { title: 'Educational Content', path: '/blog/education' },
      { title: 'Regular Updates', path: '/blog/regular ' },
      { title: 'SEO Benefits', path: '/blog/seo' },
    ],
   
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const DropdownContent = ({ items }) => (
    <div className="absolute top-full left-0 w-56 mt-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-blue-50">
      <div className="py-2">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block group/item relative"
          >
            <div className="px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300">
              <span className="font-medium text-gray-700 group-hover/item:text-blue-600 transition-colors duration-200 relative">
                {item.title}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 group-hover/item:w-full transition-all duration-300"></span>
              </span>
            </div>
            <div className="absolute left-0 top-0 w-1 h-0 bg-blue-600 group-hover/item:h-full transition-all duration-200"></div>
          </Link>
        ))}
      </div>
    </div>
  );

  const MobileDropdown = ({ title, items }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300 rounded-lg"
        >
          <span className="font-medium">{title}</span>
          <ChevronDown
            size={20}
            className={`transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-600' : ''
              }`}
          />
        </button>
        <div
          className={`transition-all duration-300 ${isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block pl-6 pr-4 py-2 hover:bg-blue-50 hover:pl-8 transition-all duration-300 text-gray-700 hover:text-blue-600"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg '
          : 'bg-transparent '
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* <Link to="/" className="flex-shrink-0 flex items-center relative group">
            <img 
              src={Logo} 
              alt="Company Logo"
              loading='lazy'
              className={`
                transition-all duration-500 ease-in-out
                transform group-hover:scale-180
                ${scrolled ? 'w-58 h-16' : 'w-58 h-16'} 
                object-contain
                filter hover:brightness-110
                animate-fadeIn
              `}
            />
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500" />
          </Link> */}


          <Link to="/" className="flex-shrink-0 flex items-center relative group">
            <img
              src={Logo}
              alt="Company Logo"
              loading='lazy'
              className={`
      transition-all duration-500 ease-in-out
      transform group-hover:scale-110
      ${scrolled ? 'w-32 h-28' : 'w-40 h-28'} 
      object-contain
      filter hover:brightness-110
      animate-fadeIn
    `}
            />
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500" />
          </Link>






          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${location.pathname === '/' ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
            >
              Home
            </Link>
            {/* <Link
              to="/about"
              className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${location.pathname === '/about' ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
            >
              About
            </Link> */}

            {Object.entries(menuItems).map(([title, items]) => (
              <div key={title} className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-600 transition-all duration-200 font-medium group">
                  <span>{title}</span>
                  <ChevronDown size={16} className="transform group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <DropdownContent items={items} />
              </div>
            ))}

            <Link
              to="/portfolio"
              className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${location.pathname === '/portfolio' ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
            >
              Portfolio
            </Link>
            <Link
              to="/demo-project"
              className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${location.pathname === '/demo-project' ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
            >
              Demo Project
            </Link>
            <Link
              to="/careers"
              className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${location.pathname === '/careers' ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
            >
              Careers
            </Link>

            <button
              onClick={openForm}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50 active:scale-95"
            >
              Start a Project
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X size={24} className="animate-fadeIn" />
              ) : (
                <Menu size={24} className="animate-fadeIn" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${isOpen
            ? 'translate-y-0 opacity-100 max-h-screen'
            : '-translate-y-4 opacity-0 max-h-0 overflow-hidden'
          }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg rounded-b-2xl">
          <Link
            to="/"
            className="block px-3 py-2 hover:bg-blue-50 rounded-md transition-all duration-200 hover:translate-x-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 hover:bg-blue-50 rounded-md transition-all duration-200 hover:translate-x-2"
          >
            About
          </Link>

          {Object.entries(menuItems).map(([title, items]) => (
            <MobileDropdown key={title} title={title} items={items} />
          ))}

          <Link
            to="/portfolio"
            className="block px-3 py-2 hover:bg-blue-50 rounded-md transition-all duration-200 hover:translate-x-2"
          >
            Portfolio
          </Link>
          <Link
            to="/demo-project"
            className="block px-3 py-2 hover:bg-blue-50 rounded-md transition-all duration-200 hover:translate-x-2"
          >
            Demo Project
          </Link>
          <Link
            to="/careers"
            className="block px-3 py-2 hover:bg-blue-50 rounded-md transition-all duration-200 hover:translate-x-2"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="block w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;