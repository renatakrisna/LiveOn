"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthService_1 = __importDefault(require("../../Auth/services/AuthService"));
const AuthError_1 = __importDefault(require("../../Auth/exceptions/AuthError"));
class AuthController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const { user, token } = yield new AuthService_1.default().signIn(email, password);
                // Em vez de passar o token no body da requisição eu adicionei no header para deixar mais profissional
                res.setHeader("token", token);
                return res.status(200).json({ user });
            }
            catch (error) {
                if (error instanceof AuthError_1.default)
                    return res.status(401).send();
                return res.status(500).json({ error });
            }
        });
    }
    destroy(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            token && (yield new AuthService_1.default().signOut(token));
            return res.status(204).send();
        });
    }
}
exports.default = new AuthController();
