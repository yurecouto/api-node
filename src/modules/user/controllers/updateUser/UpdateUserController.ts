import { Request, Response } from "express";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const updateUserUseCase = new UpdateUserUseCase();

    const updateUser = await updateUserUseCase.execute({
      name,
      email,
      password
    });

    return response.status(201).json(updateUser);
  }
}

export { UpdateUserController };