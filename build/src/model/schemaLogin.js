"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const loginSchema = new Schema({
    user: String,
    password: String
});
exports.Login = (0, mongoose_1.model)('login', loginSchema);
