import { Router } from 'express'

import authMiddleware from '../Auth/middlewares/AuthMiddleware'

import users from '../Users/controllers/UsersController'

const routes = Router()

routes.get('/users', authMiddleware ,users.index)

export default routes
