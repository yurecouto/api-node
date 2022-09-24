import { Request, Response } from "express";

import { UpdateObjectUseCase } from "./UpdateObjectUseCase";

class UpdateObjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, array, object, number } = request.body;
    const id = request.params.id;

    const updateObjectUseCase = new UpdateObjectUseCase();

    const updateObject = await updateObjectUseCase.execute({
      id,
      name,
      array,
      object,
      number
    });

    if (updateObject === 401) {
      return response.status(401)
        .send({ message: "Failed in Update Object." })
        .end();
    };

    return response.status(201).json(updateObject);
  }
}

export { UpdateObjectController };
