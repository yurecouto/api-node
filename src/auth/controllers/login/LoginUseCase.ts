import logger from "../../../utils/logger"
import { User } from "../../../schemas/User";
import * as jwt from "jsonwebtoken";
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

      if (user.password === password) {
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
