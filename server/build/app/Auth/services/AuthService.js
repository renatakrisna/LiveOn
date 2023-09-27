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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthError_1 = __importDefault(require("../exceptions/AuthError"));
const config_1 = __importDefault(require("../../../config"));
const redis_1 = require("../../../lib/redis");
class AuthService {
    signIn(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = {
                id: 123,
                email: "admin@admin.com",
                password: "secret",
                fullName: "Admin",
            };
            if (email !== user.email || password !== user.password) {
                throw new AuthError_1.default("Credênciais inválidas");
            }
            const { id, fullName } = user;
            // Momento da criação do token
            const token = jsonwebtoken_1.default.sign({ id }, config_1.default.auth.secret, {
                expiresIn: config_1.default.auth.expiresIn,
            });
            return {
                user: {
                    id,
                    fullName,
                    email,
                },
                token,
            };
        });
    }
    signOut(token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setTokenBlacklisted(token);
        });
    }
    validateToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (yield this.isTokenBlacklisted(token))
                    throw new AuthError_1.default("A sua sessão expirou, realize o login novamente!");
                const decoded = jsonwebtoken_1.default.verify(token, config_1.default.auth.secret);
                return decoded.id;
            }
            catch (error) {
                throw new AuthError_1.default("Token inválido");
            }
        });
    }
    isTokenBlacklisted(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const blacklistedToken = yield (0, redis_1.getValue)(`tokens:invalidated:${token}`);
            return !!blacklistedToken;
        });
    }
    setTokenBlacklisted(token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, redis_1.setValue)(`tokens:invalidated:${token}`, true);
        });
    }
}
exports.default = AuthService;
