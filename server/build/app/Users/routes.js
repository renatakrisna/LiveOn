"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = __importDefault(require("../Auth/middlewares/AuthMiddleware"));
const UsersController_1 = __importDefault(require("../Users/controllers/UsersController"));
const routes = (0, express_1.Router)();
routes.get('/users', AuthMiddleware_1.default, UsersController_1.default.index);
exports.default = routes;
