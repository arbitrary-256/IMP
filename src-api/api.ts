/** @format */
// libraries
import * as express from 'express'
// functions
import { checkConnections } from './src/checkConnections'
// connection pools
import { regularPool } from './src/regularPool'
import { rootPool } from './src/rootPool'

const app: express.Express = express()
const port: number = 3333

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`)
})

app.get(`/checkIns`, checkConnections(rootPool, regularPool))
