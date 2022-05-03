/** @format */
import { Response, Request, Router } from 'express'

export const updateRouter: Router = Router()
updateRouter.route(`/update`)
updateRouter.get(`/update`, (request: Request, response: Response) => {
  response.status(200).send(`you are at impAPI/update`)
})
