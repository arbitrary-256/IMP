/** @format */
import { config } from 'dotenv'
config()
const mariaDBHost = process.env.REACT_APP_MARIADBHOST || new Error(`REACT_APP_MARIADBHOST not defined in .env file`)
const mariaDBDatabase = process.env.REACT_APP_MARIADBDATABASENAME || new Error(`REACT_APP_MARIADBDATABASENAME not defined in .env file`)
const mariaDBRegularUser = process.env.REACT_APP_MARIADBUSER || new Error(`REACT_APP_MARIADBUSER not defined in .env file`)
const mariaDBRegularPassword = process.env.REACT_APP_MARIADBPASSWORD || new Error(`REACT_APP_MARIADBPASSWORD not defined in .env file`)
const mariaDBRootUser = process.env.REACT_APP_MARIADBROOTUSER || new Error(`REACT_APP_MARIADBROOTUSER not defined in .env file`)
const mariaDBRootPassword = process.env.REACT_APP_MARIADBROOTPASSWORD || new Error(`REACT_APP_MARIADBROOTPASSWORD not defined in .env file`)
const mariaDBPort = process.env.REACT_APP_MARIADBPORT || new Error(`REACT_APP_MARIADBPORT not defined in .env file`)
const apiPort = process.env.REACT_APP_APIPORT || new Error(`REACT_APP_APIPORT not defined in .env file`)
const apiHost = process.env.REACT_APP_APIHOST || new Error(`REACT_APP_APIHOST not defined in .env file`)
const mariaRegular = {
  user: mariaDBRegularUser,
  pass: mariaDBRegularPassword
}
const mariaRoot = {
  user: mariaDBRootUser,
  pass: mariaDBRootPassword
}
const mariaServer = {
  host: mariaDBHost,
  port: mariaDBPort,
  database: mariaDBDatabase
}
const apiServer = {
  host: apiHost,
  port: apiPort
}
export const environment = {
  mariaRegular,
  mariaRoot,
  mariaServer,
  apiServer
}
