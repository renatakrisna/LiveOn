"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = __importDefault(require("../Auth/controllers/AuthController"));
const routes = (0, express_1.Router)();
routes.post('/auth/sign-in', AuthController_1.default.create);
routes.delete('/auth/sign-out', AuthController_1.default.destroy);
exports.default = routes;
