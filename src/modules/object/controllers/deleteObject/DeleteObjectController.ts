import { Request, Response } from "express";

import { DeleteObjectUseCase } from "./DeleteObjectUseCase";

class DeleteObjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteObjectUseCase = new DeleteObjectUseCase();

    const deleteObject = await deleteObjectUseCase.execute({ id });

    if (deleteObject === 401) {
      return response.status(401)
        .send({ message: "Failed in Delete Object." })
        .end();
    }

    return response.status(deleteObject).json({
      message: "Object Successfully Deleted."
    });
  }
};

export { DeleteObjectController };
