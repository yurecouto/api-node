import { Router } from "express";

import { userRoutes } from "../modules/user/routes/user.routes";
import { objectRoutes } from "../modules/object/routes/object.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/object", objectRoutes);

export { router };
