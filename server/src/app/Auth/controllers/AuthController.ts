import { Request, Response } from "express";
import AuthService from "../../Auth/services/AuthService";
import AuthError from "../../Auth/exceptions/AuthError";

class AuthController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const { user, token } = await new AuthService().signIn(email, password);

      // Em vez de passar o token no body da requisição eu adicionei no header para deixar mais profissional
      res.setHeader("token", token);
      return res.status(200).json({ user });
    } catch (error) {
      if (error instanceof AuthError) return res.status(401).send();

      return res.status(500).json({ error });
    }
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    const token: string | undefined = req.headers.authorization?.split(' ')[1]
    token && await new AuthService().signOut(token);
    return res.status(204).send()
  }
}

export default new AuthController();
