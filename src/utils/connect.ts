import mongoose from "mongoose";
import logger from "../utils/logger";


async function connect() {
  const dbUri = process.env.DATABASE_URL;

  try {
    await mongoose
      .connect(dbUri)
      .then(() => logger.info("Worker connected to: MongoDB"));
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

export default connect
