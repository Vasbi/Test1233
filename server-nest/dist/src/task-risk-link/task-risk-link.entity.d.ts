export declare class TaskRiskLink {
    id: number;
    taskId: number;
    riskId: number;
    createdBy?: string;
    aiSuggested: boolean;
    userConfirmed: boolean;
    lastValidated?: Date;
    createdAt: Date;
}
