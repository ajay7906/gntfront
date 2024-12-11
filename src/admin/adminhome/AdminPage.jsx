// import React, { useState } from 'react';
// import {
//   Home,
//   Users,
//   BarChart3,
//   Settings,
//   Bell,
//   Search,
//   Menu,
//   X,
//   ChevronDown,
//   BarChart2,
//   Calendar,
//   ImagePlus,
//   MessageSquare,
//   DollarSign,
//   Activity
// } from 'lucide-react';

// // Rest of components remain the same, just replacing FileChartColumn with BarChart2
// const AnimatedBubble = ({ color, size, duration, delay }) => (
//   <div
//     className="absolute rounded-full opacity-30 blur-xl"
//     style={{
//       backgroundColor: color,
//       width: size,
//       height: size,
//       animation: `float ${duration}s infinite ease-in-out ${delay}s`,
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//     }}
//   />
// );

// const DashboardCard = ({ icon: Icon, title, value, change, color }) => (
//   <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300 group">
//     <div className="flex items-center justify-between">
//       <div>
//         <p className="text-gray-400 mb-1 text-sm">{title}</p>
//         <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
//         <p className={`text-sm ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
//           {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last month
//         </p>
//       </div>
//       <div className={`p-4 rounded-lg ${color} group-hover:scale-110 transition-transform duration-300`}>
//         <Icon size={24} className="text-white" />
//       </div>
//     </div>
//   </div>
// );

// const AdminPanel = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [currentPage, setCurrentPage] = useState('dashboard');
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   const menuItems = [
//     { id: 'dashboard', icon: Home, label: 'Dashboard' },
//     { id: 'users', icon: Users, label: 'Users' },
//     { id: 'blog', icon: BarChart3, label: 'Blog' },
//     { id: 'career', icon: BarChart2, label: 'Career' },
//     { id: 'homeImageSlider', icon: ImagePlus, label: 'Images' },
//     { id: 'calendar', icon: Calendar, label: 'Calendar' },
//     { id: 'messages', icon: MessageSquare, label: 'Messages' },
//     { id: 'settings', icon: Settings, label: 'Settings' },
//   ];

//   const dashboardCards = [
//     { icon: Users, title: 'Total Users', value: '8,249', change: 12.5, color: 'bg-blue-500' },
//     { icon: DollarSign, title: 'Revenue', value: '$23,456', change: 8.2, color: 'bg-green-500' },
//     { icon: Activity, title: 'Active Sessions', value: '1,234', change: -3.8, color: 'bg-purple-500' },
//     { icon: BarChart2, title: 'Total Products', value: '456', change: 5.3, color: 'bg-orange-500' },
//   ];

//   const renderPageContent = () => {
//     switch (currentPage) {
//       case 'dashboard':
//         return (
//           <div className="space-y-6">
//             <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//               {dashboardCards.map((card, index) => (
//                 <DashboardCard key={index} {...card} />
//               ))}
//             </div>

//             <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
//               <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//                 <h3 className="text-xl font-bold text-white mb-4">Activity Overview</h3>
//                 <div className="h-64 bg-white/5 rounded-lg animate-pulse" />
//               </div>
//               <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//                 <h3 className="text-xl font-bold text-white mb-4">Revenue Trends</h3>
//                 <div className="h-64 bg-white/5 rounded-lg animate-pulse" />
//               </div>
//             </div>

//             <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//               <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
//               <div className="space-y-4">
//                 {[1, 2, 3].map((item) => (
//                   <div key={item} className="flex items-center p-4 bg-white/5 rounded-lg">
//                     <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse" />
//                     <div className="ml-4">
//                       <div className="h-4 w-48 bg-white/10 rounded animate-pulse" />
//                       <div className="h-3 w-32 bg-white/10 rounded mt-2 animate-pulse" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );
//       default:
//         return (
//           <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//             <h2 className="text-2xl font-bold text-white mb-4">{currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}</h2>
//             <div className="h-96 bg-white/5 rounded-lg animate-pulse" />
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
//       <div className="fixed inset-0 -z-10 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900" />
//         {[...Array(5)].map((_, i) => (
//           <AnimatedBubble
//             key={i}
//             color={['#4F46E5', '#7C3AED', '#2563EB', '#7C3AED', '#4F46E5'][i]}
//             size={`${Math.random() * 300 + 200}px`}
//             duration={15}
//             delay={i}
//           />
//         ))}
//       </div>

//       <aside 
//         className={`fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className="h-full px-4 py-6 overflow-y-auto bg-white/10 backdrop-blur-xl border-r border-white/20 w-64">
//           <div className="flex items-center justify-between mb-8">
//             <span className="text-2xl font-bold text-white">AdminPanel</span>
//             <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/70 hover:text-white">
//               <X size={24} />
//             </button>
//           </div>
          
//           <nav className="space-y-2">
//             {menuItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => setCurrentPage(item.id)}
//                   className={`flex items-center w-full p-3 rounded-lg transition-all duration-300 ${
//                     currentPage === item.id 
//                       ? 'bg-white/20 text-white' 
//                       : 'text-white/70 hover:bg-white/10 hover:text-white'
//                   }`}
//                 >
//                   <Icon size={20} className="mr-3" />
//                   {item.label}
//                 </button>
//               );
//             })}
//           </nav>
//         </div>
//       </aside>

//       <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
//         <header className="fixed top-0 right-0 left-0 z-30 bg-white/10 backdrop-blur-xl border-b border-white/20 lg:left-64">
//           <div className="flex items-center justify-between px-4 py-4">
//             <div className="flex items-center gap-4">
//               <button 
//                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//                 className="text-white/70 hover:text-white"
//               >
//                 <Menu size={24} />
//               </button>
              
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <button className="relative text-white/70 hover:text-white">
//                 <Bell size={24} />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
//               </button>

//               <div className="relative">
//                 <button
//                   onClick={() => setIsProfileOpen(!isProfileOpen)}
//                   className="flex items-center gap-3 text-white/70 hover:text-white"
//                 >
//                   <img
//                     src="/api/placeholder/32/32"
//                     alt="Profile"
//                     className="w-8 h-8 rounded-full bg-white/20"
//                   />
//                   <span>Admin User</span>
//                   <ChevronDown size={20} />
//                 </button>

//                 {isProfileOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-xl rounded-lg shadow-lg border border-white/20">
//                     <div className="py-2">
//                       <button className="flex items-center w-full px-4 py-2 text-white/70 hover:bg-white/10 hover:text-white">
//                         Sign out
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="pt-20 p-6">
//           {renderPageContent()}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;















import React, { useState } from 'react';
import {
  Home,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  BarChart2,
  Calendar,
  ImagePlus,
  MessageSquare,
  DollarSign,
  Activity
} from 'lucide-react';
import UsersCompo from '../../adminCompo/user/User';
import Blog from '../../adminCompo/blog/Blog';
import Career from '../../adminCompo/career/Career';

// Reusable Animated Bubble component
const AnimatedBubble = ({ color, size, duration, delay }) => (
  <div
    className="absolute rounded-full opacity-30 blur-xl"
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      animation: `float ${duration}s infinite ease-in-out ${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

// Reusable Dashboard Card component
const DashboardCard = ({ icon: Icon, title, value, change, color }) => (
  <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300 group">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-400 mb-1 text-sm">{title}</p>
        <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
        <p className={`text-sm ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last month
        </p>
      </div>
      <div className={`p-4 rounded-lg ${color} group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={24} className="text-white" />
      </div>
    </div>
  </div>
);

// Dashboard component
const Dashboard = () => {
  // Dashboard specific state and logic
  const dashboardCards = [
    { icon: Users, title: 'Total Users', value: '8,249', change: 12.5, color: 'bg-blue-500' },
    // { icon: DollarSign, title: 'Revenue', value: '$23,456', change: 8.2, color: 'bg-green-500' },
    // { icon: Activity, title: 'Active Sessions', value: '1,234', change: -3.8, color: 'bg-purple-500' },
    { icon: BarChart2, title: 'Total Products', value: '456', change: 5.3, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {dashboardCards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">Activity Overview</h3>
          <div className="h-64 bg-white/5 rounded-lg animate-pulse" />
        </div>
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">Revenue Trends</h3>
          <div className="h-64 bg-white/5 rounded-lg animate-pulse" />
        </div>
      </div>

      <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center p-4 bg-white/5 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse" />
              <div className="ml-4">
                <div className="h-4 w-48 bg-white/10 rounded animate-pulse" />
                <div className="h-3 w-32 bg-white/10 rounded mt-2 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Users component
// const Users = () => {
//   // Users specific state and logic
//   return (
//     <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//       <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
//       <div className="h-96 bg-white/5 rounded-lg animate-pulse" />
//     </div>
//   );
// };

// Blog component
// const Blog = () => {
//   // Blog specific state and logic
//   return (
//     <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//       <h2 className="text-2xl font-bold text-white mb-4">Blog</h2>
//       <div className="h-96 bg-white/5 rounded-lg animate-pulse" />
//     </div>
//   );
// };

// Career component
// const Career = () => {
//   // Career specific state and logic
//   return (
//     <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//       <h2 className="text-2xl font-bold text-white mb-4">Career</h2>
//       <div className="h-96 bg-white/5 rounded-lg animate-pulse" />
//     </div>
//   );
// };

// Home Image Slider component
const HomeImageSlider = () => {
  // Home Image Slider specific state and logic
  return (
    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-4">Home Image Slider</h2>
      <div className="h-96 bg-white/5 rounded-lg animate-pulse" />
    </div>
  );
};

// Calendar component
// const Calendar = () => {
//   // Calendar specific state and logic
//   return (
//     <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//       <h2 className="text-2xl font-bold text-white mb-4">Calendar</h2>
//       <div className="h-96 bg-white/5 rounded-lg animate-pulse" />
//     </div>
//   );
// };

// Messages component
const Messages = () => {
  // Messages specific state and logic
  return (
    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-4">Messages</h2>
      <div className="h-96 bg-white/5 rounded-lg animate-pulse" />
    </div>
  );
};

// Settings component
// const Settings = () => {
//     // Settings specific state and logic
//     return (
//       <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//         <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
//         <div className="h-96 bg-white/5 rounded-lg animate-pulse" />
//       </div>
//     );
//   };

// Admin Panel component
const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'blog', icon: BarChart3, label: 'Blog' },
    { id: 'career', icon: BarChart2, label: 'Career' },
    { id: 'homeImageSlider', icon: ImagePlus, label: 'Images' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    // { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const renderPageContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UsersCompo/>;
      case 'blog':
        return <Blog />;
      case 'career':
        return <Career/>;
      case 'homeImageSlider':
        return <HomeImageSlider />;
      case 'calendar':
        return <Calendar />;
      case 'messages':
        return <Messages />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">{currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}</h2>
            <div className="h-96 bg-white/5 rounded-lg animate-pulse" />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900" />
        {[...Array(5)].map((_, i) => (
          <AnimatedBubble
            key={i}
            color={['#4F46E5', '#7C3AED', '#2563EB', '#7C3AED', '#4F46E5'][i]}
            size={`${Math.random() * 300 + 200}px`}
            duration={15}
            delay={i}
          />
        ))}
      </div>

      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full px-4 py-6 overflow-y-auto bg-white/10 backdrop-blur-xl border-r border-white/20 w-64">
          <div className="flex items-center justify-between mb-8">
            <span className="text-2xl font-bold text-white">AdminPanel</span>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/70 hover:text-white">
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center w-full p-3 rounded-lg transition-all duration-300 ${
                    currentPage === item.id 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={20} className="mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
        <header className="fixed top-0 right-0 left-0 z-30 bg-white/10 backdrop-blur-xl border-b border-white/20 lg:left-64">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-white/70 hover:text-white"
              >
                <Menu size={24} />
              </button>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative text-white/70 hover:text-white">
                <Bell size={24} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-3 text-white/70 hover:text-white"
                >
                  <img
                    src="/api/placeholder/32/32"
                    alt="Profile"
                    className="w-8 h-8 rounded-full bg-white/20"
                  />
                  <span>Admin User</span>
                  <ChevronDown size={20} />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-xl rounded-lg shadow-lg border border-white/20">
                    <div className="py-2">
                      <button className="flex items-center w-full px-4 py-2 text-white/70 hover:bg-white/10 hover:text-white">
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="pt-20 p-6">
          {renderPageContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;

