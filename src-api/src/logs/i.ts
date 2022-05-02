/** @format */
import { logType } from './logType'
import { punchClock } from './punchClock'
/**
 * console.info wrapper
 * @param type string - which part of the program is logging
 * @param message string - the log message
 * @param object optional any - the object to log
 */
export const i = (type: logType, message: string, object?: any) => (object ? console.info(`${punchClock()} - ${type}>  ${message}`, object) : console.info(`${punchClock()} - ${type}>  ${message}`))
