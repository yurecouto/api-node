import { Request, Response } from "express";

import { LogoutUseCase } from "./LogoutUseCase";

class LogoutController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    if (!email) {
      return response.status(422).json({ message: "E-mail is required." });
    };

    if (!password) {
      return response.status(422).json({ message: "Password is required." });
    };

    const logoutUseCase = new LogoutUseCase();

    const logout = await logoutUseCase.execute({
      email, password
    });

    if (logout === 404) {
      return response.status(404)
        .send({ message: "User not Found." })
        .end();
    }

    if (logout === 401) {
      return response.status(401)
        .send({ message: "Invalid Password." })
        .end();
    }

    return response.status(201).json(logout);
  }
};

export { LogoutController };
