import { Request, Response } from "express";

import { CreateObjectUseCase } from "./CreateObjectUseCase";

class CreateObjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, array, object, number } = request.body;

    const createAlertRuleUseCase = new CreateObjectUseCase();

    const createUser = await createAlertRuleUseCase.execute({
      name, 
      array, 
      object, 
      number
    });

    return response.status(201).json(createUser);
  }
};

export { CreateObjectController };
