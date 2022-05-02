/** @format */
import { logType } from './logType'
import { punchClock } from './punchClock'
/**
 * console.debug wrapper
 * @param type string - which part of the program is logging
 * @param message string - the log message
 * @param object optional any - the object to log
 */
export const d = (type: logType, message: string, object?: any) => (object ? console.debug(`${punchClock()}: ${type} ${message}`, object) : console.debug(`${punchClock()}: ${type} ${message}`))
