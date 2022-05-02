/** @format */
import { config } from 'dotenv'
// import { e } from '../'
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
export interface IMariaServerInfo extends IServerInfo {
  database: string
}

export interface IMariaUserCredentials {
  user: string
  password: string
}
const mariaDBRegularUser = process.env.REACT_APP_MARIADBUSER ? process.env.REACT_APP_MARIADBUSER : `defaultUser`
const mariaDBRegularPassword = process.env.REACT_APP_MARIADBPASSWORD ? process.env.REACT_APP_MARIADBPASSWORD : `defaultPassword`
const mariaRegular: IMariaUserCredentials = {
  user: mariaDBRegularUser,
  password: mariaDBRegularPassword
}
const mariaDBRootUser = process.env.REACT_APP_MARIADBROOTUSER ? process.env.REACT_APP_MARIADBROOTUSER : `defaultRootUser`
const mariaDBRootPassword = process.env.REACT_APP_MARIADBROOTPASSWORD ? process.env.REACT_APP_MARIADBROOTPASSWORD : `defaultRootPassword`
const mariaRoot: IMariaUserCredentials = {
  user: mariaDBRootUser,
  password: mariaDBRootPassword
}
const mariaDBHost = process.env.REACT_APP_MARIADBHOST ? process.env.REACT_APP_MARIADBHOST : `defaultMariaDBHost`
const mariaDBDatabase = process.env.REACT_APP_MARIADBDATABASENAME ? process.env.REACT_APP_MARIADBDATABASENAME : `defaultDatabaseName`
const mariaDBPort = process.env.REACT_APP_MARIADBPORT ? getEnvNumber(process.env.REACT_APP_MARIADBPORT) : 3306

const mariaServer: IMariaServerInfo = {
  host: mariaDBHost,
  port: mariaDBPort,
  database: mariaDBDatabase
}
const apiHost = process.env.REACT_APP_APIHOST ? process.env.REACT_APP_APIHOST : `defaultApiHost`
const apiPort = process.env.REACT_APP_APIPORT ? getEnvNumber(process.env.REACT_APP_APIPORT) : 3333
const apiServer: IServerInfo = { host: apiHost, port: apiPort }
// const checktypes: any[] = [mariaDBHost, mariaDBDatabase, mariaDBRegularUser, mariaDBRegularPassword, mariaDBRootUser, mariaDBRootPassword, mariaDBPort, apiPort, apiHost]

// checktypes.map((toCheck: string | number | boolean): string | number | boolean => {
//   switch (typeof toCheck) {
//     case `string`:
//       return toCheck as string
//     case `number`:
//       return toCheck as number
//     case `boolean`:
//       return toCheck as boolean
//     case `undefined`:
//       e(`development`, `${toCheck} is undefined.`)
//       break
//     default:
//       e(`development`, `${toCheck} is not a string, number, or boolean.`)
//       process.exit(1)
//   }
//   return toCheck
// })
// console.log(mariaServer, mariaRoot, mariaRegular, apiServer)
export const environment = {
  mariaRegular,
  mariaRoot,
  mariaServer,
  apiServer
}
