import { RiskService } from './risk.service';
import { CreateRiskDto } from './dto/create-risk.dto';
import { UpdateRiskDto } from './dto/update-risk.dto';
export declare class RiskController {
    private readonly riskService;
    constructor(riskService: RiskService);
    create(createRiskDto: CreateRiskDto): Promise<import("./risk.entity").Risk>;
    findAll(projectId?: number, riskStatus?: string, riskCategory?: string, fromDate?: string, toDate?: string): Promise<import("./risk.entity").Risk[]>;
    findOne(id: string): Promise<import("./risk.entity").Risk | undefined>;
    update(id: string, updateRiskDto: UpdateRiskDto): Promise<import("./risk.entity").Risk | undefined>;
    remove(id: string): Promise<boolean>;
    batchCreate(risks: CreateRiskDto[]): Promise<import("./risk.entity").Risk[]>;
}
export {};
