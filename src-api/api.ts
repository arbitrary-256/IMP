/** @format */
// libraries
import { config } from 'dotenv'
import * as express from 'express'
import { Connection, Query } from 'mysql2'
import { configureMaria } from './src/configureMaria'
import { connectToMaria } from './src/connectToMaria'
// use .env values in this file
config()
/**
 * connects to the MariaDB database
 * @param asRoot optional boolean
 * @returns a root connection ready to use
 */
const activateConnection: Function = async (asRoot?: boolean): Promise<Connection | undefined> => {
  try {
    const connection: Connection = await connectToMaria(configureMaria(asRoot))
    return connection
  } catch (error) {
    console.log(`error: ${error}`)
    return undefined
  }
}
/**
 * lists databases
 * @param asRoot optional boolean
 * @returns a list of databases as a string[], or JSON, hopefully
 */
const showDatabases: Function = async (asRoot?: boolean): Promise<void> => {
  console.log(`showing Databases`)
  const connection = await activateConnection(asRoot)
  // create a query on the connection to SHOW DATABASES
  const showDatabasesQuery: Query = connection
    .query(`SHOW DATABASES`)
    .on('error', (error: Error) => {
      console.error(`error showing databases:
${error}`)
    })
    .on('result', (row: any) => {
//      console.log(`row:
//${ row }`)
    })
  connection.execute(showDatabasesQuery)
  connection.end()
}

// create express application
const apiServer: express.Application = express.application
// enable json responses
apiServer.use(express.json)

// endpoints

// create a GET endpoint at / to show available routes
apiServer.get(`/`, async (request: express.Request, response: express.Response) => {
  console.log(`someone asked for / (to show routes)`)
  response.status(200).json({
    message: `available routes:`,
    routes: [
      `/`,
      `/hello`,
      `/showDatabases`
    ]
  })
})

// create GET endpoint at `/hello`
apiServer.get(`/hello`, (req: express.Request, res: express.Response): void => {
  console.log(`someone asked for /hello`)
  res.status(200).json({message: `/hey there, stranger!`}).send()
})

// create a GET endpoint to show databases
apiServer.get(`/showDatabases`, async (request: express.Request, response: express.Response) => {
  console.log(`someone asked for /showDatabases`)
  try {
    response = await showDatabases(false)
    response.json({ message: response.json }).send()
  } catch (error) {
    response.send(`error: ${error}`)
  }  
})  

// handle apiServer errors to prevent crashes
apiServer.use((err: Error, request: express.Request, res: express.Response, next: express.NextFunction): void => {
  console.log(`error: ${err}`)
  res
    .status(500)
    .json({
      message: `error: ${err}`
    })
    .send()
})

// start server
apiServer.listen(parseInt(`${process.env.REACT_APP_APIPORT}`), () => {
  console.log(`${new Date().toLocaleString()}: API listening on port ${process.env.REACT_APP_APIPORT}`)
})
