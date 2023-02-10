"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const auth0_middleware_1 = require("./middleware/auth0.middleware");
const users_1 = __importDefault(require("./routes/users"));
const database_service_1 = require("./services/database.service");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
(0, database_service_1.connectToDatabes)().catch(console.dir);
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)());
app.use(auth0_middleware_1.validateAccessToken);
app.use("/users", users_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ error_message: err.message });
});
app.listen(8000);
