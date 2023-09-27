import { Request, Response } from 'express'

class EventosController {
  async index(_req: Request, res: Response): Promise<Response> {
    const users = [{ id: '456', email: 'jhondoe@exemple.com' }]

    return res.status(200).json(users)
  }
}

export default new EventosController()
