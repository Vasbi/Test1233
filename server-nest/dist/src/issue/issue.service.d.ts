import { Repository } from 'typeorm';
import { Issue } from './issue.entity';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
export declare class IssueService {
    private readonly issueRepository;
    constructor(issueRepository: Repository<Issue>);
    create(createIssueDto: CreateIssueDto): Promise<Issue>;
    findAll(): Promise<Issue[]>;
    findOne(id: number): Promise<Issue | undefined>;
    update(id: number, updateDto: UpdateIssueDto): Promise<Issue | undefined>;
    remove(id: number): Promise<boolean>;
    advancedFindAll({ projectId, status, category, fromDate, toDate, title, description, assignedTo, }: {
        projectId?: number;
        status?: string;
        category?: string;
        fromDate?: string;
        toDate?: string;
        title?: string;
        description?: string;
        assignedTo?: number;
    }): Promise<Issue[]>;
    batchCreate(issues: CreateIssueDto[]): Promise<Issue[]>;
    batchUpdate(updates: {
        id: number;
        update: UpdateIssueDto;
    }[]): Promise<Issue[]>;
    batchDelete(ids: number[]): Promise<number>;
}
