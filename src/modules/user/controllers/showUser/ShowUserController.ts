import { Request, Response } from "express";

import { ShowUserUseCase } from "./ShowUserUseCase";

class ShowUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUserUseCase = new ShowUserUseCase();

    const showUser = await showUserUseCase.execute({ id });

    return response.status(201).json(showUser);
  }
}

export { ShowUserController };
