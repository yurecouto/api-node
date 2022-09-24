import bcrypt from "bcrypt";
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
      const salt = await bcrypt.genSalt(12);
      const hashPass = await bcrypt.hash(password, salt);

      const user = await User.create({
        name,
        email,
        password: hashPass
      });

      return user;
    } catch (error) {
      return 401;
    }
  }
}

export { CreateUserUseCase };
