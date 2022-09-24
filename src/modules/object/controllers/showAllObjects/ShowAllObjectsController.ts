import { Request, Response } from "express";

import { ShowAllObjectsUseCase } from "./ShowAllObjectsUseCase";

class ShowAllObjectsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showObjectsUseCase = new ShowAllObjectsUseCase();

    const showObjects = await showObjectsUseCase.execute();

    if (showObjects === 401) {
      return response.status(401)
        .send({ message: "Failed in Show Objects." })
        .end();
    }

    return response.status(201).json(showObjects);
  }
}

export { ShowAllObjectsController };
