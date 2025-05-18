// Analytics dashboard for project-level risk, issue, and critical date analytics
// Modularized for extensibility and Syncfusion integration
import { useRisks } from "../risks/useRisks";
import { useIssues } from "../issues/useIssues";
import { useCriticalDates } from "../criticalDates/useCriticalDates";
import { countRisksByLevel, calculateRiskScore, calculateUnmitigatedRiskScore } from "@/lib/utils/riskCalculations";
import { Skeleton } from "@/components/ui/skeleton";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, Category, Legend, Tooltip, AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries } from '@syncfusion/ej2-react-charts';

// TODO: Add Syncfusion charts/tables for analytics visualizations

interface ProjectAnalyticsDashboardProps {
  projectId: number;
}

const ProjectAnalyticsDashboard = ({ projectId }: ProjectAnalyticsDashboardProps) => {
  const { risks, isLoading: risksLoading } = useRisks(projectId);
  const { issues = [], isLoading: issuesLoading }: { issues: any[]; isLoading: boolean } = useIssues(projectId) as any;
  const { criticalDates, isLoading: datesLoading } = useCriticalDates(projectId);

  if (risksLoading || issuesLoading || datesLoading) {
    return <Skeleton className="h-40 w-full" />;
  }

  // Example analytics: risk score, issue count, critical date count
  const riskScore = calculateRiskScore(risks);
  const unmitigatedRiskScore = calculateUnmitigatedRiskScore(risks);
  const riskCounts = countRisksByLevel(risks);
  const issueCount = issues.length;
  const criticalDateCount = criticalDates.length;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4 shadow">
          <div className="text-xs text-gray-500 mb-1">Mitigated Risk Score</div>
          <div className="text-2xl font-bold">{riskScore}</div>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow">
          <div className="text-xs text-gray-500 mb-1">Unmitigated Risk Score</div>
          <div className="text-2xl font-bold">{unmitigatedRiskScore}</div>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow">
          <div className="text-xs text-gray-500 mb-1">Total Issues</div>
          <div className="text-2xl font-bold">{issueCount}</div>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow">
          <div className="text-xs text-gray-500 mb-1">Critical Dates</div>
          <div className="text-2xl font-bold">{criticalDateCount}</div>
        </div>
      </div>
      {/* Example Syncfusion Chart for risk score trends */}
      <div className="bg-white border rounded-lg p-4 shadow">
        <div className="text-xs text-gray-500 mb-1">Risk Score Trend</div>
        <ChartComponent
          id="risk-score-chart"
          primaryXAxis={{ valueType: 'Category', title: 'Period' }}
          primaryYAxis={{ title: 'Risk Score' }}
          tooltip={{ enable: true }}
          width="100%"
          height="300px"
        >
          <Inject services={[LineSeries, Category, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={[
                { x: 'Jan', y: 120 },
                { x: 'Feb', y: 110 },
                { x: 'Mar', y: 130 },
                { x: 'Apr', y: 100 },
                { x: 'May', y: riskScore }
              ]}
              xName="x"
              yName="y"
              name="Risk Score"
              type="Line"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      {/* TODO: Add more Syncfusion charts for issues, critical dates, and AI insights */}
    </div>
  );
};

export default ProjectAnalyticsDashboard;
