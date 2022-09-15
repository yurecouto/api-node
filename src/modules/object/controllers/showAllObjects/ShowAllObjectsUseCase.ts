import logger from "../../../../utils/logger";

import { ObjectTest } from "../../../../schemas/ObjectTest";

class ShowAllObjectsUseCase {
    async execute() {
        try {
            const Objects = await ObjectTest.find();

            return Objects;
        } catch (error) {
            logger.error(error);
        }
    }
}

export { ShowAllObjectsUseCase };
