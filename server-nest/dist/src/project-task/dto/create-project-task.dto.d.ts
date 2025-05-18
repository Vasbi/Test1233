export declare class CreateProjectTaskDto {
    projectId: number;
    taskId: string;
    taskName: string;
    percentComplete: number;
    startDate?: string;
    finishDate?: string;
    duration?: number;
    predecessors?: string;
    successors?: string;
    milestoneFlag?: boolean;
    priority?: number;
    resources?: string;
    notes?: string;
    uploadedBy?: string;
    excluded?: boolean;
}
