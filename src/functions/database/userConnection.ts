/** @format */
// interfaces
import { IIMPEnvFile } from '../../interfaces/IIMPEnvFile'
// libraries
import mariadb from 'mariadb'
import dotenv from 'dotenv'

dotenv.config()

const userEnvs: IIMPEnvFile = {
  hostnameString: process.env.IMPMARIADBHOST!,
  portNumber: parseInt(process.env.IMPCONTAINERPORT!),
  rootUserNameString: ``,
  rootPasswordString: ``,
  userNameString: process.env.IMPUSERNAME!,
  passwordString: process.env.IMPPASSWORD!,
  databaseNameString: process.env.IMPDATABASE!
}

/**
 * creates a connection to the database with appropriate credentials
 * @returns a connection to the database
 */
const mariaUserCredentials: Function = (): mariadb.ConnectionConfig => {
  return {
    // the host address of the mariadb or mysql server
    host: userEnvs.hostnameString,
    // the SQL connection port of the mariadb or mysql server
    port: userEnvs.portNumber,
    // the user name to authenticate as
    user: userEnvs.userNameString,
    // the password to use to authenticate
    password: userEnvs.passwordString,
    // the database to connect to
    database: userEnvs.databaseNameString
  }
}

export const userConnection: mariadb.Connection = await mariadb.createConnection(mariaUserCredentials())
