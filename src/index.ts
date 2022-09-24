import "dotenv/config"
import express from "express";
import logger from "./utils/logger";
import cluster, { Worker } from "cluster";
import os from "os";

import { router } from "./routes/index.routes";
import connect from "./utils/connect";

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(router);

const onWorkerError = (code, signal) => {
  logger.info(code, signal)
};

if (cluster.isPrimary) {
  const cores = os.cpus().length;

  logger.info(`Total cores: ${cores}`);
  logger.info(`Primary process ${process.pid} is running`);

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
    logger.info(`API started at: http://localhost:${port}/`);
    connect()
  });
}
