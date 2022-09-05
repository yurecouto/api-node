import mongoose from "mongoose";
import logger from "./logger";

async function connect() {
    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWD;

    try {
        await mongoose
            .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.u6kjbgw.mongodb.net/?retryWrites=true&w=majority`)
            .then(() => logger.info("Connected to: MongoDB"));
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
}

export default connect