/** @format */
import { Response, Request, Router } from 'express'

export const deleteRouter: Router = Router()
deleteRouter.route(`/delete`)
deleteRouter.get(`/delete`, (request: Request, response: Response) => {
  response.status(200).send(`you are at impAPI/delete`)
})
