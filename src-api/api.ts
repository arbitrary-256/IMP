/** @format */
// libraries
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as http from 'http'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as bodyParser from 'body-parser'
import { config } from 'dotenv'
import { application, Application, Router } from 'express'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as mysql from 'mysql'
// express pieces
// import { apiRouter } from './src/routes/apiRouter'
// use .env values in this file
config()
const apiPort = parseInt(process.env.REACT_APP_APIPORT!)
// create express application
const apiServer: Application = application

// start api server
apiServer.listen(apiPort, () => {
  console.log(`${new Date().toLocaleString()}: API listening on port ${apiPort}`)
})
