import { Request, Response } from "express";

import { ShowAllUsersUseCase } from "./ShowAllUsersUseCase";

class ShowAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {

    const showUsersUseCase = new ShowAllUsersUseCase();

    const showUsers = await showUsersUseCase.execute();

    if (showUsers === 401) {
      return response.status(401)
        .send({ message: "Failed in Show Users." })
        .end();
    };

    return response.status(201).json(showUsers);
  }
}

export { ShowAllUsersController };
