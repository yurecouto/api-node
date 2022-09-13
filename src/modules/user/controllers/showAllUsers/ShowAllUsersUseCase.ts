import logger from "../../../../utils/logger";

import { User } from "../../../../schemas/User";

class ShowAllUsersUseCase {
    async execute() {
        try {
            const users = await User.find();

            return users;
        } catch (error) {
            logger.error(error);
        }
    }
}

export { ShowAllUsersUseCase };
