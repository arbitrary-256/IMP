/** @format */
import { Response, Request, Router } from 'express'

export const getRouter: Router = Router()
getRouter.route(`*`)
getRouter
  .get(`/`, (request: Request, response: Response) => response.status(200).send(`GET impAPI/`))
  .get(`/get`, (request: Request, response: Response) => response.status(200).send(`GET impAPI/get`))
  .get(`/get/allProducts`, (request: Request, response: Response) => response.status(200).send(`GET impAPI/get/allProducts`))
  .get(`/get/productByUPC/:upc`, (request: Request, response: Response) => response.status(200).send(`GET impAPI/get/productByUPC/:${request.params.upc}`))
