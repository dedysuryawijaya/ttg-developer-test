import express from "express";
import { logger } from "./helper/logging.js";
import { api } from "./router/api.js";
import bodyParser from "body-parser";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import 'dotenv/config'

const app = express()
app.use(express.json())
app.use(errorMiddleware)

app.use('/api', api)

app.listen(process.env.PORT, async () => {
    logger.info("App start on port: " + process.env.PORT)
})
