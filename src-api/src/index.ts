/** @format */
import { deleteRouter } from './routes/deleteRouter'
import { getRouter } from './routes/getRouter'
import { postRouter } from './routes/postRouter'
import { putRouter } from './routes/putRouter'
import { updateRouter } from './routes/updateRouter'
import { connectToMaria } from './sql/connectToMaria'
import { createProduct } from './sql/createProduct'
import { listDatabases } from './sql/listDatabases'
import { queryMaria } from './sql/queryMaria'
import { validateMaria } from './sql/validateMaria'
import { environment } from './utility/environment'
export { environment, connectToMaria, createProduct, listDatabases, queryMaria, validateMaria, deleteRouter, getRouter, postRouter, putRouter, updateRouter }
