/** @format */
import { Response, Request, Router } from 'express'

export const deleteRouter: Router = Router()
deleteRouter.route(`*`)
deleteRouter.get(`/`, (request: Request, response: Response) => response.status(200).send(`impAPI/delete`))
deleteRouter.delete(`/delete/productByUPC:/upc`, (request: Request, response: Response) => response.status(200).send(`impAPI/delete/product`))
