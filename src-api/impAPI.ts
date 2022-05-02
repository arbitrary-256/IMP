/** @format */
// libraries
import { application, Application, Request, Response } from 'express'
// our code
import { environment } from './src/utility'
import { i } from './src/logs'

const impAPI: Application = application
impAPI.listen(environment.apiServer.port, () => i(`api`, `Listening on ${environment.apiServer.host}:${environment.apiServer.port}`))

impAPI.routes.get(`/`, (request: Request, response: Response) => {
  i(`routing`, `${request.url}`, { ...request })
  response.send(`ollie, ollie, oxen-free`)
})
