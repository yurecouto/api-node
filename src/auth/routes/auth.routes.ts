import { Router } from "express";

import {
  LoginController,
  RefreshTokenController
} from "../controllers/login/LoginController";
// import { LogoutController } from "../controllers/logout/LogoutController";


const authRoutes = Router();

const loginController = new LoginController();
const refreshTokenController = new RefreshTokenController();
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

authRoutes.post(
  "/token",
  refreshTokenController.handle
)


export { authRoutes };
