/** @format */
// libraries
import { config } from 'dotenv'
import { ConnectionOptions } from 'mysql2'
// load .env file
config()
// get values from environment variables
const getHost: Function = (): string => `imp-${process.env.REACT_APP_MARIADBHOST}-1`
// const getMariaPort: Function = (): number => parseInt(`${process.env.REACT_APP_MARIADBPORT}`) ?? 3306
const getDatabase: Function = (): string => `${process.env.REACT_APP_DATABASENAME}`
const getUser: Function = (): string => `${process.env.REACT_APP_USER}`
const getPassword: Function = (): string => `${process.env.REACT_APP_PASSWORD}`
const getRootUser: Function = (): string => `${process.env.REACT_APP_ROOTUSER}`
const getRootPassword: Function = (): string => `${process.env.REACT_APP_ROOTPASSWORD}` ?? `defaultrootpassword`
/**
 * creates a MariaDB connection configuration for the IMP database
 * @param mariaUser either `root` or `regular`
 * @returns a mysql2.ConnectionOptions for the user passed in
 */
export const mariaConfigureAs: Function = (mariaUser: `root` | `regular`): ConnectionOptions => {
  const mariaConfig: ConnectionOptions = {
    host: getHost(),
    // port: getMariaPort(),
    database: getDatabase(),
    user: mariaUser === `root` ? getRootUser() : getUser(),
    password: mariaUser === `root` ? getRootPassword() : getPassword()
  }
  console.log(`MariaDB connection configuration: ${JSON.stringify(mariaConfig)}`)
  return mariaConfig
}
