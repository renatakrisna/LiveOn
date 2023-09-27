"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.default = AuthError;
