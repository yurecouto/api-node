import logger from "../../../../utils/logger"

import { User } from "../../../../schemas/User";
import IUser from "../../../../interfaces/IUser";

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
    }: IRequest): Promise<IUser> {
        try {
            await User.updateOne({
                name,
                email,
                password
            })
    
            return {
                name,
                email,
                password
            };
        } catch (error) {
            logger.error("Error:", error)
        }
    }
}

export { UpdateUserUseCase };
