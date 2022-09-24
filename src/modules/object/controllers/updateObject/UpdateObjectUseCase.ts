import { ObjectTest } from "../../../../schemas/ObjectTest";

interface IRequest {
  id: string;
  name: string;
  array: [];
  object: {
    objName: string;
    objValue: number;
  };
  number: number;
}

class UpdateObjectUseCase {
  async execute({
      id,
      name,
      array,
      object,
      number
  }: IRequest) {
    try {
      const user = await ObjectTest.findByIdAndUpdate(id, {
        name,
        array,
        object,
        number
      });

      return user;
    } catch (error) {
      return 401;
    }
  }
}

export { UpdateObjectUseCase };
