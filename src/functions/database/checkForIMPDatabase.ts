/** @format */
import dotenv from 'dotenv'
import { connectAsUser } from './connectAsUser'
/**
 * checks the MariaDB server for a database matching the one in the connection
 * @returns a promise that resolves when the table is created in the database
 */
export const checkForIMPDatabase = async (): Promise<void /* boolean */> => {
  dotenv.config()
  // TODO: parse results, return a boolean
  const checkForDatabaseResult: string = await connectAsUser.query(`SHOW DATABASES LIKE '%${process.env.IMPDATABASE}%'`)
  console.log(checkForDatabaseResult)
  connectAsUser.end()
}
