/** @format */
// libraries
import { config } from 'dotenv'
import * as express from 'express'
import * as sql from 'mysql2'

// initial server setup
console.log(`starting IMP api.ts logs:`)
config() // load .env file

// make timestamps function
const timestamp: Function = () => new Date().toLocaleString()

// create sql.ConnectionOptions from environment variables
const connectAs: Function = (user: `root` | `regular`): sql.ConnectionOptions => {
  // timestamp log
  console.log(`conifguring database connection for ${user} at ${timestamp()}`)
  return {
    host: `imp-${process.env.REACT_APP_MARIADBHOST}-1`,
    user: user === `root` ? process.env.REACT_APP_ROOTUSER.toString() : process.env.REACT_APP_USER.toString(),
    password: user === `root` ? process.env.REACT_APP_ROOTPASSWORD.toString() : process.env.REACT_APP_PASSWORD.toString(),
    database: process.env.REACT_APP_DATABASENAME,
    port: 3306,
    multipleStatements: true,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
    connectTimeout: 10000,
    dateStrings: true,
    supportBigNumbers: true,
    bigNumberStrings: true
  }
}

// create Express server Application
const apiServer: express.Application = express()

// create api response headers
apiServer.head(`/`, (req: express.Request, res: express.Response) => {
  res.set(`Content-Type`, `application/json`)
  res.set(`Access-Control-Allow-Origin`, `*`)
  res.set(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`)
  res.set(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept, Authorization`)
  res.set(`Access-Control-Allow-Credentials`, `true`)
  res.set(`Access-Control-Max-Age`, `86400`)
  res.send(`OK`)
})

// create an endpoint for the api to list it's routes at route `/routes`
apiServer.get(`/routes`, (req: express.Request, res: express.Response): void => {
  // timestamp in console.log
  console.log(`requesting route list at ${timestamp()}`)
  res.json({
    routes: [`/routes`, `/checkConnection`]
  })
  console.log(`responded to route list at ${timestamp()}`)
})

// create an endpoint for the api to validate an sql connection
apiServer.get(`/checkConnection`, (req: express.Request, res: express.Response): void => {
  // timestamp in console.log
  console.log(`validating connection at ${timestamp()}`)
  // create a connection to the database as root user
  const rootConnection: sql.Connection = sql.createConnection(connectAs(`root`))

  rootConnection.connect((err: Error) => {
    // if there is an error, log it and return a 500 status code
    if (err) {
      console.log(`error connecting to database at ${timestamp()}`)
      console.log(err)
      res.status(500).send(`error connecting to database`)
    } else {
      // if there is no error, log the connection and return a 200 status code
      console.log(`connected to database at ${timestamp()}`)
      res.status(200).send(`connected to database`)
    }
  })

  // close root connection
  rootConnection.end()

  let rootResult: boolean | undefined = undefined
  // end all connections
  rootConnection.end()
  // console.log results
  rootResult && console.log(`connected as root: ${rootResult}`)
})

apiServer.listen(process.env.REACT_APP_APIPORT, () => {
  console.log(`IMP API server listening on port ${process.env.REACT_APP_APIPORT}`)
})
