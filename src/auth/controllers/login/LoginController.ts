import { Request, Response } from "express";

import { LoginUseCase } from "./LoginUseCase";
import { UserToken } from "../../../schemas/User";

import {
  generateAccessToken,
  generateRefreshToken
} from "../../../utils/tokenGenerator";

class LoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    if (!email) {
      return response.status(422).json({ message: "E-mail is required." });
    };

    if (!password) {
      return response.status(422).json({ message: "Password is required." });
    };

    const loginUseCase = new LoginUseCase();

    const login = await loginUseCase.execute({
      email, password
    });

    if (login === 404) {
      return response.status(404)
        .send({ message: "User not Found." })
        .end();
    }

    if (login === 401) {
      return response.status(401)
        .send({ message: "Invalid Password." })
        .end();
    }

    return response.status(201).json(login);
  }
};

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const refreshToken = request.headers["x-refresh-token"];
    const refreshTokens = await UserToken.find();

    if (!refreshToken) {
      response.status(401).json({ error: "Token is Missing." })
    };

    const exists = refreshTokens.map((token) => {
      if (token.refresh === refreshToken) {
        return true;
      }
    });

    if (!exists) {
      response.status(401).json({ error: "Invalid Token." })
    };

    const userId = refreshTokens[0].userId;

    const newAccessToken = generateAccessToken(userId);
    const newRefreshToken = generateRefreshToken(userId);

    await UserToken.create({
      userId: userId,
      refresh: newRefreshToken
    });

    await UserToken.findOneAndDelete({
      where: {
        refresh: refreshToken
      }
    });

    return response.status(201).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken
    });
  }
};

export {
  LoginController,
  RefreshTokenController
};
