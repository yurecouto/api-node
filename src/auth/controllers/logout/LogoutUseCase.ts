import bcrypt from "bcrypt";

import { User, UserToken } from "../../../schemas/User";

import logger from "../../../utils/logger";
import {
  generateAccessToken,
  generateRefreshToken
} from "../../../utils/tokenGenerator";


interface IRequest {
  email: string;
  password: string;
}

class LogoutUseCase {
  async execute({
    email,
    password
  }: IRequest) {
    try {
      const user = await User.findOne({ email: email });

      const checkPassword = await bcrypt.compare(password, user.password);

      if (checkPassword) {
        try {
          const logged = false;

          await UserToken.deleteOne({
            userId: user.id,
          });

          return ({ logged });
        } catch (error) {
          logger.error(error);
        };
      } else {
        return 401;
      }
    } catch (error) {
      return 404;
    }
  }
}

export { LogoutUseCase };
