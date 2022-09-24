import { User } from "../../../../schemas/User";
import { ObjectId } from "mongoose";

interface IRequest {
  id: ObjectId
}

class DeleteUserUseCase {
  async execute({
    id
  }: IRequest) {
    try {
      await User.deleteOne({ id })
      return 201;
    } catch (error) {
      return 401;
    }
  }
}

export { DeleteUserUseCase };
