"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDocumentUploadDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_document_upload_dto_1 = require("./create-document-upload.dto");
class UpdateDocumentUploadDto extends (0, mapped_types_1.PartialType)(create_document_upload_dto_1.CreateDocumentUploadDto) {
}
exports.UpdateDocumentUploadDto = UpdateDocumentUploadDto;
//# sourceMappingURL=update-document-upload.dto.js.map