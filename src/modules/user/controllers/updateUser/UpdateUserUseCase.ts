import logger from "../../../../utils/logger"

import { User } from "../../../../schemas/User";

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UpdateUserUseCase {
    async execute({
      id,
      name,
      email,
      password
    }: IRequest) {
    try {
      const user = await User.findByIdAndUpdate(id, {
        id,
        name,
        email,
        password
      })

      return user;
    } catch (error) {
      logger.error(error)
    }
  }
}

export { UpdateUserUseCase };
