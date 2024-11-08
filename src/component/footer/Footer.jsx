// // Footer.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-[#F2F2F2] text-black py-8  mt-8 border-t border-gray-600 pt-4 ">
//       <div className="container mx-auto px-4">
//         {/* Top Section */}
//         <div className="flex flex-wrap md:flex-nowrap justify-between">
//           {/* Company Info
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h2 className="text-2xl font-bold mb-4">GNT INDIA</h2>
//             <p className="text-gray-400">
//               We are committed to providing the best products and services to
//               our customers. Reach out to us for more information.
//             </p>
//           </div> */}

//           <div className="w-full md:w-1/3 p-4 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">Locations</h3>
//             <p className="text-gray-400 text-base leading-relaxed">
//             GNT INDIA B-96,Road NO. 9,Industrial Area, RaniBazar, Bikaner
//             </p>
//           </div>

//             {/* Services */}
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">Services</h3>
//             <ul>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline text-gray-400">
//                   Mobile App Development
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#about" className="hover:underline text-gray-400">
//                   Website Development
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline text-gray-400">
//                   E-Commerce Platforms
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#contact" className="hover:underline text-gray-400">
//                   Custom CRM Development
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#careers" className="hover:underline text-gray-400">
//                   UI/UX Design
//                 </a>
//               </li>
//             </ul>
//             </div>

//           {/* Links */}
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
//             <ul>
//               <li className="mb-2">
//                 <a href="#home" className="hover:underline text-gray-400">
//                   Home
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#about" className="hover:underline text-gray-400">
//                   About Us
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline text-gray-400">
//                   Blog
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <Link to="/contact"  className="hover:underline text-gray-400">
//                 Contact Us
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <a href="#careers" className="hover:underline text-gray-400">
//                   Careers
//                 </a>
//               </li>
//             </ul>
//              </div>

//           {/* Social Media */}
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors duration-200"
//                 aria-label="Facebook"
//               >
//                 <svg
//                   className="h-6 w-6 fill-current text-gray-400"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M22.675 0H1.325C.593 0 0 .6 0 1.337v21.326C0 23.4.593 24 1.325 24H12.82v-9.293H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.79 4.658-4.79 1.325 0 2.463.099 2.794.142v3.24h-1.918c-1.504 0-1.794.716-1.794 1.763v2.31h3.587l-.467 3.623h-3.12V24h6.116c.73 0 1.325-.6 1.325-1.337V1.337C24 .6 23.405 0 22.675 0z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors duration-200"
//                 aria-label="Twitter"
//               >
//                 <svg
//                   className="h-6 w-6 fill-current text-gray-400"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3.4a9.834 9.834 0 0 1-3.127 1.194 4.918 4.918 0 0 0-8.384 4.482A13.94 13.94 0 0 1 1.671 3.149a4.921 4.921 0 0 0 1.523 6.56A4.897 4.897 0 0 1 .96 9.289v.062a4.921 4.921 0 0 0 3.946 4.827 4.908 4.908 0 0 1-2.212.084 4.928 4.928 0 0 0 4.6 3.416A9.868 9.868 0 0 1 .586 19.855a13.89 13.89 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.014 0-.213-.005-.425-.015-.636A10.025 10.025 0 0 0 24 4.557z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors duration-200"
//                 aria-label="Instagram"
//               >
//                 <svg
//                   className="h-6 w-6 fill-current text-gray-400"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.413a4.92 4.92 0 0 1 1.753 1.004c.512.493.9 1.088 1.194 1.753.173.458.359 1.258.413 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.413 2.428a4.92 4.92 0 0 1-1.004 1.753 4.92 4.92 0 0 1-1.753 1.004c-.458.173-1.258.359-2.428.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.413a4.92 4.92 0 0 1-1.753-1.004 4.92 4.92 0 0 1-1.004-1.753c-.173-.458-.359-1.258-.413-2.428C2.175 15.586 2.163 15.206 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.413-2.428a4.92 4.92 0 0 1 1.004-1.753 4.92 4.92 0 0 1 1.753-1.004c.458-.173 1.258-.359 2.428-.413C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.346.014 7.05.072 5.737.13 4.687.337 3.868.66a7.184 7.184 0 0 0-2.583 1.558A7.184 7.184 0 0 0 .66 3.868C.337 4.687.13 5.737.072 7.05.014 8.346 0 8.756 0 12c0 3.244.014 3.654.072 4.95.058 1.313.265 2.363.588 3.182a7.184 7.184 0 0 0 1.558 2.583 7.184 7.184 0 0 0 2.583 1.558c.82.323 1.87.53 3.182.588C8.346 23.986 8.756 24 12 24c3.244 0 3.654-.014 4.95-.072 1.313-.058 2.363-.265 3.182-.588a7.184 7.184 0 0 0 2.583-1.558 7.184 7.184 0 0 0 1.558-2.583c.323-.82.53-1.87.588-3.182.058-1.296.072-1.706.072-4.95 0-3.244-.014-3.654-.072-4.95-.058-1.313-.265-2.363-.588-3.182a7.184 7.184 0 0 0-1.558-2.583 7.184 7.184 0 0 0-2.583-1.558c-.82-.323-1.87-.53-3.182-.588C15.654.014 15.244 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1 0-2.881 1.44 1.44 0 0 1 0 2.881z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors duration-200"
//                 aria-label="LinkedIn"
//                 >
//                 <svg
//                     className="h-6 w-6 fill-current text-gray-400"
//                     viewBox="0 0 24 24"
//                 >
//                     <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.27V1.73C24 .774 23.21 0 22.23 0zM7.09 20.451H3.56V9.047h3.53v11.404zM5.325 7.691a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM20.451 20.451h-3.53v-5.604c0-1.336-.026-3.058-1.865-3.058-1.866 0-2.15 1.458-2.15 2.963v5.699h-3.53V9.047h3.39v1.558h.05c.473-.897 1.63-1.842 3.353-1.842 3.586 0 4.247 2.36 4.247 5.43v6.258z" />
//                 </svg>
//                 </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-8 border-t border-gray-600 pt-4 text-center">
//           <p className="text-gray-400">&copy; {new Date().getFullYear()} GNTINDIA. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;














































// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8 mt-8 border-t border-gray-600 pt-4">
//       <div className="container mx-auto px-4">
//         {/* Top Section */}
//         <div className="flex flex-wrap md:flex-nowrap justify-between">
//           <div className="w-full md:w-1/3 p-4 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">Locations</h3>
//             <p className="text-gray-300 text-base leading-relaxed">
//               GNT INDIA B-96,Road NO. 9,Industrial Area, RaniBazar, Bikaner
//             </p>
//           </div>

//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">Services</h3>
//             <ul>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline text-gray-300">
//                   Mobile App Development
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#about" className="hover:underline text-gray-300">
//                   Website Development
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline text-gray-300">
//                   E-Commerce Platforms
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#contact" className="hover:underline text-gray-300">
//                   Custom CRM Development
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#careers" className="hover:underline text-gray-300">
//                   UI/UX Design
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
//             <ul>
//               <li className="mb-2">
//                 <a href="#home" className="hover:underline text-gray-300">
//                   Home
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#about" className="hover:underline text-gray-300">
//                   About Us
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline text-gray-300">
//                   Blog
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <Link to="/contact" className="hover:underline text-gray-300">
//                   Contact Us
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <a href="#careers" className="hover:underline text-gray-300">
//                   Careers
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="hover:text-gray-100 transition-colors duration-200"
//                 aria-label="Facebook"
//               >
//                 <svg
//                   className="h-6 w-6 fill-current text-gray-400 hover:text-white"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M22.675 0H1.325C.593 0 0 .6 0 1.337v21.326C0 23.4.593 24 1.325 24H12.82v-9.293H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.79 4.658-4.79 1.325 0 2.463.099 2.794.142v3.24h-1.918c-1.504 0-1.794.716-1.794 1.763v2.31h3.587l-.467 3.623h-3.12V24h6.116c.73 0 1.325-.6 1.325-1.337V1.337C24 .6 23.405 0 22.675 0z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-gray-100 transition-colors duration-200"
//                 aria-label="Twitter"
//               >
//                 <svg
//                   className="h-6 w-6 fill-current text-gray-400 hover:text-white"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3.4a9.834 9.834 0 0 1-3.127 1.194 4.918 4.918 0 0 0-8.384 4.482A13.94 13.94 0 0 1 1.671 3.149a4.921 4.921 0 0 0 1.523 6.56A4.897 4.897 0 0 1 .96 9.289v.062a4.921 4.921 0 0 0 3.946 4.827 4.908 4.908 0 0 1-2.212.084 4.928 4.928 0 0 0 4.6 3.416A9.868 9.868 0 0 1 .586 19.855a13.89 13.89 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.014 0-.213-.005-.425-.015-.636A10.025 10.025 0 0 0 24 4.557z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-gray-100 transition-colors duration-200"
//                 aria-label="Instagram"
//               >
//                 <svg
//                   className="h-6 w-6 fill-current text-gray-400 hover:text-white"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.413a4.92 4.92 0 0 1 1.753 1.004c.512.493.9 1.088 1.194 1.753.173.458.359 1.258.413 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.413 2.428a4.92 4.92 0 0 1-1.004 1.753 4.92 4.92 0 0 1-1.753 1.004c-.458.173-1.258.359-2.428.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.413a4.92 4.92 0 0 1-1.753-1.004 4.92 4.92 0 0 1-1.004-1.753c-.173-.458-.359-1.258-.413-2.428C2.175 15.586 2.163 15.206 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.413-2.428a4.92 4.92 0 0 1 1.004-1.753 4.92 4.92 0 0 1 1.753-1.004c.458-.173 1.258-.359 2.428-.413C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.346.014 7.05.072 5.737.13 4.687.337 3.868.66a7.184 7.184 0 0 0-2.583 1.558A7.184 7.184 0 0 0 .66 3.868C.337 4.687.13 5.737.072 7.05.014 8.346 0 8.756 0 12c0 3.244.014 3.654.072 4.95.058 1.313.265 2.363.588 3.182a7.184 7.184 0 0 0 1.558 2.583 7.184 7.184 0 0 0 2.583 1.558c.82.323 1.87.53 3.182.588C8.346 23.986 8.756 24 12 24c3.244 0 3.654-.014 4.95-.072 1.313-.058 2.363-.265 3.182-.588a7.184 7.184 0 0 0 2.583-1.558 7.184 7.184 0 0 0 1.558-2.583c.323-.82.53-1.87.588-3.182.058-1.296.072-1.706.072-4.95 0-3.244-.014-3.654-.072-4.95-.058-1.313-.265-2.363-.588-3.182a7.184 7.184 0 0 0-1.558-2.583 7.184 7.184 0 0 0-2.583-1.558c-.82-.323-1.87-.53-3.182-.588C15.654.014 15.244 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1 0-2.881 1.44 1.44 0 0 1 0 2.881z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-gray-100 transition-colors duration-200"
//                 aria-label="LinkedIn"
//               >
//                 <svg
//                   className="h-6 w-6 fill-current text-gray-400 hover:text-white"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.27V1.73C24 .774 23.21 0 22.23 0zM7.09 20.451H3.56V9.047h3.53v11.404zM5.325 7.691a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM20.451 20.451h-3.53v-5.604c0-1.336-.026-3.058-1.865-3.058-1.866 0-2.15 1.458-2.15 2.963v5.699h-3.53V9.047h3.39v1.558h.05c.473-.897 1.63-1.842 3.353-1.842 3.586 0 4.247 2.36 4.247 5.43v6.258z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-8 border-t border-gray-600 pt-4 text-center">
//           <p className="text-gray-300">&copy; {new Date().getFullYear()} GNTINDIA. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
























































// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-cover bg-center text-white py-8 mt-8 border-t border-gray-600 pt-4" style={{
//       backgroundImage: 'url("/path/to/your/background-image.jpg")'
//     }}>
//       <div className="container mx-auto px-4 bg-black bg-opacity-75 p-6">
//         {/* Top Section */}
//         <div className="flex flex-wrap md:flex-nowrap justify-between">
//           <div className="w-full md:w-1/3 p-4 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">Locations</h3>
//             <p className="text-gray-300 text-base leading-relaxed">
//               GNT INDIA B-96,Road NO. 9,Industrial Area, RaniBazar, Bikaner
//             </p>
//           </div>

//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">Services</h3>
//             <ul>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline text-gray-300">
//                   Mobile App Development
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#about" className="hover:underline text-gray-300">
//                   Website Development
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline text-gray-300">
//                   E-Commerce Platforms
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#contact" className="hover:underline text-gray-300">
//                   Custom CRM Development
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#careers" className="hover:underline text-gray-300">
//                   UI/UX Design
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
//             <ul>
//               <li className="mb-2">
//                 <a href="#home" className="hover:underline text-gray-300">
//                   Home
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#about" className="hover:underline text-gray-300">
//                   About Us
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:underline text-gray-300">
//                   Blog
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <Link to="/contact" className="hover:underline text-gray-300">
//                   Contact Us
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <a href="#careers" className="hover:underline text-gray-300">
//                   Careers
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="hover:text-gray-100 transition-colors duration-200"
//                 aria-label="Facebook"
//               >
//                 <svg
//                   className="h-6 w-6 fill-current text-gray-400 hover:text-white"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M22.675 0H1.325C.593 0 0 .6 0 1.337v21.326C0 23.4.593 24 1.325 24H12.82v-9.293H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.79 4.658-4.79 1.325 0 2.463.099 2.794.142v3.24h-1.918c-1.504 0-1.794.716-1.794 1.763v2.31h3.587l-.467 3.623h-3.12V24h6.116c.73 0 1.325-.6 1.325-1.337V1.337C24 .6 23.405 0 22.675 0z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-gray-100 transition-colors duration-200"
//                 aria-label="Twitter"
//               >
//                 <svg
//                   className="h-6 w-6 fill-current text-gray-400 hover:text-white"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3.4a9.834 9.834 0 0 1-3.127 1.194 4.918 4.918 0 0 0-8.384 4.482A13.94 13.94 0 0 1 1.671 3.149a4.921 4.921 0 0 0 1.523 6.56A4.897 4.897 0 0 1 .96 9.289v.062a4.921 4.921 0 0 0 3.946 4.827 4.908 4.908 0 0 1-2.212.084 4.928 4.928 0 0 0 4.6 3.416A9.868 9.868 0 0 1 .586 19.855a13.89 13.89 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.014 0-.213-.005-.425-.015-.636A10.025 10.025 0 0 0 24 4.557z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-gray-100 transition-colors duration-200"
//                 aria-label="Instagram"
//               >
//                 <svg
//                   className="h-6 w-6 fill-current text-gray-400 hover:text-white"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.413a4.92 4.92 0 0 1 1.753 1.004c.512.493.9 1.088 1.194 1.753.173.458.359 1.258.413 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.413 2.428a4.92 4.92 0 0 1-1.004 1.753 4.92 4.92 0 0 1-1.753 1.004c-.458.173-1.258.359-2.428.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.413a4.92 4.92 0 0 1-1.753-1.004 4.92 4.92 0 0 1-1.004-1.753c-.173-.458-.359-1.258-.413-2.428C2.175 15.586 2.163 15.206 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.413-2.428a4.92 4.92 0 0 1 1.004-1.753 4.92 4.92 0 0 1 1.753-1.004c.458-.173 1.258-.359 2.428-.413C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.346.014 7.05.072 5.737.13 4.687.337 3.868.66a7.184 7.184 0 0 0-2.583 1.558A7.184 7.184 0 0 0 .66 3.868C.337 4.687.13 5.737.072 7.05.014 8.346 0 8.756 0 12c0 3.244.014 3.654.072 4.95.058 1.313.265 2.363.588 3.182a7.184 7.184 0 0 0 1.558 2.583 7.184 7.184 0 0 0 2.583 1.558c.82.323 1.87.53 3.182.588C8.346 23.986 8.756 24 12 24c3.244 0 3.654-.014 4.95-.072 1.313-.058 2.363-.265 3.182-.588a7.184 7.184 0 0 0 2.583-1.558 7.184 7.184 0 0 0 1.558-2.583c.323-.82.53-1.87.588-3.182.058-1.296.072-1.706.072-4.95 0-3.244-.014-3.654-.072-4.95-.058-1.313-.265-2.363-.588-3.182a7.184 7.184 0 0 0-1.558-2.583 7.184 7.184 0 0 0-2.583-1.558c-.82-.323-1.87-.53-3.182-.588C15.654.014 15.244 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1 0-2.881 1.44 1.44 0 0 1 0 2.881z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-gray-100 transition-colors duration-200"
//                 aria-label="LinkedIn"
//               >
//                 <svg
//                   className="h-6 w-6 fill-current text-gray-400 hover:text-white"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.27V1.73C24 .774 23.21 0 22.23 0zM7.09 20.451H3.56V9.047h3.53v11.404zM5.325 7.691a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM20.451 20.451h-3.53v-5.604c0-1.336-.026-3.058-1.865-3.058-1.866 0-2.15 1.458-2.15 2.963v5.699h-3.53V9.047h3.39v1.558h.05c.473-.897 1.63-1.842 3.353-1.842 3.586 0 4.247 2.36 4.247 5.43v6.258z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-8 border-t border-gray-600 pt-4 text-center">
//           <p className="text-gray-300">&copy; {new Date().getFullYear()} GNTINDIA. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;























































import React from 'react';
import { Link } from 'react-router-dom';
import FooterImg from '../../assets/images/foot.png'
const Footer = () => {
  return (
    <footer className="bg-cover bg-center text-white  mt-8 border-t border-gray-600   " style={{
      backgroundImage: `url(${FooterImg})`
    }}>
      <div className="container mx-auto  bg-black bg-opacity-75 ">
        {/* Top Section */}
        <div className="flex flex-wrap md:flex-nowrap justify-between pt-4 ">
          <div className="w-full md:w-1/3 p-4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Locations</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              GNT INDIA B-96,Road NO. 9,Industrial Area, RaniBazar, Bikaner
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline text-gray-300">
                  Mobile App Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:underline text-gray-300">
                  Website Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-gray-300">
                  E-Commerce Platforms
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:underline text-gray-300">
                  Custom CRM Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#careers" className="hover:underline text-gray-300">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:underline text-gray-300">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:underline text-gray-300">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-gray-300">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:underline text-gray-300">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <a href="#careers" className="hover:underline text-gray-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-gray-100 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6 fill-current text-gray-400 hover:text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .6 0 1.337v21.326C0 23.4.593 24 1.325 24H12.82v-9.293H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.79 4.658-4.79 1.325 0 2.463.099 2.794.142v3.24h-1.918c-1.504 0-1.794.716-1.794 1.763v2.31h3.587l-.467 3.623h-3.12V24h6.116c.73 0 1.325-.6 1.325-1.337V1.337C24 .6 23.405 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-100 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6 fill-current text-gray-400 hover:text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3.4a9.834 9.834 0 0 1-3.127 1.194 4.918 4.918 0 0 0-8.384 4.482A13.94 13.94 0 0 1 1.671 3.149a4.921 4.921 0 0 0 1.523 6.56A4.897 4.897 0 0 1 .96 9.289v.062a4.921 4.921 0 0 0 3.946 4.827 4.908 4.908 0 0 1-2.212.084 4.928 4.928 0 0 0 4.6 3.416A9.868 9.868 0 0 1 .586 19.855a13.89 13.89 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.014 0-.213-.005-.425-.015-.636A10.025 10.025 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-100 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6 fill-current text-gray-400 hover:text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.413a4.92 4.92 0 0 1 1.753 1.004c.512.493.9 1.088 1.194 1.753.173.458.359 1.258.413 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.413 2.428a4.92 4.92 0 0 1-1.004 1.753 4.92 4.92 0 0 1-1.753 1.004c-.458.173-1.258.359-2.428.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.413a4.92 4.92 0 0 1-1.753-1.004 4.92 4.92 0 0 1-1.004-1.753c-.173-.458-.359-1.258-.413-2.428C2.175 15.586 2.163 15.206 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.413-2.428a4.92 4.92 0 0 1 1.004-1.753 4.92 4.92 0 0 1 1.753-1.004c.458-.173 1.258-.359 2.428-.413C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.346.014 7.05.072 5.737.13 4.687.337 3.868.66a7.184 7.184 0 0 0-2.583 1.558A7.184 7.184 0 0 0 .66 3.868C.337 4.687.13 5.737.072 7.05.014 8.346 0 8.756 0 12c0 3.244.014 3.654.072 4.95.058 1.313.265 2.363.588 3.182a7.184 7.184 0 0 0 1.558 2.583 7.184 7.184 0 0 0 2.583 1.558c.82.323 1.87.53 3.182.588C8.346 23.986 8.756 24 12 24c3.244 0 3.654-.014 4.95-.072 1.313-.058 2.363-.265 3.182-.588a7.184 7.184 0 0 0 2.583-1.558 7.184 7.184 0 0 0 1.558-2.583c.323-.82.53-1.87.588-3.182.058-1.296.072-1.706.072-4.95 0-3.244-.014-3.654-.072-4.95-.058-1.313-.265-2.363-.588-3.182a7.184 7.184 0 0 0-1.558-2.583 7.184 7.184 0 0 0-2.583-1.558c-.82-.323-1.87-.53-3.182-.588C15.654.014 15.244 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1 0-2.881 1.44 1.44 0 0 1 0 2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-100 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6 fill-current text-gray-400 hover:text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.27V1.73C24 .774 23.21 0 22.23 0zM7.09 20.451H3.56V9.047h3.53v11.404zM5.325 7.691a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM20.451 20.451h-3.53v-5.604c0-1.336-.026-3.058-1.865-3.058-1.866 0-2.15 1.458-2.15 2.963v5.699h-3.53V9.047h3.39v1.558h.05c.473-.897 1.63-1.842 3.353-1.842 3.586 0 4.247 2.36 4.247 5.43v6.258z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} GNTINDIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;