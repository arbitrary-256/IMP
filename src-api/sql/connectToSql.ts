/** @format */
import { Connection, createConnection, MysqlError } from 'mysql'
import { environment } from '../utility/environment'
import { validateSql } from './validateSql'
/**
 * connects to SQL
 * @param asRoot boolean, set to true to connect to SQL as root
 * @returns a usable mysql.Connection
 */
export const connectToSql = async (asRoot: boolean = false): Promise<Connection> =>
  new Promise<Connection>((resolve, reject): void => {
    const connection = createConnection(
      validateSql(
        asRoot
          ? {
              user: environment.sqlRoot.user,
              password: environment.sqlRoot.password,
              host: environment.sqlServer.host,
              database: environment.sqlServer.database
            }
          : {
              user: environment.sqlRegular.user,
              password: environment.sqlRegular.password,
              host: environment.sqlServer.host,
              database: environment.sqlServer.database
            }
      )
    )
    connection.connect((error: MysqlError): void => {
      error && reject(error)
      !error && resolve(connection)
    })
  })
export {}
