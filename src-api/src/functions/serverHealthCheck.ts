/** @format */
// libraries
import { Request, Response } from 'express'
// controllers
export const serverHealthCheck: Function = (request: Request, response: Response) => {
  response.status(200).json({ message: `/ping` }).send()
}
