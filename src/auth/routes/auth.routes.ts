import { Router } from "express";

import {
  LoginController,
  RefreshTokenController
} from "../controllers/login/LoginController";

import { LogoutController } from "../controllers/logout/LogoutController";


const authRoutes = Router();

const loginController = new LoginController();
const logoutController = new LogoutController();
const refreshTokenController = new RefreshTokenController();


// userRoutes.use(Middlewares);

authRoutes.post(
  "/login",
  loginController.handle,
);

authRoutes.post(
  "/logout",
  logoutController.handle,
);

authRoutes.get(
  "/token",
  refreshTokenController.handle
)


export { authRoutes };
