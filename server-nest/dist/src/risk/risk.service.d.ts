import { Repository } from 'typeorm';
import { Risk } from './risk.entity';
import { CreateRiskDto } from './dto/create-risk.dto';
import { UpdateRiskDto } from './dto/update-risk.dto';
export declare class RiskService {
    private readonly riskRepository;
    constructor(riskRepository: Repository<Risk>);
    create(createRiskDto: CreateRiskDto): Promise<Risk>;
    findAll(): Promise<Risk[]>;
    findOne(id: number): Promise<Risk | undefined>;
    update(id: number, updateDto: UpdateRiskDto): Promise<Risk | undefined>;
    remove(id: number): Promise<boolean>;
    advancedFindAll({ projectId, riskStatus, riskCategory, fromDate, toDate, }: {
        projectId?: number;
        riskStatus?: string;
        riskCategory?: string;
        fromDate?: string;
        toDate?: string;
    }): Promise<Risk[]>;
    batchCreate(risks: CreateRiskDto[]): Promise<Risk[]>;
}
export {};
