"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectTaskDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_project_task_dto_1 = require("./create-project-task.dto");
class UpdateProjectTaskDto extends (0, mapped_types_1.PartialType)(create_project_task_dto_1.CreateProjectTaskDto) {
}
exports.UpdateProjectTaskDto = UpdateProjectTaskDto;
//# sourceMappingURL=update-project-task.dto.js.map