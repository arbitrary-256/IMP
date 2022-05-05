/** @format */
import { Connection } from 'mysql'
/**
 * queries SQL
 * @param connection a mysql.connection
 * @param query a mysql.Query
 * @returns
 */
export const querySql = async (connection: Connection, query: string) =>
  new Promise((resolve, reject) => {
    connection.query(query, connection, (error, result: any) => {
      error ? reject(error) : resolve(result)
    })
  })
export {}
