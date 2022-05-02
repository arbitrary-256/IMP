/** @format */
import { i, e } from '..'
export const test = async (request: Request, response: Response) => {
  try {
    i(`routing`, `test`, { ...request.body })
    response.json()
  } catch (error: unknown) {
    e(`routing`, `error`, error)
  } finally {
    i(`routing`, `test complete`)
  }
}
