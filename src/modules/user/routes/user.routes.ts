import { Router } from "express";
import verifyToken from "../../../middlewares/verifyToken";

import { CreateUserController } from "../controllers/createUser/CreateUserController";
import { UpdateUserController } from "../controllers/updateUser/UpdateUserController";
import { DeleteUserController } from "../controllers/deleteUser/DeleteUserController";
import { ShowUserController } from "../controllers/showUser/ShowUserController";
import { ShowAllUsersController } from "../controllers/showAllUsers/ShowAllUsersController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const showUserController = new ShowUserController();
const showAllUsersController = new ShowAllUsersController();

userRoutes.use(verifyToken);

userRoutes.post(
  "/create",
  createUserController.handle,
);

userRoutes.patch(
  "/update/:id",
  updateUserController.handle,
);

userRoutes.delete(
  "/delete/:id",
  deleteUserController.handle,
);

userRoutes.get(
  "/show/:id",
  showUserController.handle,
);

userRoutes.get(
  "/showall",
  showAllUsersController.handle,
);

export { userRoutes };
