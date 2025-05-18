import { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ExcelUploader from "@/components/ExcelUploader";
import TaskLinkingPanel from "@/components/TaskLinkingPanel";
import TaskProgressSlider from "@/components/TaskProgressSlider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useProjectScheduleStore } from '@/store/globalStore';

export default function ProjectSchedule() {
  const params = useParams<{ projectId: string }>();
  const projectId = parseInt(params.projectId, 10);
  const { toast } = useToast();
  const {
    project,
    activeTab,
    setActiveTab,
    schedules,
    tasks,
    filteredTasks,
    isLoadingTasks,
    showCompleted,
    showLinkedOnly,
    sortField,
    sortOrder,
    fetchProject,
    fetchSchedules,
    fetchTasks,
    updateTaskProgress,
    resetFilters,
    setShowCompleted,
    setShowLinkedOnly,
    setSortField,
    setSortOrder,
  } = useProjectScheduleStore();
  
  // Initialize project schedule data
  useEffect(() => {
    if (isNaN(projectId)) return;
    
    fetchProject(projectId);
    fetchSchedules(projectId);
    
    // Reset filters and state on project change
    resetFilters();
  }, [projectId, fetchProject, fetchSchedules, resetFilters]);
  
  // Fetch project tasks when active tab changes
  useEffect(() => {
    if (activeTab === 'task-progress') {
      fetchTasks(projectId);
    }
  }, [activeTab, projectId, fetchTasks]);
  
  // Handle task update
  const handleTaskUpdate = (taskId: number, newProgress: number, updatedRisksCount?: number) => {
    updateTaskProgress(taskId, newProgress, updatedRisksCount);
  };
  
  // Handle CSV export of linked tasks
  const handleExportCSV = () => {
    try {
      if (filteredTasks.length === 0) {
        toast({
          title: "No tasks to export",
          description: "There are no tasks available to export.",
          variant: "destructive",
        });
        return;
      }
      
      // Fix: Use project.data?.name for projectName
      const projectName = project.data?.name || "Project_Schedule";
      
      // Fix: Map ProjectTask[] to Task[] for exportLinkedTasksToCSV
      const mappedTasks = filteredTasks.map(task => ({
        id: task.id,
        taskId: task.taskId,
        taskName: task.taskName,
        percentComplete: task.percentComplete,
        startDate: (task as any).startDate || '',
        finishDate: (task as any).finishDate || '',
        duration: (task as any).duration || '',
        resources: (task as any).resources || '',
        notes: (task as any).notes || '',
        links: task.links || [],
        projectId: (task as any).projectId || 0,
      }));
      exportLinkedTasksToCSV(mappedTasks, projectName);
      
      toast({
        title: "Export successful",
        description: "Linked tasks have been exported to CSV.",
      });
    } catch (error) {
      console.error("Export error:", error);
      toast({
        title: "Export failed",
        description: "Failed to export linked tasks to CSV.",
        variant: "destructive",
      });
    }
  };
  
  // Handle sort toggle
  const handleSortToggle = (field: 'taskId' | 'taskName' | 'percentComplete') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleUploadComplete = (result: any) => {
    // Refresh schedules list
    fetchSchedules(projectId);
    
    // Switch to linking tab after upload
    setActiveTab("task-linking");
  };
  
  if (project.isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }
  
  if (project.error || !project.data) {
    return (
      <div className="container mx-auto p-6">
        <Alert variant="destructive" className="mb-6">
          <CircleAlert className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {project.error || "Failed to load project schedule. Please try again."}
          </AlertDescription>
        </Alert>
        
        <Button asChild variant="outline">
          <Link href="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{project.data.name}</h1>
          <p className="text-muted-foreground">
            {project.data.registerName} • {project.data.organization}
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/risk-register">
              <ClipboardList className="mr-2 h-4 w-4" />
              Risk Register
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/issues">
              <CircleAlert className="mr-2 h-4 w-4" />
              Issues Register
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/critical-dates`}>
              <Calendar className="mr-2 h-4 w-4" />
              Critical Dates
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="uploaded-files">Uploaded Schedules</TabsTrigger>
            <TabsTrigger value="task-risk-links">Task-Risk Linking</TabsTrigger>
            <TabsTrigger value="task-progress">Task Progress</TabsTrigger>
          </TabsList>
          
          <TabsContent value="uploaded-files" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <ExcelUploader 
                  projectId={projectId} 
                  onUploadComplete={handleUploadComplete} 
                />
              </div>
              
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileSpreadsheet className="h-5 w-5" />
                      Upload History
                    </CardTitle>
                    <CardDescription>
                      Previously uploaded MS Project schedules
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Fix: Remove schedules.isLoading and schedules.data, just use schedules array */}
                    {schedules.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <p>No schedules have been uploaded yet.</p>
                        <p className="text-sm mt-2">Use the upload form to import your first MS Project schedule.</p>
                      </div>
                    ) : (
                      <div className="rounded-md border">
                        <div className="grid grid-cols-12 p-3 bg-muted text-sm font-medium border-b">
                          <div className="col-span-4">File Name</div>
                          <div className="col-span-3">Uploaded By</div>
                          <div className="col-span-2">Date</div>
                          <div className="col-span-3">Tasks</div>
                        </div>
                        
                        <div className="divide-y">
                          {schedules.slice(0, 10).map((schedule: any) => (
                            <div key={schedule.id} className="grid grid-cols-12 p-3 items-center">
                              <div className="col-span-4">
                                <div className="flex items-center gap-2">
                                  <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
                                  <div className="font-medium truncate">{schedule.fileName}</div>
                                </div>
                              </div>
                              
                              <div className="col-span-3">
                                <span className="text-sm">{schedule.uploadedBy || 'Anonymous'}</span>
                              </div>
                              
                              <div className="col-span-2">
                                <span className="text-sm">
                                  {schedule.uploadedAt ? format(new Date(schedule.uploadedAt), 'dd MMM yyyy') : ''}
                                </span>
                              </div>
                              
                              <div className="col-span-3">
                                <div className="text-sm flex gap-2">
                                  <Badge variant="outline">
                                    {schedule.taskCount || 0} Tasks
                                  </Badge>
                                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    {schedule.completedTaskCount || 0} Complete
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                  {schedules.length > 0 && (
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="ml-auto"
                        onClick={() => setActiveTab("task-linking")}
                      >
                        <LinkIcon className="mr-2 h-4 w-4" />
                        Manage Task Links
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="task-risk-links">
            <TaskLinkingPanel projectId={projectId} />
          </TabsContent>
          
          <TabsContent value="task-progress">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart4 className="h-5 w-5" />
                      Task Progress Tracking
                    </CardTitle>
                    <CardDescription>
                      Update task progress to automatically close linked risks when tasks are completed
                    </CardDescription>
                  </div>
                  <Button 
                    onClick={handleExportCSV}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Export Tasks CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center w-full md:w-auto space-x-2">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search tasks..."
                        // Fix: Remove tasks.searchQuery, tasks.setSearchQuery, tasks.data, and Task type casting
                        className="h-9 w-full md:w-[250px]"
                      />
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                      <div className="flex items-center space-x-2 mr-4">
                        <Checkbox 
                          id="show-linked-only" 
                          checked={showLinkedOnly}
                          onCheckedChange={(checked) => setShowLinkedOnly(checked as boolean)}
                        />
                        <label
                          htmlFor="show-linked-only"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Show only linked tasks
                        </label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="show-completed" 
                          checked={showCompleted}
                          onCheckedChange={(checked) => setShowCompleted(checked as boolean)}
                        />
                        <label
                          htmlFor="show-completed"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Show completed tasks
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {isLoadingTasks ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                    </div>
                  ) : filteredTasks.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>No tasks found.</p>
                      <p className="text-sm mt-2">
                        Upload a project schedule to see tasks here.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-12 gap-4 items-center py-2 border-b text-sm font-medium text-muted-foreground">
                        <div className="col-span-2">
                          <button 
                            className="flex items-center" 
                            onClick={() => handleSortToggle('taskId')}
                          >
                            Task ID
                            <ArrowUpDown className={`ml-1 h-3 w-3 ${sortField === 'taskId' ? 'text-primary' : 'text-muted-foreground'}`} />
                          </button>
                        </div>
                        <div className="col-span-5">
                          <button 
                            className="flex items-center" 
                            onClick={() => handleSortToggle('taskName')}
                          >
                            Name
                            <ArrowUpDown className={`ml-1 h-3 w-3 ${sortField === 'taskName' ? 'text-primary' : 'text-muted-foreground'}`} />
                          </button>
                        </div>
                        <div className="col-span-3">
                          <button 
                            className="flex items-center" 
                            onClick={() => handleSortToggle('percentComplete')}
                          >
                            Progress
                            <ArrowUpDown className={`ml-1 h-3 w-3 ${sortField === 'percentComplete' ? 'text-primary' : 'text-muted-foreground'}`} />
                          </button>
                        </div>
                        <div className="col-span-2">Links</div>
                      </div>
                      
                      {filteredTasks.map((task) => (
                        <div key={task.id} className="grid grid-cols-12 gap-4 items-center py-3 border-b last:border-b-0">
                          <div className="col-span-2">
                            <div className="font-medium text-sm">{task.taskId}</div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-sm">{task.taskName}</div>
                          </div>
                          <div className="col-span-3">
                            <TaskProgressSlider
                              taskId={task.id}
                              initialProgress={task.percentComplete}
                              taskName={task.taskName}
                              onUpdate={handleTaskUpdate}
                            />
                          </div>
                          <div className="col-span-2">
                            {task.links && task.links.length > 0 ? (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                {task.links.length} Risk{task.links.length !== 1 ? 's' : ''}
                              </Badge>
                            ) : (
                              <span className="text-xs text-muted-foreground">No linked risks</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveTab("task-linking")}
                >
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Manage Task Links
                </Button>
                {filteredTasks.length > 0 && (
                  <div className="text-sm text-muted-foreground">
                    {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''} •&nbsp;
                    {filteredTasks.filter((t) => t.percentComplete === 100).length} completed
                  </div>
                )}
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export { default as ProjectSchedule } from '../features/projectSchedule/ProjectSchedule';