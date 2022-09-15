import { Request, Response } from "express";

import { ShowAllObjectsUseCase } from "./ShowAllObjectsUseCase";

class ShowAllObjectsController {
  async handle(request: Request, response: Response): Promise<Response> {

    const showObjectsUseCase = new ShowAllObjectsUseCase();

    const showObjects = await showObjectsUseCase.execute();

    return response.status(201).json(showObjects);
  }
}

export { ShowAllObjectsController };
