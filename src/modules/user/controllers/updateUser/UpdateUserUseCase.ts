import logger from "../../../../utils/logger"

import { User } from "../../../../schemas/User";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class UpdateUserUseCase {
    async execute({
        name,
        email,
        password
    }: IRequest) {
        try {
            const user = await User.updateOne({
                name,
                email,
                password
            })
    
            return user;
        } catch (error) {
            logger.error("Error:", error)
        }
    }
}

export { UpdateUserUseCase };
