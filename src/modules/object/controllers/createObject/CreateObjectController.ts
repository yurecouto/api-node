import { Request, Response } from "express";

import { CreateObjectUseCase } from "./CreateObjectUseCase";

class CreateObjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, array, object, number } = request.body;

    const createObjectUseCase = new CreateObjectUseCase();

    const createObject = await createObjectUseCase.execute({
      name,
      array,
      object,
      number
    });

    if (createObject === 401) {
      return response.status(401)
        .send({ message: "Failed in Create Object." })
        .end();
    }

    return response.status(201).json(createObject);
  }
};

export { CreateObjectController };
