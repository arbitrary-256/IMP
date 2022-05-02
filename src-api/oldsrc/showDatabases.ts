/** @format */
// libraries
import { Query } from 'mysql'
// other api functions
import { activateConnection } from './activateConnection'

/**
 * lists databases
 * @param asRoot optional boolean
 * @returns a list of databases as a string[], or JSON, hopefully
 */
export const showDatabases: Function = async (asRoot?: boolean): Promise<void> => {
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
      console.log(`row:
${row}`)
    })
  connection.execute(showDatabasesQuery)
  connection.end()
}
