import { NextFunction, Request, Response } from "express";
import AuthService from "../services/AuthService";
import AuthError from "../exceptions/AuthError";

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const [, token] = authHeader.split(" ");

  try {
    const id = await new AuthService().validateToken(token);
    req.user = { id, token };
  } catch (error) {
    if (error instanceof AuthError)
      return res.status(401).json({ error: error.message });
    return res.status(500).json(error);
  }

  return next();
};
