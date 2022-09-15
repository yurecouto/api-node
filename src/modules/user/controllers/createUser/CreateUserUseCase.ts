import { Document, model } from "mongoose";

import logger from "../../../../utils/logger"

import { User } from "../../../../schemas/User";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserUseCase {
    async execute({
        name,
        email,
        password
    }: IRequest) {
        try {
            const user = await User.create({
                name,
                email,
                password
            });
    
            return user;
        } catch (error) {
            logger.error(error)
        }
    }
}

export { CreateUserUseCase };
