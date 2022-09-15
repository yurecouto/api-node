import { Request, Response } from "express";

import { DeleteObjectUseCase } from "./DeleteObjectUseCase";

class DeleteObjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteObjectUseCase = new DeleteObjectUseCase();

    const deleteObject = await deleteObjectUseCase.execute({ id });

    return response.status(201).json(deleteObject);
  }
};

export { DeleteObjectController };