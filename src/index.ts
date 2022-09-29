import "dotenv/config"
import express from "express";
import logger from "./utils/logger";
import cluster, { Worker } from "cluster";
import os from "os";
import cors from "cors";

import { router } from "./routes/index.routes";
import connect from "./utils/connect";

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true, }));
app.use(express.json());
app.use(cors());

app.use(router);

const onWorkerError = (code, signal) => {
  logger.info(code, signal)
};

if (cluster.isPrimary) {
  const cores = os.cpus().length;

  logger.info(`API started at: http://localhost:${port}/`);
  logger.info(`Total CPU Threads: ${cores}`);
  logger.info(`Process running: ${process.pid}`);

  for (let i = 0; i < cores; i += 1) {
    const worker = cluster.fork();
    worker.on("error", onWorkerError)
  }

  cluster.on('exit', (worker: Worker, code) => {
    logger.info(`Worker ${worker.process.pid} exited with code ${code}`);
    logger.info('Fork new worker!');

    const netWorker = cluster.fork();
    netWorker.on("error", onWorkerError)
  });
} else {
  app.listen(port, async () => {
    connect()
  });
}
