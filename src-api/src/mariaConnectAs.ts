/** @format */
// libraries
import { createConnection, Connection } from 'mysql2'
import { mariaConfigureAs } from './mariaConfigureAs'
/**
 * connects to MariaDB as the given user
 * @param mariaUser either `root` or `regular`
 * @returns Promised mysql2.Connection
 */
export const mariaConnectAs: Function = async (mariaUser: `root` | `regular`): Promise<Connection> => createConnection(mariaConfigureAs(mariaUser))
