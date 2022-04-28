/** @format */
// libraries
import { createPool, Pool } from 'mysql2'
import * as dotenv from 'dotenv'
dotenv.config()
/**
 * creates a connection pool to the mariadb container as the regular user
 */
export const regularPool: Pool = createPool({
  host: `imp-${process.env.REACT_APP_MARIADBHOST}`,
  user: `${process.env.REACT_APP_USER}`,
  password: `${process.env.REACT_APP_PASSWORD}`,
  waitForConnections: true,
  connectionLimit: 10,
  database: `${process.env.REACT_APP_DATABASE}`,
  isServer: true
})
