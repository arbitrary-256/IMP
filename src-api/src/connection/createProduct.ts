/** @format */
import { Request, Response } from 'express'
import { e, i } from '../logs'
import { connectToMaria } from './connectToMaria'
import { queryMaria } from './queryMaria'
import { Connection, MysqlError } from 'mysql'

export const createProduct = async (request: Request, response: Response): Promise<void> => {
  i(`mariadb`, `Creating product`)
  let { author, title } = request.body

  let query = `INSERT INTO product (author, title) VALUES ("${author}", "${title}")`

  connectToMaria()
    .then((connection: Connection) => {
      queryMaria(connection, query)
        .then((result) => {
          i(`mariadb`, 'Product created: ', result)
          response
            .status(200)
            .json({
              result
            })
            .send()
        })
        .catch((error: MysqlError) => {
          e(`mariadb`, error.message, { ...error })
          response
            .status(200)
            .json({
              message: error.message,
              error
            })
            .send()
        })
        .finally(() => {
          i(`mariadb`, 'Closing connection.')
          connection.end()
        })
    })
    .catch((error: MysqlError) => {
      e(`mariadb`, error.message, { ...error })
      response.status(200).json({
        message: error.message,
        error
      })
    })
    .finally(() => {
      i(`mariadb`, 'Closing connection.')
    })
  return
}
