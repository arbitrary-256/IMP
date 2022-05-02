/** @format */
import { config } from 'dotenv'
import { e } from '../'
config()

const getEnvNumber: Function = (envVariable: string): number => {
  const portNumber: number = parseInt(envVariable)
  if (isNaN(portNumber)) {
    e(`development`, `${envVariable} is not a number.`)
    process.exit(1)
  }
  return portNumber
}
const mariaDBHost = process.env.REACT_APP_MARIADBHOST || e(`development`, `REACT_APP_MARIADBHOST not defined in .env file`)
const mariaDBDatabase = process.env.REACT_APP_MARIADBDATABASENAME || e(`development`, `REACT_APP_MARIADBDATABASENAME not defined in .env file`)
const mariaDBRegularUser = process.env.REACT_APP_MARIADBUSER || e(`development`, `REACT_APP_MARIADBUSER not defined in .env file`)
const mariaDBRegularPassword = process.env.REACT_APP_MARIADBPASSWORD || e(`development`, `REACT_APP_MARIADBPASSWORD not defined in .env file`)
const mariaDBRootUser = process.env.REACT_APP_MARIADBROOTUSER || e(`development`, `REACT_APP_MARIADBROOTUSER not defined in .env file`)
const mariaDBRootPassword = process.env.REACT_APP_MARIADBROOTPASSWORD || e(`development`, `REACT_APP_MARIADBROOTPASSWORD not defined in .env file`)
const mariaDBPort = getEnvNumber(process.env.REACT_APP_MARIADBPORT) || e(`development`, `REACT_APP_MARIADBPORT not defined in .env file`)
const apiPort = getEnvNumber(process.env.REACT_APP_APIPORT) || e(`development`, `REACT_APP_APIPORT not defined in .env file`)
const apiHost = process.env.REACT_APP_APIHOST || e(`development`, `REACT_APP_APIHOST not defined in .env file`)

const checktypes: any[] = [
  mariaDBHost,
  mariaDBDatabase,
  mariaDBRegularUser,
  mariaDBRegularPassword,
  mariaDBRootUser,
  mariaDBRootPassword,
  mariaDBPort,
  apiPort,
  apiHost
]

checktypes.map((toCheck: string|number|boolean): string|number|boolean => {
  switch (typeof toCheck) {
    case 'string':
      return toCheck as string
    case 'number':
      return toCheck as number
    case 'boolean':
      return toCheck as boolean
    case 'undefined':
      e(`development`, `${toCheck} is undefined.`)
      break
    default:
      e(`development`, `${toCheck} is not a string, number, or boolean.`)
      process.exit(1)
  }
  return toCheck
})
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
