/** @format */
import { NextFunction, Request, Response } from 'express'
import { e, i } from '..'
import { connectToMaria, queryMaria } from '../'
import { Connection } from 'mysql'

export const listDatabases = async (request: Request, response: Response, next: NextFunction) => {
  i(`mariadb`, `listing databases.`)
  let query = `SHOW DATABASES`
  // put commecnted stuff back here
  connectToMaria().then(async (connection: Connection) => {
    try {
      let result = await queryMaria(connection, query)
      response.status(200).json(result).send()
    } catch (error: unknown) {
      e(`mariadb`, `listing databases.`, error)
      response.status(500).json({ error: error }).send()
    }
  })
}

//   connectToMaria()
//     .then((connection: Connection) => {
//       queryMaria(connection, query)
//         .catch((error: MysqlError) => {
//           e(`mariadb`, error.message, error)
//           return response.status(200).json({
//             message: error.message,
//             error}).send()})
//         .then((results) => {
//           i(`mariadb`, `databases: `, { ...(results as Object) })
//           return response.status(200).json({
//             databases: `mock product results`}).send()})
//         .finally(() => {
//           i(`mariadb`, `Closing connection.`)
//           connection.end()
//         })}).catch((error: MysqlError) => {
//                e(`mariadb`, error.message, error)
//                  return response.status(200).json({
//                  message: error.message,
//                  error})})}
