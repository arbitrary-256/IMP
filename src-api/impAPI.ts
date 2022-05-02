/** @format */
// libraries
import { application, Application, json, Request, Response, /*Router,*/ urlencoded } from 'express'
// utility
import { environment } from './src/utility'
// logs
import { i } from './src/logs'
// connection
import {} from './src/connection'
// express
import {} from './src/express'

const impAPI: Application = application
// do stuff with the api server, like add routes
// routers
impAPI.use(urlencoded)
impAPI.use(json)
// const getRouter: Router = Router()
// impAPI.use(getRouter)
// getRouter.get(`/get`, (request: Request, response: Response) => {
//   response
//     .status(200)
//     .json({
//       message: `you GETted at ${request.url}`
//     })
//     .send()
// })
// getRouter.get(`/hello`, (request: Request, response: Response) => {
//   i(`routing`, `/hello`)
//   response.status(200).json({ message: `Hello, world!` }).send()
// })
impAPI.get(`*`, (request: Request, response: Response) => {
  i(`routing`, `${request.url}`, { ...request })
  response.status(200).json({ message: `Hello, world!` }).send()
})
impAPI.listen(environment.apiServer.port, () => i(`operation`, `Listening on ${environment.apiServer.host}:${environment.apiServer.port}`))
