import { Request, Response } from "express";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteUserUseCase = new DeleteUserUseCase();

    const deleteUser = await deleteUserUseCase.execute({ id });

    return response.status(201).json(deleteUser);
  }
}

export { DeleteUserController };