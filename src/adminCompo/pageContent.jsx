export const PageContent = ({ currentPage, dashboardCards }) => {
    if (currentPage === 'dashboard') {
      return <DashboardContent dashboardCards={dashboardCards} />;
    }
    
    return (
      <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">
          {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
        </h2>
        <div className="h-96 bg-white/5 rounded-lg animate-pulse" />
      </div>
    );
  };