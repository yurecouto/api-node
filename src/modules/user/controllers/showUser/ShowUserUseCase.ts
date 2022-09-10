import { User } from "../../../../schemas/user.shcema";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserUseCase {
    async execute({
        
    }: IRequest): Promise<User> {


        return ;
    }
}

export { CreateUserUseCase };
