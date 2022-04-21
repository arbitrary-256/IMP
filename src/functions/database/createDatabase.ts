/** @format */
import dotenv from 'dotenv'
import { connectAsRoot } from './connectAsRoot'
import { checkForIMPDatabase } from './checkForIMPDatabase'
/**
 * creates a MariaDB database
 * @returns a promise that resolves when the table is created in the database
 */
export const createDatabase = async (): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let databaseExists = await checkForIMPDatabase()
  dotenv.config()
  const createDatabaseResult: string = await connectAsRoot.query(`CREATE DATABASE IF NOT EXISTS ( ${process.env.IMPDATABASE} )`)
  console.log(createDatabaseResult)
  connectAsRoot.end()
}
