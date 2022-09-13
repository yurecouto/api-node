import logger from "../../../../utils/logger"

import { User } from "../../../../schemas/User";
import { ObjectId } from "mongoose";

interface IRequest {
    id: ObjectId
}

class DeleteUserUseCase {
    async execute({
        id
    }: IRequest) {
        try {
            await User.deleteOne({ id })
            return "User Successfully Deleted.";
        } catch (error) {
            logger.error("Error:", error)
        }
    }
}

export { DeleteUserUseCase };
