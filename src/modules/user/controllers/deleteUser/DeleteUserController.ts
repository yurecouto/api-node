import { Request, Response } from "express";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteUserUseCase = new DeleteUserUseCase();

    const deleteUser = await deleteUserUseCase.execute({ id });

    if (deleteUser === 401) {
      return response.status(401)
        .send({ message: "Failed in Delete User." })
        .end();
    }

    return response.status(deleteUser).json({
      message: "User Successfully Deleted."
    });
  }
}

export { DeleteUserController };
