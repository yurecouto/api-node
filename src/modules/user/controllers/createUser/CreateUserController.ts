import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const createUser = await createUserUseCase.execute({
      name,
      email,
      password
    });

    if (createUser === 401) {
      return response.status(401)
        .send({ message: "Failed in Create User." })
        .end();
    };

    return response.status(201).json(createUser);
  }
}

export { CreateUserController };
