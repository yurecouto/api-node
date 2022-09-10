import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createAlertRuleUseCase = new CreateUserUseCase();

    const createUser = await createAlertRuleUseCase.execute({
      name,
      email,
      password
    });

    return response.status(201).json(createUser);
  }
}

export { CreateUserController };
