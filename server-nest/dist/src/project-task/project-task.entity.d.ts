export declare class ProjectTask {
    id: number;
    projectId: number;
    taskId: string;
    taskName: string;
    percentComplete: number;
    startDate?: string;
    finishDate?: string;
    duration?: number;
    predecessors?: string;
    successors?: string;
    milestoneFlag: boolean;
    priority?: number;
    resources?: string;
    notes?: string;
    uploadedAt: Date;
    lastUpdatedAt: Date;
    uploadedBy?: string;
    excluded: boolean;
}
