/** @format */
import { Response, Request, Router } from 'express'

export const getRouter: Router = Router()
getRouter.route(`/get`)
getRouter.get(`/get`, (request: Request, response: Response) => {
  response.status(200).send(`you are at impAPI/get`)
})
getRouter.get(`/get/allProducts`, (request: Request, response: Response) => {
  response.status(200).send(`you are at impAPI/get/allProducts/${request.params.name}`)
})
getRouter.get(`/get/productByUPC/:upc`, (request: Request, response: Response) => {
  response.status(200).send(`you are at impAPI/get/productByUPC/:${request.params.id}`)
})
