"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const QuotationSchema = new mongoose_1.Schema({
    quotation_title: { type: String, required: false },
    quotationPrice: { type: Number, required: false },
});
const UserSchema = new mongoose_1.Schema({
    auth0Id: { type: String, required: true },
    quotations: { type: [QuotationSchema] },
});
exports.User = (0, mongoose_1.model)("User", UserSchema);
