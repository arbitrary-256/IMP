/** @format */
// libraries
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as http from 'http'
import * as bodyParser from 'body-parser'
import { config } from 'dotenv'
import * as express from 'express'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as mysql from 'mysql'
// express pieces
import { apiRouter } from './src/routes/apiRouter'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { serverHealthCheck } from './src/functions/serverHealthCheck'
// use .env values in this file
config()

// create express application
const apiServer: express.Application = express.application

// apiServer should use apiRouter to handle requests
apiServer.use('/api', apiRouter)

// log requests to the router
apiRouter.use((request: express.Request, response: express.Response, next: express.NextFunction) => {
  console.log(`request: ${request.method} ${request.url}`)
  next()
})

// parse request body in the router
apiRouter.use(bodyParser.json())
apiRouter.use(bodyParser.urlencoded({ extended: true }))

// allow connections from any origin
apiRouter.use((request: express.Request, response: express.Response, next: express.NextFunction) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// create a GET endpoint at / to show available routes
apiRouter.get(`/api`, async (request: express.Request, response: express.Response) => {
  console.log(`someone asked for / (to show routes, probably)`)
  response
    .status(200)
    .json({
      message: `available routes:`,
      routes: [`/api`, `/api/hello`]
    })
    .send()
})

// create GET endpoint at `/hello`
apiRouter.get(`/api/hello`, (req: express.Request, res: express.Response): void => {
  console.log(`someone asked for /hello`)
  res.status(200).json({ message: `/hey there, stranger!` }).send()
})

// enable json responses
apiServer.use(express.json)

// start server
apiServer.listen(parseInt(`${process.env.REACT_APP_APIPORT}`), () => {
  console.log(`${new Date().toLocaleString()}: API listening on port ${process.env.REACT_APP_APIPORT}`)
})

export { apiServer }
