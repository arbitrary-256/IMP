/** @format */
import { Response, Request, Router } from 'express'

export const postRouter: Router = Router()
postRouter.route(`/post`)
postRouter.post(`/post`, (request: Request, response: Response) => {
  response.status(200).send(`you are at impAPI/post`)
})
