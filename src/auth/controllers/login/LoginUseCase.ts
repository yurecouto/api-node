import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

import { User } from "../../../schemas/User";

import logger from "../../../utils/logger"
import auth from "../../../auth/config/auth";

interface IRequest {
  email: string;
  password: string;
}

class LoginUseCase {
  async execute({
    email,
    password
  }: IRequest) {
    try {
      const user = await User.findOne({ email: email });

      const checkPassword = await bcrypt.compare(password, user.password);

      if (checkPassword) {
        try {
          const secret = auth.secret_token;
          const token = jwt.sign({ id: user.id, }, secret, {
            expiresIn: auth.expires_in_token
          });

          return ({ user, token });
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

export { LoginUseCase };
