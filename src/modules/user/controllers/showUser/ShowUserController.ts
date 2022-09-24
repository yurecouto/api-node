import { Request, Response } from "express";

import { ShowUserUseCase } from "./ShowUserUseCase";

class ShowUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUserUseCase = new ShowUserUseCase();

    const showUser = await showUserUseCase.execute({ id });

    if (showUser === 401) {
      return response.status(401)
        .send({ message: "Failed in Show User." })
        .end();
    };

    return response.status(201).json(showUser);
  }
}

export { ShowUserController };
