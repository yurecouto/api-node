import logger from "../../../../utils/logger"

import { User } from "../../../../schemas/User";
import IUser from "interfaces/IUser";

interface IRequest {
    id: string;
}

class ShowUserUseCase {
    async execute({
        id
    }: IRequest): Promise<IUser> {
        try {
            const user = await User.findById(id);

            return user;
        } catch (error) {
            logger.error(error)
        }
    }
}

export { ShowUserUseCase };
