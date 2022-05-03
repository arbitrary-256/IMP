/** @format */
import { application, Application, Response, Request } from 'express'
import { deleteRouter, environment, getRouter, postRouter, putRouter, updateRouter } from './src'

const impAPI: Application = application
impAPI
  .route(`*`)
  .head((request: Request, response: Response) =>
    response
      .header(`Access-Control-Allow-Origin`, `*`)
      .header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`)
      .header(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`)
      .header(`Access-Control-Allow-Credentials`, `true`)
      .header(`Access-Control-Max-Age`, `86400`)
  )
impAPI
  .use(`/delete`, deleteRouter)
  .use(`/get`, getRouter)
  .use(`/post`, postRouter)
  .use(`/put`, putRouter)
  .use(`/update`, updateRouter)
  .get(`/`, (request: Request, response: Response) => response.status(200).send(`this is impAPI/${request.originalUrl}`))
impAPI.listen(environment.apiPort, () => console.log(`impAPI is running on port ${environment.apiPort}`))
console.log(impAPI._router.stack)
