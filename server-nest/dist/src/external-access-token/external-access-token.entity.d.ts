export declare class ExternalAccessToken {
    id: number;
    token: string;
    email: string;
    name?: string;
    organization?: string;
    purpose?: string;
    accessType: string;
    isActive: boolean;
    expiresAt: Date;
    createdAt: Date;
    createdBy?: number;
    lastUsedAt?: Date;
    ipAddress?: string;
    accessCount: number;
}
