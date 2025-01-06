import React, { useState } from 'react';
import {
  Users,
  Home,
  Settings,
  Bell,
  Search,
  Mail,
  HelpCircle,
  BarChart2,
  FileText,
  Calendar,
  LogOut,
  ChevronDown,
  Menu,
  UserCircle  // Added import for user icon
} from 'lucide-react';
import { Link } from "react-router-dom";

const EmployeeNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, text: 'New user registration', time: '2m ago' },
    { id: 2, text: 'Server update completed', time: '1h ago' },
    { id: 3, text: 'Backup completed', time: '3h ago' }
  ]);

  const navItems = [
    { icon: <Home size={20} />, label: 'Dashboard', href: '/' },
    { icon: <Users size={20} />, label: 'Users', href: '/employeer/user' },
    { icon: <FileText size={20} />, label: 'Tasks', href: '/employeer/task' }
  ];

  return (
    <nav className="bg-white shadow-md">
      {/* Main Navbar */}
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
            
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Admin</span>
            </div>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center ml-10 space-x-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <button 
                className="p-2 rounded-full hover:bg-gray-100 relative"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Notifications Dropdown */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
                  <div className="px-4 py-2 border-b">
                    <h3 className="font-semibold">Notifications</h3>
                  </div>
                  {notifications.map(notification => (
                    <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                      <p className="text-sm text-gray-600">{notification.text}</p>
                      <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                    </div>
                  ))}
                  <div className="px-4 py-2 border-t">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                      View all notifications
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button 
                className={`flex items-center gap-2 p-2 rounded-lg transition-colors duration-200 ${
                  isProfileMenuOpen 
                    ? 'bg-blue-50 text-blue-600 ring-2 ring-blue-200' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <div className={`w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-200 ${
                  isProfileMenuOpen ? 'ring-2 ring-blue-400' : ''
                }`}>
                  <UserCircle className="text-blue-600" size={24} />
                </div>
                <span className="hidden md:block font-medium">Admin User</span>
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform duration-200 ${
                    isProfileMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <Users size={16} className="mr-2" />
                    <span>Admin ID</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <UserCircle size={16} className="mr-2" />
                    <span>Admin name</span>
                  </a>
                  <div className="border-t my-1"></div>
                  <a href="#" className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50">
                    <LogOut size={16} className="mr-2" />
                    <span>Logout</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default EmployeeNavbar;