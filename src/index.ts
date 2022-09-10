import 'dotenv/config'
import express from "express";
import logger from "./utils/logger";

import { router } from "./routes/index.routes";

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(router);

app.listen(port, async () => {
    logger.info(`API started at: http://localhost:${port}/`);
});
