/** @format */
import { application, Application, Request, Response } from 'express'
import { i } from './src'
// import { environment, i } from './src'
// import * as sql from 'mysql'

const impAPI: Application = application
// const config = {
//   host: environment.mariaServer.host,
//   database: environment.mariaServer.database,
//   port: environment.mariaServer.port,
//   user: environment.mariaRegular.user,
//   password: environment.mariaRegular.password
// }
// const regularConnection = sql.createConnection(config)

impAPI.route(`/`).get( async (request: Request, response: Response) => {
  return response.status(200).send(`Hello World!`)
})

impAPI.listen(3333, () => {
  i(`api`, `impAPI is running on port 3333`)
})
