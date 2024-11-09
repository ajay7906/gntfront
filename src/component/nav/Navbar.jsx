


















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // For mobile menu
//   const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown

//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   return (
//     <nav className="bg-[#F2F2F2] text-black left-0 right-0 shadow-md py-2 px-2 fixed top-0 w-full z-50">
         
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <div className="flex-shrink-0">
//             <a href="/" className="text-2xl font-bold">
//             <img src="/src/assets/images/Logo.png" alt="Logo" 
//             className="w-[66px] h-[66px] object-contain rounded-full" srcset="" />
//             </a>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4 items-center">
            
//             <Link to="/"  className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
//             Home
//             </Link>

//             <Link to="/about"  className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
//               About
//             </Link>
            
          

//             <div className="relative group">
//               {/* Services Dropdown */}
//               <button
//                 className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none group-hover:bg-blue-500"
//               >
//                 Services
//               </button>
//               <div className="absolute bg-white text-black rounded-md mt-2 w-48 shadow-lg hidden group-hover:block">
//                 <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Custom Software Development</a>
//                 <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Social Media Management</a>
//                 <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">CRM</a>
//                 <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cloud Solutions</a>
//                 <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Web Development</a>
//                 <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">AI-Powered Tools</a>
//                 <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">UI/UX Design</a>
//               </div>
//             </div>

//             <div className="relative group">
//               {/* Products Dropdown */}
//               <button
//                 className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none group-hover:bg-blue-500"
//               >
//                 Products
//               </button>
//               <div className="absolute bg-white text-black rounded-md mt-2 w-48 shadow-lg hidden group-hover:block">
//                   <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">WhatsApp API</a>
//                   <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">ERP Solutions </a>
//                   <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">E-Commerce Platforms</a>
//                   <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cybersecurity Solutions</a>
//                   <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Digital Marketing Tools</a>
//               </div>
//             </div>

//             <div className="relative group">
//               {/* Blog Dropdown */}
//               <button
//                 className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none group-hover:bg-blue-500"
//               >
//                 Blog
//               </button>
//               <div className="absolute bg-white text-black rounded-md mt-2 w-48 shadow-lg hidden group-hover:block">
//                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Educational Content</a>
//               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Regular Updates</a>
//               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">SEO Benefits</a>
//               </div>
//             </div>

//             <a href="#protfolio" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
//               Portfolio
//             </a>

//             <a href="#careers" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
//                 Careers
//             </a>

//             <a href="#careers" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
//               Project Demo
//             </a>

//             <button class="bg-[#2E338C] hover:bg-indigo-500 text-white px-3 py-2 rounded-md font-medium">
//                 Start a Project
//             </button>

//         </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="text-[#260101] hover:text-gray-500 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-[#F2F2F2]">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

//             <Link to="/"  className="block px-3 py-2 rounded-md text-base font-medium">
//             Home
//             </Link>

//             <Link to="/about"  className="block px-3 py-2 rounded-md text-base font-medium">
//             About
//             </Link>

//             {/* Mobile Services Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => toggleDropdown('services')}
//                 className="block w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none"
//               >
//                 Services
//               </button>
//               {activeDropdown === 'services' && (
//                 <div className="pl-5">
//                   <a href="#design" className="block px-3 py-2 text-sm">
//                   Custom Software Development
//                   </a>
//                   <a href="#development" className="block px-3 py-2 text-sm">
//                   Social Media Management
//                   </a>
//                   <a href="#marketing" className="block px-3 py-2 text-sm">
//                   Cloud Solutions
//                   </a>
//                   <a href="#marketing" className="block px-3 py-2 text-sm">
//                   Web Development
//                   </a>
//                   <a href="#marketing" className="block px-3 py-2 text-sm">
//                   CRM
//                   </a>
//                   <a href="#marketing" className="block px-3 py-2 text-sm">
//                   AI-Powered Tools
//                   </a>
//                   <a href="#marketing" className="block px-3 py-2 text-sm">
//                   UI/UX Design
//                   </a>
//                   </div>
//               )}
//             </div>

//             {/* Mobile products Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => toggleDropdown('products')}
//                 className="block w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none"
//               >
//                 Products
//               </button>
//               {activeDropdown === 'products' && (
//                 <div className="pl-5">
//                   <a href="#design" className="block px-3 py-2 text-sm">
//                   WhatsApp API
//                   </a>
//                   <a href="#development" className="block px-3 py-2 text-sm">
//                   ERP Solutions
//                   </a>
//                   <a href="#marketing" className="block px-3 py-2 text-sm">
//                   E-Commerce Platforms
//                   </a>
//                   <a href="#marketing" className="block px-3 py-2 text-sm">
//                   Cybersecurity Solutions
//                   </a>
//                   <a href="#marketing" className="block px-3 py-2 text-sm">
//                   Digital Marketing Tools
//                   </a>
//                 </div>
//               )}
//             </div>

//              {/* Mobile Blog Dropdown */}
//              <div className="relative">
//               <button
//                 onClick={() => toggleDropdown('blog')}
//                 className="block w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none"
//               >
//                 Blog
//               </button>
//               {activeDropdown === 'blog' && (
//                 <div className="pl-5">
//                   <a href="#design" className="block px-3 py-2 text-sm">
//                   Educational Content
//                   </a>
//                   <a href="#development" className="block px-3 py-2 text-sm">
//                   Regular Updates
//                   </a>
//                   <a href="#marketing" className="block px-3 py-2 text-sm">
//                   SEO Benefits
//                   </a>
//                 </div>
//               )}
//             </div>

//             <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium">
//             Portfolio
//             </a>

//             <a href="#careers" className="block px-3 py-2 rounded-md text-base font-medium">
//             Careers
//             </a>

//             <a href="#project" className="block px-3 py-2 rounded-md text-base font-medium">
//             Project Demo
//             </a>

//             <button class="bg-[#2E338C] hover:bg-indigo-500 text-white px-3 py-2 rounded-md font-medium">
//                 Start a Project
//             </button>

//           </div>
//         </div> 
//       )}
//     </nav>
//   );
// };

// export default Navbar;







































// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import Logo from '../../assets/images/Logo.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   //<a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">WhatsApp API</a>
//  // <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Educational Content</a>
//   //               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Regular Updates</a>
//   //               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">SEO Benefits</a>
//   const menuItems = {
//     Services: [
//       { title: 'Custom Software Development', path: '/services/web-development' },
//       { title: 'Social Media Management', path: '/services/mobile-development' },
//       { title: 'CRM', path: '/services/ui-ux-design' },
//       { title: 'Cloud Solutions', path: '/services/cloud-services' },
//       { title: 'Web Development', path: '/services/cloud-services' },
//       { title: 'AI-Powered Tools', path: '/services/cloud-services' },
//       { title: 'UI/UX Design', path: '/services/cloud-services' },
//     ],
//     Products: [
//       { title: 'ERP Solutions', path: '/products/ecommerce' },
//       { title: 'E-Commerce Platforms', path: '/products/cms' },
//       { title: 'Cybersecurity Solutions', path: '/products/analytics' },
//       { title: 'Digital Marketing Tools', path: '/products/marketing' },
//     ],
//     Blog: [
//       { title: 'WhatsApp API', path: '/blog/tech-news' },
//       { title: 'Educational Content', path: '/blog/design-trends' },
//       { title: 'Regular Updates', path: '/blog/development-tips' },
//       { title: 'SEO Benefits', path: '/blog/case-studies' },
//     ],
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const DropdownContent = ({ items }) => (
//     <div className="absolute top-full left-0 w-56 mt-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-blue-50">
//       <div className="py-2">
//         {items.map((item, index) => (
//           <Link
//             key={index}
//             to={item.path}
//             className="block group/item relative"
//           >
//             <div className="px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300">
//               <span className="font-medium text-gray-700 group-hover/item:text-blue-600 transition-colors duration-200 relative">
//                 {item.title}
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 group-hover/item:w-full transition-all duration-300"></span>
//               </span>
//             </div>
//             <div className="absolute left-0 top-0 w-1 h-0 bg-blue-600 group-hover/item:h-full transition-all duration-200"></div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );

//   const MobileDropdown = ({ title, items }) => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
//     return (
//       <div className="space-y-1">
//         <button
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           className="w-full flex items-center justify-between px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300 rounded-lg"
//         >
//           <span className="font-medium">{title}</span>
//           <ChevronDown
//             size={20}
//             className={`transform transition-transform duration-300 ${
//               isDropdownOpen ? 'rotate-180 text-blue-600' : ''
//             }`}
//           />
//         </button>
//         <div
//           className={`transition-all duration-300 ${
//             isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
//           }`}
//         >
//           {items.map((item, index) => (
//             <Link
//               key={index}
//               to={item.path}
//               className="block pl-6 pr-4 py-2 hover:bg-blue-50 hover:pl-8 transition-all duration-300 text-gray-700 hover:text-blue-600"
//             >
//               {item.title}
//             </Link>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <nav 
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         scrolled 
//           ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
//           : 'bg-transparent py-4'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           {/* Animated Logo */}
//           <Link to="/" className="flex-shrink-0 flex items-center relative group">
//             <img 
//               src={Logo} 
//               alt="Company Logo"
//               className={`
//                 transition-all duration-500 ease-in-out
//                 transform group-hover:scale-110
//                 ${scrolled ? 'w-56 h-8' : 'w-40 h-10'}
//                 object-contain
//                 filter hover:brightness-110
//                 animate-fadeIn
//               `}
//             />
//             <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500" />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link 
//               to="/"
//               className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${
//                 location.pathname === '/' ? 'text-blue-600' : 'hover:text-blue-600'
//               }`}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/about"
//               className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${
//                 location.pathname === '/about' ? 'text-blue-600' : 'hover:text-blue-600'
//               }`}
//             >
//               About
//             </Link>
            
//             {/* Dropdown Menus */}
//             {Object.entries(menuItems).map(([title, items]) => (
//               <div key={title} className="relative group">
//                 <button className="flex items-center space-x-1 hover:text-blue-600 transition-all duration-200 font-medium group">
//                   <span>{title}</span>
//                   <ChevronDown size={16} className="transform group-hover:rotate-180 transition-transform duration-300" />
//                 </button>
//                 <DropdownContent items={items} />
//               </div>
//             ))}

//             <Link 
//               to="/portfolio"
//               className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${
//                 location.pathname === '/portfolio' ? 'text-blue-600' : 'hover:text-blue-600'
//               }`}
//             >
//               Portfolio
//             </Link>
//             <Link 
//               to="/careers"
//               className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${
//                 location.pathname === '/careers' ? 'text-blue-600' : 'hover:text-blue-600'
//               }`}
//             >
//               Careers
//             </Link>
//             <Link 
//               to="/contact"
//               className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50 active:scale-95"
//             >
//               Start a Project
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 <X size={24} className="animate-fadeIn" />
//               ) : (
//                 <Menu size={24} className="animate-fadeIn" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out transform ${
//           isOpen
//             ? 'translate-y-0 opacity-100 max-h-screen'
//             : '-translate-y-4 opacity-0 max-h-0 overflow-hidden'
//         }`}
//       >
//         <div className="px-4 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg rounded-b-2xl">
//           <Link 
//             to="/"
//             className="block px-3 py-2 hover:bg-blue-50 rounded-md transition-all duration-200 hover:translate-x-2"
//           >
//             Home
//           </Link>
//           <Link 
//             to="/about"
//             className="block px-3 py-2 hover:bg-blue-50 rounded-md transition-all duration-200 hover:translate-x-2"
//           >
//             About
//           </Link>
          
//           {/* Mobile Dropdowns */}
//           {Object.entries(menuItems).map(([title, items]) => (
//             <MobileDropdown key={title} title={title} items={items} />
//           ))}

//           <Link 
//             to="/portfolio"
//             className="block px-3 py-2 hover:bg-blue-50 rounded-md transition-all duration-200 hover:translate-x-2"
//           >
//             Portfolio
//           </Link>
//           <Link 
//             to="/careers"
//             className="block px-3 py-2 hover:bg-blue-50 rounded-md transition-all duration-200 hover:translate-x-2"
//           >
//             Careers
//           </Link>
//           <Link 
//             to="/contact"
//             className="block w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
//           >
//             Start a Project
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





















































import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../../assets/images/Logo.png';

/**
 * Navbar Component
 * A responsive navigation bar with dropdown menus and mobile support
 * Features:
 * - Responsive design (mobile/desktop)
 * - Animated dropdowns
 * - Scroll-based styling
 * - Hover effects
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // Controls mobile menu visibility
  const [scrolled, setScrolled] = useState(false);  // Tracks scroll position for styling
  const location = useLocation();  // Current route location

  // Navigation menu structure
  const menuItems = {
    Services: [
      { title: 'Custom Software Development', path: '/services/web-development' },
      { title: 'Social Media Management', path: '/services/mobile-development' },
      { title: 'CRM', path: '/services/ui-ux-design' },
      { title: 'Cloud Solutions', path: '/services/cloud-services' },
      { title: 'Web Development', path: '/services/cloud-services' },
      { title: 'AI-Powered Tools', path: '/services/cloud-services' },
      { title: 'UI/UX Design', path: '/services/cloud-services' },
    ],
    Products: [
      { title: 'ERP Solutions', path: '/products/ecommerce' },
      { title: 'E-Commerce Platforms', path: '/products/cms' },
      { title: 'Cybersecurity Solutions', path: '/products/analytics' },
      { title: 'Digital Marketing Tools', path: '/products/marketing' },
    ],
    Blog: [
      { title: 'WhatsApp API', path: '/blog/tech-news' },
      { title: 'Educational Content', path: '/blog/design-trends' },
      { title: 'Regular Updates', path: '/blog/development-tips' },
      { title: 'SEO Benefits', path: '/blog/case-studies' },
    ],
  };

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop dropdown menu component
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

  // Mobile dropdown menu component
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
            className={`transform transition-transform duration-300 ${
              isDropdownOpen ? 'rotate-180 text-blue-600' : ''
            }`}
          />
        </button>
        <div
          className={`transition-all duration-300 ${
            isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Animated Logo with increased size */}
          <Link to="/" className="flex-shrink-0 flex items-center relative group">
            <img 
              src={Logo} 
              alt="Company Logo"
              className={`
                transition-all duration-500 ease-in-out
                transform group-hover:scale-110
                 ${scrolled ? 'w-96 h-16' : 'w-58 h-16'} 
                
                object-contain
                filter hover:brightness-110
                animate-fadeIn
              `}
            />
            {/* Logo hover effect gradient */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500" />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home and About links */}
            <Link 
              to="/"
              className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${
                location.pathname === '/' ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${
                location.pathname === '/about' ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
            >
              About
            </Link>
            
            {/* Dynamic Dropdown Menus */}
            {Object.entries(menuItems).map(([title, items]) => (
              <div key={title} className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-600 transition-all duration-200 font-medium group">
                  <span>{title}</span>
                  <ChevronDown size={16} className="transform group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <DropdownContent items={items} />
              </div>
            ))}

            {/* Portfolio and Careers links */}
            <Link 
              to="/portfolio"
              className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${
                location.pathname === '/portfolio' ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/careers"
              className={`nav-link transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${
                location.pathname === '/careers' ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
            >
              Careers
            </Link>

            {/* CTA Button */}
            <Link 
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50 active:scale-95"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
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

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen
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
          
          {/* Mobile Dropdown Menus */}
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

