export const DashboardContent = ({ dashboardCards }) => (
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
  