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

export const Sidebar = ({ isOpen, setIsOpen, currentPage, setCurrentPage, menuItems }) => (
    <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="h-full px-4 py-6 overflow-y-auto bg-white/10 backdrop-blur-xl border-r border-white/20 w-64">
        <div className="flex items-center justify-between mb-8">
          <span className="text-2xl font-bold text-white">AdminPanel</span>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-white/70 hover:text-white">
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
  );
  