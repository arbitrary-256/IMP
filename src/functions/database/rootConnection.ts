/** @format */
// interfaces
import { IIMPEnvFile } from '../../interfaces/IIMPEnvFile'
// libraries
import mariadb from 'mariadb'
import dotenv from 'dotenv'

dotenv.config()

const envs: IIMPEnvFile = {
  hostnameString: process.env.IMPMARIADBHOST!,
  portNumber: parseInt(process.env.IMPCONTAINERPORT!),
  rootUserNameString: process.env.IMPROOTUSERNAME!,
  rootPasswordString: process.env.IMPROOTPASSWORD!,
  userNameString: ``,
  passwordString: ``,
  databaseNameString: process.env.IMPDATABASE!
}

/**
 * creates a connection to the database with root credentials
 * @returns a connection to the database
 */
const mariaRootCredentials: Function = (): mariadb.ConnectionConfig => {
  return {
    // the host address of the mariadb or mysql server - defaults to port 3306, set as ${IP}:${PORT}
    host: envs.hostnameString,
    // the user name to authenticate as
    user: envs.rootUserNameString,
    // the SQL connection port of the mariadb or mysql server
    port: envs.portNumber,
    // the password to use to authenticate
    password: envs.rootPasswordString,
    // the database to connect to
    database: envs.databaseNameString
  }
}
export const rootConnection: mariadb.Connection = await mariadb.createConnection(mariaRootCredentials())
