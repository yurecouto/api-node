import { Router } from "express";

import { CreateUserController } from "../controllers/createUser/CreateUserController";
// import { UpdateUserController } from "../controllers/updateUser/UpdateUserController";
// import { DeleteUserController } from "../controllers/deleteUser/DeleteUserController";
// import { ShowUserController } from "../controllers/showUser/ShowUserController";
// import { ShowUsersController } from "../controllers/showUsers/ShowUsersController";

const userRoutes = Router();

const createUserController = new CreateUserController();
// const updateUserController = new UpdateUserController();
// const deleteUserController = new DeleteUserController();
// const showUserController = new ShowUserController();
// const showUsersController = new ShowUsersController();

// userRoutes.use(Middlewares);

userRoutes.post(
    "/create",
    createUserController.handle,
);

// userRoutes.patch(
//     "/update",
//     updateUserController.handle,
// );

// userRoutes.delete(
//     "/delete",
//     deleteUserController.handle,
// );

// userRoutes.get(
//     "/show",
//     showUserController.handle,
// );

// userRoutes.get(
//     "/show/all",
//     showUsersController.handle,
// );

export { userRoutes };