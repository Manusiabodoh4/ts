"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = require("./middleware/validator");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', express_1.default.json, validator_1.validator, (req, res) => {
    const { name } = req.query;
    res.send(`Hola apa kabar, ${name}?`);
});
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map