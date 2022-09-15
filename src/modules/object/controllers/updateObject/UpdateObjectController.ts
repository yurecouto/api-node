import { Request, Response } from "express";

import { UpdateObjectUseCase } from "./UpdateObjectUseCase";

class UpdateObjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, array, object, number } = request.body;

    const updateAlertRuleUseCase = new UpdateObjectUseCase();

    const updateUser = await updateAlertRuleUseCase.execute({
      name, 
      array, 
      object, 
      number
    });

    return response.status(201).json(updateUser);
  }
}

export { UpdateObjectController };