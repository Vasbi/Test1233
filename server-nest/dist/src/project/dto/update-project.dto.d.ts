import { CreateProjectDto } from './create-project.dto';
export declare class UpdateProjectDto implements Partial<CreateProjectDto> {
    name?: string;
    registerName?: string;
    financialOption?: string;
    projectManager?: string;
    registerDate?: string;
    organization?: string;
}
