import { IssueService } from './issue.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
export declare class IssueController {
    private readonly issueService;
    constructor(issueService: IssueService);
    create(createIssueDto: CreateIssueDto): Promise<import("./issue.entity").Issue>;
    findAll(projectId?: number, status?: string, category?: string, fromDate?: string, toDate?: string, title?: string, description?: string, assignedTo?: number): Promise<import("./issue.entity").Issue[]>;
    findOne(id: string): Promise<import("./issue.entity").Issue | undefined>;
    update(id: string, updateIssueDto: UpdateIssueDto): Promise<import("./issue.entity").Issue | undefined>;
    remove(id: string): Promise<boolean>;
    batchCreate(issues: CreateIssueDto[]): Promise<import("./issue.entity").Issue[]>;
    batchUpdate(updates: {
        id: number;
        update: UpdateIssueDto;
    }[]): Promise<import("./issue.entity").Issue[]>;
    batchDelete(ids: number[]): Promise<number>;
}
