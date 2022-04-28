/** @format */
// libraries
import { createPool, Pool } from 'mysql2'
import * as dotenv from 'dotenv'
dotenv.config()
/**
 * creates a connection pool to the mariadb container as the root user
 */
export const rootPool: Pool = createPool({
  host: `imp-${process.env.REACT_APP_MARIADBHOST}`,
  user: `${process.env.REACT_APP_ROOTUSER}`,
  password: `${process.env.REACT_APP_ROOTPASSWORD}`,
  waitForConnections: true,
  connectionLimit: 3,
  database: `${process.env.REACT_APP_DATABASE}`,
  isServer: true
})
