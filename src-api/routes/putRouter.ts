/** @format */
import { Response, Request, Router } from 'express'

export const putRouter: Router = Router()
putRouter.route(`*`)
putRouter
  .put(`/`, (request: Request, response: Response) => response.json(`PUT impAPI/`).send(`PUT impAPI/`))
  .put(`/put`, (request: Request, response: Response) => response.json(`PUT impAPI/put`).send(`PUT impAPI/put`))
  .put(`/put/product/:upc`, (request: Request, response: Response) =>
    response.json(`PUT impAPI/put/product/${request.params.upc}`).send({
      response: {
        apiPath: `PUT impAPI/put/product/${request.params.upc}`
      }
    })
  )
