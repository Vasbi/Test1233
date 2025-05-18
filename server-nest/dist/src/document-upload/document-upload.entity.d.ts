export declare class DocumentUpload {
    id: number;
    filename: string;
    originalFilename: string;
    filePath: string;
    fileSize: number;
    mimeType: string;
    uploadedBy?: number;
    uploadedAt: Date;
    analysisStatus: string;
    analysisResults?: string;
    analysisCompletedAt?: string;
}
