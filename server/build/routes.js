"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("./app/Auth/routes"));
const routes_2 = __importDefault(require("./app/Users/routes"));
const routes_3 = __importDefault(require("./app/Eventos/routes"));
const routes = (0, express_1.Router)();
routes.use(routes_1.default).use(routes_2.default).use(routes_3.default);
exports.default = routes;
