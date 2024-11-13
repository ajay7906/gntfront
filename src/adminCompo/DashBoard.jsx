export const DashboardCard = ({ icon: Icon, title, value, change, color }) => (
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