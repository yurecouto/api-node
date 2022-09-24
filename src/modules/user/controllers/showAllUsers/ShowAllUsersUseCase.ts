import { User } from "../../../../schemas/User";

class ShowAllUsersUseCase {
  async execute() {
    try {
      const users = await User.find();

      return users;
    } catch (error) {
      return 401;
    }
  }
}

export { ShowAllUsersUseCase };
