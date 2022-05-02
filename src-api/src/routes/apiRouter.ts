/** @format */
// libraries
import { Router } from 'express'
// controllers
import { serverHealthCheck } from '../functions/serverHealthCheck'

export const apiRouter = Router()

apiRouter.get(`/ping`, serverHealthCheck())
