/** @format */
// libraries
import { createServer } from 'http'
import { application, Application, json, Request, Response, urlencoded } from 'express'
// src-api
import { environment, i, punchClock } from './src'
const impAPI: Application = application
impAPI.use(urlencoded({ extended: true }))
impAPI.use(json())

// place routes below this comment

// GET requests
impAPI.get(`/get`, async (request: Request, response: Response) => {
  i(`api`, `${punchClock()}:GET /get`)
  return response.status(200).json({ page: `domain root` }).send()
})
// place routes above this comment

const httpServer = createServer(impAPI)
i(`api`, `Starting server on '${environment.apiServer.host}:${environment.apiServer.port}'`)
httpServer.listen(environment.apiServer.port, async () => i(`api`, `Express.js server is listening`))
