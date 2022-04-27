/** @format */
// libraries
import { createPool, Pool } from 'mysql2'
/**
 * creates a connection pool to the mariadb container as the regular user
 */
export const regularPool: Pool = createPool({
  host: `mariadb`,
  user: `mariadb`,
  password: `mariadb`,
  waitForConnections: true,
  connectionLimit: 10
})
