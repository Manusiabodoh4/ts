"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const joi_1 = __importDefault(require("joi"));
const validator = (req, res, next) => {
    const { value, error } = joi_1.default.object({
        name: joi_1.default.string().required()
    }).validate(req.query);
    if (error === undefined) {
        req.query = value;
        next();
        return;
    }
    const len = error.details.length;
    const arrError = [];
    for (let i = 0; i < len; i++) {
        arrError.push(error.details[i].message);
    }
    res.status(400).json({ code: 400, message: "Terjadi kesalahan pada request", error: arrError });
    return;
};
exports.validator = validator;
//# sourceMappingURL=validator.js.map