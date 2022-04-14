/** @format */
// libraries
import mariadb from 'mariadb'
import dotenv from 'dotenv'
/**
 * creates a connection to the database with appropriate credentials
 * @returns a connection to the database
 */
const mariaCredentials: Function = (): mariadb.ConnectionConfig => {
  dotenv.config()
  return {
    // the host address of the mariadb or mysql server - defaults to port 3306, set as ${IP}:${PORT}
    host: process.env.IMPHOST,
    // the user name to authenticate as
    user: process.env.IMPUSERNAME,
    // the password to use to authenticate
    password: process.env.IMPPASSWORD,
    // the database to connect to
    database: process.env.IMPDATABASE
  }
}
export const connection: mariadb.Connection = await mariadb.createConnection(mariaCredentials())
