/** @format */
// libraries
import { createConnection, Connection } from 'mysql'
import { configureMaria } from './configureMaria'
/**
 * connects to MariaDB as the given user
 * @param asRoot optional boolean
 * @returns mysql2.Connection
 */
export const connectToMaria: Function = async (asRoot?: boolean): Promise<Connection> => {
  // one-liner without brackets:
  // createConnection(configureMariaAs(asUser))
  const configuration = configureMaria(asRoot)
  const connection: Connection = createConnection(configuration)
  return connection
}
