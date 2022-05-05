/** @format */
import { Request, Response } from 'express'
import { connectToSql } from './connectToSql'
import { querySql } from './querySql'
import { Connection, MysqlError } from 'mysql'

export const createProduct = async (request: Request, response: Response): Promise<void> => {
  let { author, title } = request.body

  let query = `INSERT INTO product (author, title) VALUES ("${author}", "${title}")`

  connectToSql()
    .then((connection: Connection) => {
      querySql(connection, query)
        .then((result) => response.status(200).json({ result }).send())
        .catch((error: MysqlError) => {
          console.error(error)
          response.status(200).json({ message: error.message, error }).send()
        })
        .finally(() => connection.end())
    })
    .catch((error: MysqlError) => {
      console.error(error)
      response.status(500).json({
        message: error.message,
        error
      })
    })
  return
}
export {}
