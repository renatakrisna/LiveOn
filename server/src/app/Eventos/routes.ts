import { Router } from 'express'

import authMiddleware from '../Auth/middlewares/AuthMiddleware'

import eventosController from '../Eventos/controllers/EventosController'

const routes = Router()

routes.get('/eventos', authMiddleware ,eventosController.index)

export default routes
