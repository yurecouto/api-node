import logger from "../../../../utils/logger"

import { ObjectTest } from "../../../../schemas/ObjectTest";

interface IRequest {
    id: string;
};

class ShowObjectUseCase {
    async execute({
        id
    }: IRequest) {
        try {
            const object = await ObjectTest.findById(id);

            return object;
        } catch (error) {
            logger.error(error)
        }
    }
};

export { ShowObjectUseCase };
