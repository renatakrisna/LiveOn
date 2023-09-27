"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: Number(process.env.PORT) || 3000,
    redis: {
        url: process.env.REDIS_URL || 'redis://localhost:6379',
    },
    auth: {
        secret: process.env.AUTH_SECRET || "secret",
        expiresIn: process.env.AUTH_EXPIRES_IN || "7d",
    },
};
