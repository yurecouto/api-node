import { Request, Response } from "express";

import { CreateUserUseCase } from "./ShowUserUseCase";

class CreateAlertRuleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body.name;
    const { email } = request.body.email;
    const { password } = request.body.password;

    const createAlertRuleUseCase = new CreateUserUseCase();

    const createUser = await createAlertRuleUseCase.execute({
      name,
      email,
      password
    });

    return response.status(201).json(createUser);
  }
}

export { CreateAlertRuleController };
