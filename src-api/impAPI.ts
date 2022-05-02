/** @format */
// libraries
import { createServer } from 'http'
import { application, Application, json, NextFunction, Request, Response, urlencoded } from 'express'
// src-api
import { environment, i, punchClock } from './src'
const impAPI: Application = application
impAPI.use((request: Request, response: Response, next: NextFunction) => {
  i(`api`, `METHOD: [${request.method}] - URL: [${request.url}] - IP: [${request.socket.remoteAddress}]`)
  response.on(`finish`, () => i(`api`, `METHOD: [${request.method}] - URL: [${request.url}] - STATUS: [${response.statusCode}] - IP: [${request.socket.remoteAddress}]`))
  next()
})
impAPI.use(urlencoded({ extended: true }))
impAPI.use(json())
impAPI.use((request: Request, response: Response, next: NextFunction) => {
  response.header(`Access-Control-Allow-Origin`, `*`).header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept, Authorization`)
  request.method === `OPTIONS` ? response.header(`Access-Control-Allow-Methods`, `PUT, POST, PATCH, DELETE, GET`).status(200).json({}) : i(`development`, `Request method is not OPTIONS.`)
  next()
})

// place routes below this comment

// GET requests
impAPI.get(`/`, (request: Request, response: Response) => {
  i(`api`, `${punchClock()}:GET /`)
  response.status(200)
  response.json({ page: `domain root` })
  response.send()
})
impAPI.get(`/about`, (request: Request, response: Response) => {
  i(`api`, `${punchClock()}:GET /about`)
  response.status(200)
  response.json({ page: `about` })
  response.send()
})
impAPI.get(`/hello`, (request: Request, response: Response) => {
  i(`api`, `${punchClock()}:GET /hello`)
  response.status(200)
  response.json({ message: `Hello ${request.query.name}`, page: `hello` })
  response.send()
})
// POST requests
impAPI.post(`/create`, (request: Request, response: Response) => {
  i(`api`, `${punchClock()}:POST /create`)
  request.body = {
    ...request.body,
    page: `create`
  }
  const { name, email, password } = request.body
  !(name || email || password) ? response.status(400).json({ error: `Invalid request body` }) : response.status(201).json({ message: `User created successfully` })
})
impAPI.post(`/post`, (request: Request, response: Response): void => {
  i(`api`, `${punchClock()}:POST /post`)
  request.body = {
    ...request.body,
    page: `post`
  }
  response.status(200)
  response.json({
    message: `Post ${request.query.id}`
  })
  response.send()
})
// place routes above this comment

const httpServer = createServer(impAPI)
i(`api`, `Server will run at '${environment.apiServer.host}'`)
i(`api`, `Server will listen to port '${environment.apiServer.port}'`)
httpServer.listen(environment.apiServer.port, () => i(`api`, `Express.js server is listening`))
