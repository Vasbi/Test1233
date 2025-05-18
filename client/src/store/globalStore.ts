import { create } from 'zustand';
import { Risk, Issue, CriticalDate } from '@shared/schema';
import { apiClient } from '@/lib/apiClient';

interface RiskState {
  risks: Risk[];
  isLoading: boolean;
  setRisks: (risks: Risk[]) => void;
  setIsLoading: (loading: boolean) => void;
}

export const useRiskStore = create<RiskState>((set) => ({
  risks: [],
  isLoading: false,
  setRisks: (risks) => set({ risks }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

interface IssueState {
  issues: Issue[];
  isLoading: boolean;
  setIssues: (issues: Issue[]) => void;
  setIsLoading: (loading: boolean) => void;
}

export const useIssueStore = create<IssueState>((set) => ({
  issues: [],
  isLoading: false,
  setIssues: (issues) => set({ issues }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

interface CriticalDateState {
  criticalDates: CriticalDate[];
  isLoading: boolean;
  setCriticalDates: (dates: CriticalDate[]) => void;
  setIsLoading: (loading: boolean) => void;
}

export const useCriticalDateStore = create<CriticalDateState>((set) => ({
  criticalDates: [],
  isLoading: false,
  setCriticalDates: (criticalDates) => set({ criticalDates }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

interface ProjectTask {
  id: number;
  taskId: string;
  taskName: string;
  percentComplete: number;
  links?: any[];
}

interface TaskLink {
  id: number;
  taskId: number;
  riskId: number;
  aiSuggested?: boolean;
}

interface Project {
  id: number;
  name: string;
  registerName?: string;
  organization?: string;
  [key: string]: any;
}

interface Schedule {
  id: number;
  name: string;
  [key: string]: any;
}

interface ProjectScheduleState {
  project: { isLoading: boolean; error: string | null; data: Project | null };
  activeTab: string;
  schedules: Schedule[];
  tasks: ProjectTask[];
  filteredTasks: ProjectTask[];
  isLoading: boolean;
  isLoadingTasks: boolean;
  showCompleted: boolean;
  showLinkedOnly: boolean;
  sortField: string;
  sortOrder: 'asc' | 'desc';
  setActiveTab: (tab: string) => void;
  setShowCompleted: (show: boolean) => void;
  setShowLinkedOnly: (show: boolean) => void;
  setSortField: (field: string) => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  setTasks: (tasks: ProjectTask[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsLoadingTasks: (isLoading: boolean) => void;
  setSchedules: (schedules: Schedule[]) => void;
  setProject: (project: { isLoading: boolean; error: string | null; data: Project | null }) => void;
  setFilteredTasks: (tasks: ProjectTask[]) => void;
  fetchProject: (projectId: number) => void;
  fetchSchedules: (projectId: number) => void;
  fetchTasks: (projectId: number) => void;
  updateTaskProgress: (taskId: number, newProgress: number, updatedRisksCount?: number) => void;
  resetFilters: () => void;
}

export const useProjectScheduleStore = create<ProjectScheduleState>((set, get) => ({
  project: { isLoading: false, error: null, data: null },
  activeTab: 'uploaded-files',
  schedules: [],
  tasks: [],
  filteredTasks: [],
  isLoading: false,
  isLoadingTasks: false,
  showCompleted: false,
  showLinkedOnly: false,
  sortField: 'taskId',
  sortOrder: 'asc',
  setActiveTab: (tab) => set({ activeTab: tab }),
  setShowCompleted: (show) => set({ showCompleted: show }),
  setShowLinkedOnly: (show) => set({ showLinkedOnly: show }),
  setSortField: (field) => set({ sortField: field }),
  setSortOrder: (order) => set({ sortOrder: order }),
  setTasks: (tasks) => set({ tasks }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsLoadingTasks: (isLoadingTasks) => set({ isLoadingTasks }),
  setSchedules: (schedules) => set({ schedules }),
  setProject: (project) => set({ project }),
  setFilteredTasks: (filteredTasks) => set({ filteredTasks }),
  fetchProject: (projectId) => {
    set({ project: { isLoading: true, error: null, data: null } });
    // TODO: Replace with real API call
    setTimeout(() => {
      set({ project: { isLoading: false, error: null, data: { id: projectId, name: `Project ${projectId}` } } });
    }, 500);
  },
  fetchSchedules: (projectId) => {
    set({ isLoading: true });
    // TODO: Replace with real API call
    setTimeout(() => {
      set({ schedules: [{ id: 1, name: 'Schedule 1' }], isLoading: false });
    }, 500);
  },
  fetchTasks: (projectId) => {
    set({ isLoadingTasks: true });
    // TODO: Replace with real API call
    setTimeout(() => {
      set({ tasks: [{ id: 1, taskId: 'T1', taskName: 'Task 1', percentComplete: 0 }], isLoadingTasks: false });
    }, 500);
  },
  updateTaskProgress: (taskId, newProgress, updatedRisksCount) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, percentComplete: newProgress } : task
      ),
    }));
  },
  resetFilters: () => set({ showCompleted: false, showLinkedOnly: false, sortField: 'taskId', sortOrder: 'asc' }),
}));

interface FileUploadState {
  file: File;
  progress: number;
  status: 'idle' | 'uploading' | 'success' | 'error';
  message?: string;
  uploadedId?: number;
  isTemporary?: boolean;
}

interface DocumentUploadState {
  files: FileUploadState[];
  isDragging: boolean;
  isAnalyzing: boolean;
  analysisResults: any;
  timelineData: any[];
  createdDates: any[];
  message: string | null;
  activeTab: string;
  setFiles: (files: FileUploadState[]) => void;
  setIsDragging: (isDragging: boolean) => void;
  setIsAnalyzing: (isAnalyzing: boolean) => void;
  setAnalysisResults: (results: any) => void;
  setTimelineData: (data: any[]) => void;
  setCreatedDates: (dates: any[]) => void;
  setMessage: (msg: string | null) => void;
  setActiveTab: (tab: string) => void;
  uploadFile: (fileState: FileUploadState, criticalDateId?: number) => Promise<any>;
  deleteDocument: (documentId: number) => Promise<void>;
  analyzeDocuments: (documentIds: number[], criticalDateId?: number, temporaryDocuments?: Record<number, any>) => Promise<any>;
  saveCriticalDates: (payload: any) => Promise<any>;
}

export const useDocumentUploadStore = create<DocumentUploadState>((set, get) => ({
  files: [],
  isDragging: false,
  isAnalyzing: false,
  analysisResults: null,
  timelineData: [],
  createdDates: [],
  message: null,
  activeTab: 'files',
  setFiles: (files) => set({ files }),
  setIsDragging: (isDragging) => set({ isDragging }),
  setIsAnalyzing: (isAnalyzing) => set({ isAnalyzing }),
  setAnalysisResults: (analysisResults) => set({ analysisResults }),
  setTimelineData: (timelineData) => set({ timelineData }),
  setCreatedDates: (createdDates) => set({ createdDates }),
  setMessage: (message) => set({ message }),
  setActiveTab: (activeTab) => set({ activeTab }),

  // Upload a file using apiClient
  uploadFile: async (fileState: FileUploadState, criticalDateId?: number) => {
    const formData = new FormData();
    formData.append('file', fileState.file);
    if (criticalDateId) {
      formData.append('criticalDateId', criticalDateId.toString());
    }
    const response = await apiClient<any>({
      method: 'POST',
      url: '/document-upload',
      data: formData,
      headers: {},
    });
    return response;
  },

  // Delete a document by ID
  deleteDocument: async (documentId: number) => {
    await apiClient<void>({
      method: 'DELETE',
      url: `/api/documents/${documentId}`,
    });
  },

  // Analyze uploaded documents
  analyzeDocuments: async (documentIds: number[], criticalDateId?: number, temporaryDocuments?: Record<number, any>) => {
    return await apiClient<any>({
      method: 'POST',
      url: '/document-upload/analyse',
      data: { documentIds, criticalDateId, temporaryDocuments },
      headers: { 'Content-Type': 'application/json' },
    });
  },

  // Save selected critical dates
  saveCriticalDates: async (payload: any) => {
    return await apiClient<any>({
      method: 'POST',
      url: '/critical-date/batch',
      data: payload,
      headers: { 'Content-Type': 'application/json' },
    });
  },
}));

export type { ProjectTask, FileUploadState };
