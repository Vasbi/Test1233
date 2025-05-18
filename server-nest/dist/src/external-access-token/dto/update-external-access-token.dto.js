"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExternalAccessTokenDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_external_access_token_dto_1 = require("./create-external-access-token.dto");
class UpdateExternalAccessTokenDto extends (0, mapped_types_1.PartialType)(create_external_access_token_dto_1.CreateExternalAccessTokenDto) {
}
exports.UpdateExternalAccessTokenDto = UpdateExternalAccessTokenDto;
//# sourceMappingURL=update-external-access-token.dto.js.map