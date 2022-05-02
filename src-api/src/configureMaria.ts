/** @format */
// libraries
import { config } from 'dotenv'
import { ConnectionOptions } from 'mysql2'
// load .env file
config()
// get values from environment variables
const getHost: Function = (): string => `imp-${process.env.REACT_APP_MARIADBHOST}-1`
const getMariaPort: Function = (): number => parseInt(`${process.env.REACT_APP_MARIADBPORT}`)
const getDatabase: Function = (): string => `${process.env.REACT_APP_DATABASENAME}`
const getUser: Function = (): string => `${process.env.REACT_APP_USER}`
const getPassword: Function = (): string => `${process.env.REACT_APP_PASSWORD}`
const getRootUser: Function = (): string => `${process.env.REACT_APP_ROOTUSER}`
const getRootPassword: Function = (): string => `${process.env.REACT_APP_ROOTPASSWORD}`
/**
 * creates a MariaDB connection configuration for the IMP database
 * @param asRoot optional boolean boolean 
 * @returns a mysql2.ConnectionOptions for the user passed in
 */
export const configureMaria: Function = (asRoot?: boolean): ConnectionOptions => {
  const rootUser: string = getRootUser()
  const rootPassword: string = getRootPassword()
  const regularUser: string = getUser()
  const regularPassword: string = getPassword()
  const mariaConfig: ConnectionOptions = {
    host: getHost(),
    port: getMariaPort(),
    database: getDatabase(),
    user: asRoot === true ? rootUser : regularUser,
    password: asRoot === true ? rootPassword : regularPassword
  }
  return mariaConfig
}
