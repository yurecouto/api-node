import { Router } from "express";

import { userRoutes } from "../modules/user/routes/user.routes";
import { objectRoutes } from "../modules/object/routes/object.routes";
import { authRoutes } from "../auth/routes/auth.routes"

const router = Router();

router.use("/user", userRoutes);
router.use("/object", objectRoutes);
router.use("/auth", authRoutes);

export { router };
