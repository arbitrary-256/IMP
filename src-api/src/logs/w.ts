/** @format */
import { logType } from './logType'
import { punchClock } from './punchClock'
/**
 * console.warn wrapper
 * @param type string - which part of the program is logging
 * @param message string - the log message
 * @param object optional any - the object to log
 */
export const w = (type: logType, message: string, object?: any) => (object ? console.warn(`${punchClock()}: ${type} ${message}`, object) : console.warn(`${punchClock()}: ${type} ${message}`))
