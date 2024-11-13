export const Header = ({ isSidebarOpen, setIsSidebarOpen, isProfileOpen, setIsProfileOpen }) => (
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
  );