import jwt from "jsonwebtoken";

import AuthError from "../exceptions/AuthError";

import config from "../../../config";
import { getValue, setValue } from "../../../lib/redis";

export default class AuthService {
  async signIn(
    email: string,
    password: string
  ): Promise<{ user: object; token: string }> {
    const user = {
      id: 123,
      email: "admin@admin.com",
      password: "secret",
      fullName: "Admin",
    };

    if (email !== user.email || password !== user.password) {
      throw new AuthError("Credênciais inválidas");
    }

    const { id, fullName } = user;

    // Momento da criação do token
    const token = jwt.sign({ id }, config.auth.secret, {
      expiresIn: config.auth.expiresIn,
    });

    return {
      user: {
        id,
        fullName,
        email,
      },
      token,
    };
  }

  async signOut(token: string): Promise<void> {
    await this.setTokenBlacklisted(token);
  }

  async validateToken(token: string): Promise<string> {
    try {
      if (await this.isTokenBlacklisted(token))
        throw new AuthError("A sua sessão expirou, realize o login novamente!");

      const decoded = jwt.verify(token, config.auth.secret) as { id: string };

      return decoded.id;
    } catch (error) {
      throw new AuthError("Token inválido");
    }
  }

  private async isTokenBlacklisted(token: string): Promise<boolean> {
    const blacklistedToken = await getValue(`tokens:invalidated:${token}`);

    return !!blacklistedToken;
  }

  private async setTokenBlacklisted(token: string): Promise<void> {
    await setValue(`tokens:invalidated:${token}`, true);
  }
}
