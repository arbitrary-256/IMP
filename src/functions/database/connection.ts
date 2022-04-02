/** @format */
import mariadb from 'mariadb'
const mariaCredentials: Function = (): mariadb.ConnectionConfig => {
  return {
    // the host address of the mariadb or mysql server - defaults to port 3306, set as ${IP}:${PORT}
    host: `your.mariadb.host`,
    // the user name to authenticate as
    user: `impdaemoncritter`,
    // the password to use to authenticate
    password: `IMPimpI1Y1P!^^P`,
    // the database to connect to
    database: `impbase`
  }
}
export const connection: mariadb.Connection = await mariadb.createConnection(mariaCredentials())
