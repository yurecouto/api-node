import 'dotenv/config'
import express from "express";
import connect from "./utils/connect";
import router from "./router";
import logger from "./utils/logger";

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.listen(port, async () => {
    logger.info(`API started at: http://localhost:${port}/`);
    await connect();
    router(app);
});