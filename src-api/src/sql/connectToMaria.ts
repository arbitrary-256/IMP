// /** @format */
// import { Connection, createConnection, MysqlError } from 'mysql'
// import { environment } from '../utility/environment'
// import { validateMaria } from './validateMaria'
// /**
//  * connects to MariaDB
//  * @param asRoot boolean, set to true to connect to MariaDB as root
//  * @returns a usable mysql.Connection
//  */
// export const connectToMaria = async (asRoot: boolean = false): Promise<Connection> =>
//   new Promise()<Connection>((resolve, reject): void => {
//     const connection = createConnection(
//       validateMaria(
//         asRoot
//           ? {
//               user: environment.mariaRoot.user,
//               password: environment.mariaRoot.password,
//               host: environment.mariaServer.host,
//               database: environment.mariaServer.database
//             }
//           : {
//               user: environment.mariaRegular.user,
//               password: environment.mariaRegular.password,
//               host: environment.mariaServer.host,
//               database: environment.mariaServer.database
//             }
//       )
//     )
//     connection.connect((error: MysqlError): void => {
//       error && reject(error)
//       !error && resolve(connection)
//     })
//   })
export { }