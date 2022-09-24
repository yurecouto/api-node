import { ObjectTest } from "../../../../schemas/ObjectTest";

interface IRequest {
  id: string;
};

class ShowObjectUseCase {
  async execute({
    id
  }: IRequest) {
    try {
      const object = await ObjectTest.findById(id);

      return object;
    } catch (error) {
      return 401;
    }
  }
};

export { ShowObjectUseCase };
