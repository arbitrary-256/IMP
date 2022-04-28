/** @format */
// libraries
// import { Connection, createConnection, Pool, QueryError } from 'mysql2'
import { Connection, Pool } from 'mysql2'

/**
 * checks connection of mysql2.Pools to the MariaDB container
 * 
 */
export const checkConnections: Function = (pools: Pool[]): Function => {

  // test that each pool in Pools can connect to the MariaDB container
  return (req: any, res: any, next: Function): void => {
    // test each pool in pools
    pools.forEach((pool: Pool): void => {
      // test that the pool can connect to the MariaDB container
      pool.getConnection((err: NodeJS.ErrnoException, connection: Connection): void => {
        if (err) {
          console.log(`error connecting to ${pool.config.host}:${pool.config.port}`)
          console.log(err)
          res.status(500).send(`error connecting to ${pool.config.host}:${pool.config.port}`)
        } else {
          console.log(`connected to ${pool.config.host}:${pool.config.port}`)
          connection.end()
          next()
        }
      })
    })
  }
}

