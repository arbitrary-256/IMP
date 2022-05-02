/** @format */
import { Request, Response, Router } from 'express'
import { MysqlError } from 'mysql'
import { e, i } from '..'
import { connectToMaria } from '../connection/connectToMaria'
import { queryMaria } from '../connection/queryMaria'

export const prepareRouter = async (): Promise<Router> => {
  const routerInProgress = Router()
  routerInProgress.get('/', (req: Request, res: Response) => {
    i(`mariadb`, `showing databases`)
    const queryString = `SHOW DATABASES`
    connectToMaria()
      .then((connection) => {
        queryMaria(connection, queryString)
          .catch((error: MysqlError) => {
            i(`mariadb`, error.message, error)
            return res.status(200).json({
              message: error.message,
              error
            })
          })
          .then((results) => {
            i(`mariadb`, `Retrieved products: `, results)
            return res.status(200).json({
              products: `mock product results`
            })
          })
          .finally(() => {
            i(`mariadb`, `Closing connection.`)
            connection.end()
          })
      })
      .catch((error: MysqlError) => {
        e(`mariadb`, error.message, error)
        return res.status(200).json({
          message: error.message,
          error
        })
      })
  })
  return routerInProgress
}
