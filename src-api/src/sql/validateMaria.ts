// /** @format */
// /**
//  * translates .env files into type-safe JSON
//  * @param params {
//   user: string | Error
//   password: string | Error
//   host: string | Error
//   database: string | Error
//   port: string | Error
// }
//  * @returns {
//   user: string
//   password: string
//   host: string
//   database: string
//   port: number
// }
//  */
// export const validateMaria: Function = (params: {
//   user: string | Error
//   password: string | Error
//   host: string | Error
//   database: string | Error
//   port: string | Error
// }):
//   | {
//       user: string
//       password: string
//       host: string
//       database: string
//       port: number
//     }
//   | undefined => {
//   return {
//     user: params.user.toString(),
//     password: params.password.toString(),
//     host: params.host.toString(),
//     database: params.database.toString(),
//     port: parseInt(params.port.toString())
//   }
// }
// export { }