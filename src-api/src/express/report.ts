/** @format */
import { i, e } from '../logs'
export const report = async (request: Request, response: Response) => {
  try {
    i(`routing`, `report`, { ...request.body })
    response.json()
  } catch (error: unknown) {
    e(`routing`, `error`, error)
  } finally {
    i(`routing`, `report complete`)
  }
}
