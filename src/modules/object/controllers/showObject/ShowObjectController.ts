import { Request, Response } from "express";

import { ShowObjectUseCase } from "./ShowObjectUseCase";

class ShowObjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showObjectUseCase = new ShowObjectUseCase();

    const showObject = await showObjectUseCase.execute({ id });

    return response.status(201).json(showObject);
  }
}

export { ShowObjectController };
