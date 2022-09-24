import { Request, Response } from "express";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const id = request.params.id;

    const updateUserUseCase = new UpdateUserUseCase();

    const updateUser = await updateUserUseCase.execute({
      id,
      name,
      email,
      password
    });

    return response.status(201).json(updateUser);
  }
}

export { UpdateUserController };
