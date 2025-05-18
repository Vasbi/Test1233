import { ExternalAccessToken } from '../external-access-token/external-access-token.entity';
import { CriticalDate } from '../critical-date/critical-date.entity';
import { Project } from '../project/project.entity';
export declare class ExternalAccessPermission {
    id: number;
    tokenId: number;
    criticalDateId?: number;
    projectId?: number;
    canView: boolean;
    canEdit: boolean;
    createdAt: Date;
    token: ExternalAccessToken;
    criticalDate?: CriticalDate;
    project?: Project;
}
