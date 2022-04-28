/** @format */
// libraries
import * as dotenv from 'dotenv'
import * as express from 'express'
// functions
import { checkConnections } from './src/checkConnections'
// connection pools
import { regularPool } from './src/regularPool'
import { rootPool } from './src/rootPool'

dotenv.config()
console.log(process.env.REACT_APP_MARIADBHOST)

console.log(`starting API Server`)
const apiServer: express.Express = express()
const port: number = 3333

apiServer.get(`/pools`, checkConnections([regularPool, rootPool]))

apiServer.listen(port, () => {
  console.log(`API handler is listening on port ${port}.`)
})

