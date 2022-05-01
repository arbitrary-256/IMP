/** @format */
// libraries
import { config } from 'dotenv'
import * as express from 'express'
import { Connection, Query } from 'mysql2'
import { mariaConfigureAs } from './src/mariaConfigureAs'
import { mariaConnectAs } from './src/mariaConnectAs'
// use .env values in this file
config()
/**
 * connects to the MariaDB database as the root user in .env
 * @returns a root connection ready to use
 */
const getConnection: Function = async (user: `root` | `regular`): Promise<Connection | undefined> => {
  try {
    console.log(`awaiting root connection promise`)
    const connection: Connection = await mariaConnectAs(mariaConfigureAs(`root`))
    console.log(`connected to MariaDB as root user: ${connection.config.user}`)
    return connection
  } catch (error) {
    console.log(`error: ${error}`)
    return undefined
  }
}

const showDatabases: Function = async (user: `root` | `regular`): Promise<void> => {
  rootConnection = await getConnection(user)
  console.log(`getting database names`)
  const showDatabasesQuery: Query = rootConnection.query(`SHOW DATABASES`).on('error', (error: Error) => {
    console.log(`error: ${error}`)
  }).on('result', (row: any) => {
    console.log(`database: ${row.Database}`)
  })
  // add basic listeners to the connection
  rootConnection.on('end', (): void => {
    console.log(`hit 'end' event on query`)
  }).on('error', (error: Error): void => {
    console.log(`hit 'error' event on query`)
    console.log(`error: ${error}`)
  }).on('fields', (fields: any): void => {
    console.log(`hit 'fields' event on query`)
    console.log(`fields: ${fields}`)
  }).on('result', (row: any): void => {
    console.log(`hit 'result' event on query`)
    console.log(`row: ${row}`)
  }).on('resultset', (resultSet: any): void => {
    console.log(`hit 'resultset' event on query`)
    console.log(`resultSet: ${resultSet}`)
  })
  // use rootConnection to execute the sql query
  console.log(`executing query: ${showDatabasesQuery.sql}`)
  rootConnection.execute(showDatabasesQuery)
}

console.log(`starting IMP api.ts logs:`)

// let regularConnection: Connection
showDatabases()


let rootConnection: Connection = getConnection(`root`)
console.log(rootConnection)

// const disconnectUser: Function = (connectionToEnd: Connection): void => {
//   try {
//     connectionToEnd.end()
//     console.log(`disconnected from MariaDB as user: ${connectionToEnd.threadId}`)
//   } catch (error) {
//     console.log(`error: ${error}`)
//   }
// }

// disconnectUser(rootConnection)
// disconnectUser(regularConnection)

// create express application
const apiServer: express.Application = express.application
// enable json responses
apiServer.use(express.json)
// create api response header
apiServer.head(`/`, (req: express.Request, res: express.Response) => {
  res.set(`Content-Type`, `application/json`)
  res.set(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE`)
  res.send(`OK`)
})
// create GET endpoint at `/hello`
apiServer.get(`/hello`, (req: express.Request, res: express.Response): void => {
    res.status(200).send(`/hey there!`)
  console.log(`printed hello world`)
})
// create GET endpoint at /showRoutes
apiServer.get(`/showRoutes`, (req: express.Request, res: express.Response): void => {
    res.status(200)
        .json({ routes: [`/hello`, `/routes`] })
        .send()
    console.log(`returned showRoutes JSON`)
})
apiServer.get(`/beRoot`, async (req: express.Request, res: express.Response): Promise<void> => getConnection(`root`))
apiServer.get(`/beUser`, async (req: express.Request, res: express.Response): Promise<void> => getConnection(`regular`))

// handle apiServer errors to prevent crashes
apiServer.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction): void => {
  console.log(`error: ${err}`)
  res.status(500).send(`error: ${err}`)
})
// handle api server responses that are valid without errors
apiServer.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
  res.status(200).send(`OK`).json(req.body)
})
// handle responses for routes with no matching path by returning a 404 error page
apiServer.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
  res.status(404).send(`Error 404: page ${req.url} not found`)
})
// start server
apiServer.listen(parseInt(`${process.env.REACT_APP_APIPORT}`), () => {
  console.log(`${new Date().toLocaleString()}: IMP API server listening on port ${process.env.REACT_APP_APIPORT}`)
})
