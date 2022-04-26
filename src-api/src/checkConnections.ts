/** @format */
// libraries
import { Connection, createConnection, Pool, QueryError } from 'mysql2'

/**
 * checks connection to the MariaDB container
 */
export const checkConnections: Function = (regular: Pool, root: Pool): { root: boolean; regular: boolean } => {
  let connectionResults: { root: boolean; regular: boolean } = { root: false, regular: false }
  // get a connection from each pool
  const rootConnection: Connection = createConnection(root.config)
  const regularConnection: Connection = createConnection(regular.config)
  // check if the connection is successful
  rootConnection.connect((error: QueryError | null): void => {
    error ? console.error(`Error connecting to the root pool: ${error.message}`) : connectionResults.root = true
    rootConnection.end()
  })
  regularConnection.connect((error: QueryError | null): void => {
    error ? console.error(`Error connecting to the regular pool: ${error.message}`) : connectionResults.regular = true
    regularConnection.end()
  })
  return connectionResults
}
