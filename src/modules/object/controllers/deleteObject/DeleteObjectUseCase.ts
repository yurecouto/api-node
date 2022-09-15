import logger from "../../../../utils/logger"

import { ObjectTest } from "../../../../schemas/ObjectTest";

interface IRequest {
    id: string;
}

class DeleteObjectUseCase {
    async execute({
        id
    }: IRequest) {
        try {
            await ObjectTest.deleteOne({ id })
            return "Object Successfully Deleted.";
        } catch (error) {
            logger.error(error)
        }
    }
};

export { DeleteObjectUseCase };
