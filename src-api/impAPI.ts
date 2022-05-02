/** @format */
// libraries
import { application, Application, Request, Response } from 'express'
// src-api
import { environment, i } from './src'
const impAPI: Application = application
impAPI.get(`/hello`, (request: Request, response: Response) => response.send(`hello`))
impAPI.listen(environment.apiServer.port, () => i(`api`, `imp-api on ${environment.apiServer.host}:${environment.apiServer.port}`))
