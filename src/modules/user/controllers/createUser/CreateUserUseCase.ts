import { User } from "../../../../schemas/user.shcema";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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
    }: IRequest): Promise<User> {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        return user;
    }
}

export { CreateUserUseCase };
