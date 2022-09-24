import { ObjectTest } from "../../../../schemas/ObjectTest";

interface IRequest {
    id: string;
}

class DeleteObjectUseCase {
  async execute({
      id
  }: IRequest) {
    try {
      await ObjectTest.deleteOne({ id })
      return 201;
    } catch (error) {
      return 401
    }
  }
};

export { DeleteObjectUseCase };
