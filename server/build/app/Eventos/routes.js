"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = __importDefault(require("../Auth/middlewares/AuthMiddleware"));
const EventosController_1 = __importDefault(require("../Eventos/controllers/EventosController"));
const routes = (0, express_1.Router)();
routes.get('/eventos', AuthMiddleware_1.default, EventosController_1.default.index);
exports.default = routes;
