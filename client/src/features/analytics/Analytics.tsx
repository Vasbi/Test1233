// Migrate Analytics page to feature folder
// TODO: Move full implementation and update imports
import ProjectAnalyticsDashboard from "./ProjectAnalyticsDashboard";

const Analytics = () => {
  // TODO: Replace with projectId from context/router
  const projectId = 1;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      {/* ProjectAnalyticsDashboard now uses Syncfusion charts for analytics visualizations */}
      <ProjectAnalyticsDashboard projectId={projectId} />
      {/* TODO: Add more analytics widgets, AI insights, and Syncfusion charts */}
    </div>
  );
};

export default Analytics;
