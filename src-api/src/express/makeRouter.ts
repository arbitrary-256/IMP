/** @format */
import { i, e } from '..'
import { prepareRouter } from './prepareRouter'
import { Router } from 'express'
/**
 *
 * @returns Router
 */
export const makeRouter: Function = async (): Promise<Router> => {
  const router = await prepareRouter()
  try {
    i(`routing`, `making router`)
  } catch (error: unknown) {
    e(`routing`, `error`, { ...(error as Object) })
  } finally {
    i(`routing`, `router complete`, { ...router })
  }
  return router
}
