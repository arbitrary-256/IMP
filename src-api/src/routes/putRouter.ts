/** @format */
import { Response, Request, Router } from 'express'

export const putRouter: Router = Router()
putRouter.route(`/put`)
putRouter.get(`/put`, (request: Request, response: Response) => {
  response.status(200).send(`you are at impAPI/put`)
})
