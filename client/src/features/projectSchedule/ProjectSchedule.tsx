import { useState, useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { queryClient } from '@/lib/queryClient';
import { exportLinkedTasksToCSV } from "@/lib/utils/csvExport";
import { useToast } from "@/hooks/use-toast";
import { 
  CircleAlert, 
  FilePlus2, 
  ClipboardList, 
  Calendar, 
  FileSpreadsheet, 
  Link as LinkIcon, 
  BarChart4, 
  Search,
  CheckCircle,
  ArrowUpDown,
  Filter,
  Download
} from "lucide-react";
import { format } from 'date-fns';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Sort, Filter as SfFilter, Toolbar, Edit, CommandColumn, ColumnChooser } from '@syncfusion/ej2-react-grids';
import ExcelUploader from '@/components/ExcelUploader';
import TaskLinkingPanel from '@/components/TaskLinkingPanel';
import TaskProgressSlider from '@/components/TaskProgressSlider';
import { useProjectScheduleStore } from '@/store/globalStore';
import type { ProjectTask } from '@/store/globalStore';


// Migrate ProjectSchedule page to feature folder
// TODO: Move full implementation and update imports
const ProjectSchedule = () => {
  // Use Zustand store for tasks
  const { tasks, isLoading, setTasks } = useProjectScheduleStore();

  // Handler for updating task progress
  const handleTaskUpdate = (taskId: number, newProgress: number, updatedRisksCount?: number) => {
    setTasks((tasks as ProjectTask[]).map(task =>
      task.id === taskId ? { ...task, percentComplete: newProgress } : task
    ));
  };

  // Action column template
  const ActionTemplate = (props: any) => (
    <div className="flex gap-2">
      <TaskProgressSlider 
        taskId={props.id} 
        initialProgress={props.percentComplete} 
        taskName={props.taskName} 
        onUpdate={handleTaskUpdate}
      />
      {/* Add more actions as needed */}
    </div>
  );

  return (
    <div className="space-y-6">
      <ExcelUploader projectId={1} onUploadComplete={() => {}} />
      <TaskLinkingPanel projectId={1} />
      <div className="bg-white rounded shadow p-2">
        <GridComponent
          dataSource={tasks}
          allowPaging={true}
          allowSorting={true}
          allowFiltering={true}
          toolbar={['Search', 'ColumnChooser']}
          showColumnChooser={true}
          pageSettings={{ pageSize: 10 }}
          height={400}
        >
          <ColumnsDirective>
            <ColumnDirective field="taskId" headerText="Task ID" width="100" />
            <ColumnDirective field="taskName" headerText="Name" width="200" />
            <ColumnDirective field="percentComplete" headerText="% Complete" width="120" />
            <ColumnDirective field="startDate" headerText="Start Date" width="120" />
            <ColumnDirective field="finishDate" headerText="Finish Date" width="120" />
            <ColumnDirective field="duration" headerText="Duration" width="100" />
            <ColumnDirective field="resources" headerText="Resources" width="150" />
            <ColumnDirective field="notes" headerText="Notes" width="200" />
            <ColumnDirective field="links" headerText="Linked Risks" width="120" />
            <ColumnDirective headerText="Actions" width="220" template={ActionTemplate} />
          </ColumnsDirective>
          <Inject services={[Page, Sort, SfFilter, Toolbar, ColumnChooser, Edit, CommandColumn]} />
        </GridComponent>
      </div>
    </div>
  );
};
export default ProjectSchedule;