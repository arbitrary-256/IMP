/** @format */
import { NextFunction, Request, Response } from 'express'
// import { connectToSql, querySql } from '..'
// import { Connection } from 'mysql'
/**
 * lists databases in the SQL server
 * @param request express Request
 * @param response express Response
 * @param next express NextFunction
 * @returns hopefully a list of databases
 */
export const listSqlDbs = async (request: Request, response: Response, next: NextFunction) => {
  // let query = `SHOW DATABASES`
  /* connectToSql().then(async (connection: Connection) => {
    try {
      let result = await querySql(connection, query)
      response.status(200).json(result).send() } catch (error: unknown) {
      console.error(error)
      response.status(500).json({ error: error }).send()}})} */
  /*  connectToSql().then((connection: Connection) => {
      querySql(connection, query).catch((error: MysqlError) => {
      e(`sql`, error.message, error)
      response.status(200).json({message: error.message, error}).send()})
        .then((results) => {
          i(`sql`, `databases: `, { ...(results as Object) })
          response.status(200).json({databases: `mock product results`}).send()})
        .finally(() => {
          i(`sql`, `Closing connection.`)
          connection.end()})}).catch((error: MysqlError) => {
            e(`sql`, error.message, error)
            response.status(200).json({message: error.message, error})}) */
}
