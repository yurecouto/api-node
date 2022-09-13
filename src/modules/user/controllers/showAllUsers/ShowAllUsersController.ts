import { Request, Response } from "express";

import { ShowAllUsersUseCase } from "./ShowAllUsersUseCase";

class ShowAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {

    const showUsersUseCase = new ShowAllUsersUseCase();

    const showUsers = await showUsersUseCase.execute();

    return response.status(201).json(showUsers);
  }
}

export { ShowAllUsersController };
