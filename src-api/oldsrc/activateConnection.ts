/** @format */
// libraries
import { Connection } from 'mysql'
// other api functions
import { configureMaria } from './configureMaria'
import { connectToMaria } from './connectToMaria'

/**
 * connects to the MariaDB database
 * @param asRoot optional boolean
 * @returns a root connection ready to use
 */
export const activateConnection: Function = async (asRoot?: boolean): Promise<Connection | undefined> => {
  try {
    const connection: Connection = await connectToMaria(configureMaria(asRoot))
    return connection
  } catch (error) {
    console.log(`error: ${error}`)
    return undefined
  }
}
