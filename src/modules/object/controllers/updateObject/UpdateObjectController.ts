import { Request, Response } from "express";

import logger from "../../../../utils/logger";

import { UpdateObjectUseCase } from "./UpdateObjectUseCase";

class UpdateObjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, array, object, number } = request.body;
    const id = request.params.id;

    const updateObjectUseCase = new UpdateObjectUseCase();

    const updateUser = await updateObjectUseCase.execute({
      id,
      name,
      array,
      object,
      number
    });

    return response.status(201).json(updateUser);
  }
}

export { UpdateObjectController };
