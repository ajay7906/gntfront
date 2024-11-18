// // src/components/login/LoginForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', {
//         email,
//         password
//       });

//       if (response.data.token) {
//         // Store the token in localStorage
//         localStorage.setItem('adminToken', response.data.token);
//         // Redirect to admin panel
//         navigate('/admin/home');
//       }
//     } catch (err) {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
//         {error && (
//           <div className="mb-4 text-red-500 text-center">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2 text-sm font-medium">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block mb-2 text-sm font-medium">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded-lg"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;






































// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Loader2 } from 'lucide-react';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:5000/api/login', {
//         email,
//         password
//       });

//       if (response.data.token) {
//         localStorage.setItem('adminToken', response.data.token);
//         navigate('/admin/home');
//       }
//     } catch (err) {
//       setError('Invalid email or password');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 animate-fade-in">
//           Admin Login
//         </h2>
        
//         {error && (
//           <div className="mb-4 text-red-500 text-center animate-shake">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="transform transition-all duration-300 hover:translate-x-1">
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
//               required
//               disabled={isLoading}
//             />
//           </div>

//           <div className="transform transition-all duration-300 hover:translate-x-1">
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
//               required
//               disabled={isLoading}
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-all duration-300 
//               ${isLoading 
//                 ? 'bg-blue-400 cursor-not-allowed' 
//                 : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-0.5'
//               }
//             flex items-center justify-center space-x-2`}
//           >
//             {isLoading && (
//               <Loader2 className="w-5 h-5 animate-spin" />
//             )}
//             <span>{isLoading ? 'Logging in...' : 'Login'}</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;






























































import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('http://88.222.213.80:5000/api/v1/userAdmin', {
        email,
        password
      });

      if (response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
        navigate('/admin/home');
      }
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-teal-50 to-blue-100">
        <div className="absolute inset-0 bg-grid-slate/[0.1] bg-[size:20px_20px]" />
      </div>
      
      {/* Soft decorative circles */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-teal-200 rounded-full blur-xl opacity-40 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-40 animate-pulse" />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 
                     ">
          {/* Card header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 animate-fade-in">
              Admin Login
            </h2>
            <p className="text-gray-600 text-sm">
              Please enter your credentials to continue
            </p>
          </div>

          {error && (
            <div className="mb-6 text-red-600 text-center bg-red-100/80 py-2 rounded-lg backdrop-blur-sm animate-shake">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="transform transition-all duration-300 hover:translate-x-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-white/80 border border-gray-200 rounded-lg 
                         text-gray-800 placeholder-gray-500
                         focus:ring-2 focus:ring-sky-300 focus:border-transparent
                         transition-all duration-300"
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
            </div>

            <div className="transform transition-all duration-300 hover:translate-x-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-white/80 border border-gray-200 rounded-lg 
                         text-gray-800 placeholder-gray-500
                         focus:ring-2 focus:ring-sky-300 focus:border-transparent
                         transition-all duration-300"
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium 
                       transition-all duration-300 
                       ${isLoading 
                         ? 'bg-sky-300 cursor-not-allowed' 
                         : 'bg-sky-500 text-white hover:bg-sky-600 hover:shadow-lg transform hover:-translate-y-0.5'
                       }
                       flex items-center justify-center space-x-2`}
            >
              {isLoading && (
                <Loader2 className="w-5 h-5 animate-spin" />
              )}
              <span>{isLoading ? 'Logging in...' : 'Login'}</span>
            </button>

            {/* Optional: Add a "Forgot Password?" link */}
            <div className="text-center">
              <a href="#" className="text-sm text-sky-600 hover:text-sky-700 transition-colors">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;