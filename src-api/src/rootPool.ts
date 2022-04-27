/** @format */
// libraries
import { createPool, Pool } from 'mysql2'
/**
 * creates a connection pool to the mariadb container as the root user
 */
export const rootPool: Pool = createPool({
  host: `mariadb`,
  user: `root`,
  password: `root`,
  waitForConnections: true,
  connectionLimit: 3
})
