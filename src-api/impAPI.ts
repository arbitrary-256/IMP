/** @format */
import { application, Application, Response, Request } from 'express'
import { deleteRouter, environment, getRouter, postRouter, patchRouter, putRouter } from './index'

const impAPI: Application = application
try {
  impAPI
    .all(`*`)
    .route(`*`)
    .head((request: Request, response: Response) =>
      response
        .header(`Access-Control-Allow-Origin`, `*`)
        .header(`Access-Control-Allow-Methods`, `GET, PATCH, POST, PUT, DELETE`)
        .header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`)
        .header(`Access-Control-Allow-Credentials`, `true`)
        .header(`Access-Control-Max-Age`, `86400`)
        .header(`Content-Type`, `application/json`)
    )
  impAPI
    .use(`/delete`, deleteRouter)
    .use(`/get`, getRouter)
    .use(`/post`, postRouter)
    .use(`/patch`, patchRouter)
    .use(`/put`, putRouter)
    .use(`/`, (request: Request, response: Response) => response.status(200).json({}).send(`impAPI/${request.originalUrl}`))
} catch (error) {
  console.log(error)
} finally {
  impAPI.listen(environment.apiPort, () => console.log(`impAPI is running on port ${environment.apiPort}`))
}
