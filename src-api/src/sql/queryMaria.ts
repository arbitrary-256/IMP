// /** @format */
// import { Connection } from 'mysql'
// /**
//  * queries MariaDB
//  * @param connection a mysql.connection
//  * @param query a mysql.Query
//  * @returns
//  */
// export const queryMaria = async (connection: Connection, query: string) =>
//   new Promise((resolve, reject) => {
//     connection.query(query, connection, (error, result: any) => {
//       error ? reject(error) : resolve(result)
//     })
//   })
// export { }