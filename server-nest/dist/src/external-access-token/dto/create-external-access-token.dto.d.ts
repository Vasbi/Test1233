export declare class CreateExternalAccessTokenDto {
    token: string;
    email: string;
    name?: string;
    organization?: string;
    purpose?: string;
    accessType: string;
    isActive?: boolean;
    expiresAt: string;
    createdBy?: number;
    lastUsedAt?: string;
    ipAddress?: string;
    accessCount?: number;
}
