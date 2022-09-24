import { Request, Response } from "express";

import { LoginUseCase } from "./LoginUseCase";

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

export { LoginController };
