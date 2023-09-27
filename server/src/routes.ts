import { Router } from 'express'

import authRoutes from './app/Auth/routes'
import userRoutes from './app/Users/routes'
import eventosRoutes from './app/Eventos/routes'

const routes = Router()

routes.use(authRoutes).use(userRoutes).use(eventosRoutes)

export default routes
