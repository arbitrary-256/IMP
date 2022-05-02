/** @format */
import { logType } from './logType'
import { punchClock } from './punchClock'
/**
 * console.error wrapper
 * @param type string - which part of the program is logging
 * @param message string - the log message
 * @param object optional any - the object to log
 */
export const e = (type: logType, message: string, object?: any) => (object ? console.error(`${punchClock()}: ${type} ${message}`, object) : console.error(`${punchClock()}: ${type} ${message}`))
