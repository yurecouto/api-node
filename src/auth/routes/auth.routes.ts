import { Router } from "express";

import { LoginController } from "../controllers/login/LoginController";
// import { LogoutController } from "../controllers/logout/LogoutController";


const authRoutes = Router();

const loginController = new LoginController();
// const logoutController = new LogoutController();


// userRoutes.use(Middlewares);

authRoutes.post(
  "/login",
  loginController.handle,
);

// authRoutes.post(
//   "/logout",
//   logoutController.handle,
// );


export { authRoutes };
