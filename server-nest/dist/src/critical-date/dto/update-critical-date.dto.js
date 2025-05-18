"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCriticalDateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_critical_date_dto_1 = require("./create-critical-date.dto");
class UpdateCriticalDateDto extends (0, mapped_types_1.PartialType)(create_critical_date_dto_1.CreateCriticalDateDto) {
}
exports.UpdateCriticalDateDto = UpdateCriticalDateDto;
//# sourceMappingURL=update-critical-date.dto.js.map