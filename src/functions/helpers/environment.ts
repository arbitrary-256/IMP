/** @format */
import { config } from 'dotenv'
/* import { e } from '../' */
config()
/**
 * extracts numbers from env vars
 * @param envVariable the env var to extract from
 * @returns the number
 */
export const getEnvNumber: Function = (envVariable: string): number => parseInt(envVariable)
export interface IServerInfo {
  host: string
  port: number
}
export interface ISqlServerInfo extends IServerInfo {
  database: string
}
export interface ISqlUserCredentials {
  user: string
  password: string
}
const sqlRegularUser = process.env.REACT_APP_SQL_USER ? process.env.REACT_APP_SQL_USER : `defaultUser`
const sqlRegularPassword = process.env.REACT_APP_SQL_PASSWORD ? process.env.REACT_APP_SQL_PASSWORD : `defaultPassword`
const sqlRegular: ISqlUserCredentials = {
  user: sqlRegularUser,
  password: sqlRegularPassword
}
const sqlRootUser = process.env.REACT_APP_SQL_RUSER ? process.env.REACT_APP_SQL_RUSER : `defaultRootUser`
const sqlRootPassword = process.env.REACT_APP_SQL_PASSWORD ? process.env.REACT_APP_SQL_PASSWORD : `defaultRootPassword`
const sqlRoot: ISqlUserCredentials = {
  user: sqlRootUser,
  password: sqlRootPassword
}
const sqlHost = process.env.REACT_APP_SQL_HOST ? process.env.REACT_APP_SQL_HOST : `defaultSQLHost`
const sqlDatabase = process.env.REACT_APP_SQL_DB ? process.env.REACT_APP_SQL_DB : `defaultDatabaseName`
const sqlPort = process.env.REACT_APP_SQL_PORT ? getEnvNumber(process.env.REACT_APP_SQL_PORT) : 3306

const sqlServer: ISqlServerInfo = {
  host: sqlHost,
  port: sqlPort,
  database: sqlDatabase
}
const apiPort = process.env.REACT_APP_API_PORT ? getEnvNumber(process.env.REACT_APP_API_PORT) : 3333
export const environment = {
  sqlRegular,
  sqlRoot,
  sqlServer,
  apiPort
}
