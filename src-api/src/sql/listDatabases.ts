// /** @format */
// import { NextFunction, Request, Response } from 'express'
// // import { connectToMaria, queryMaria } from '..'
// // import { Connection } from 'mysql'
// /**
//  * lists databases in the MariaDB server
//  * @param request express Request
//  * @param response express Response
//  * @param next express NextFunction
//  * @returns hopefully a list of databases
//  */
// export const listDatabases = async (request: Request, response: Response, next: NextFunction) => {
//   // let query = `SHOW DATABASES`
//   /* connectToMaria().then(async (connection: Connection) => {
//     try {
//       let result = await queryMaria(connection, query)
//       response.status(200).json(result).send() } catch (error: unknown) {
//       console.error(error)
//       response.status(500).json({ error: error }).send()}})} */
//   /*  connectToMaria().then((connection: Connection) => {
//       queryMaria(connection, query).catch((error: MysqlError) => {
//       e(`mariadb`, error.message, error)
//       response.status(200).json({message: error.message, error}).send()})
//         .then((results) => {
//           i(`mariadb`, `databases: `, { ...(results as Object) })
//           response.status(200).json({databases: `mock product results`}).send()})
//         .finally(() => {
//           i(`mariadb`, `Closing connection.`)
//           connection.end()})}).catch((error: MysqlError) => {
//             e(`mariadb`, error.message, error)
//             response.status(200).json({message: error.message, error})}) */
// }
export { }