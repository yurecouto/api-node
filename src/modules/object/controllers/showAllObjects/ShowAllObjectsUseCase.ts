import logger from "../../../../utils/logger";

import { ObjectTest } from "../../../../schemas/ObjectTest";

class ShowAllObjectsUseCase {
  async execute() {
    try {
      const Objects = await ObjectTest.find();

      return Objects;
    } catch (error) {
      return 401;
    }
  }
}

export { ShowAllObjectsUseCase };
