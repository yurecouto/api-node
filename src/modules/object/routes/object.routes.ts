import { Router } from "express";
import verifyToken from "../../../middlewares/verifyToken";

import { CreateObjectController } from "../controllers/createObject/CreateObjectController";
import { UpdateObjectController } from "../controllers/updateObject/UpdateObjectController";
import { DeleteObjectController } from "../controllers/deleteObject/DeleteObjectController";
import { ShowObjectController } from "../controllers/showObject/ShowObjectController";
import { ShowAllObjectsController } from "../controllers/showAllObjects/ShowAllObjectsController";

const objectRoutes = Router();

const createObjectController = new CreateObjectController();
const updateObjectController = new UpdateObjectController();
const deleteObjectController = new DeleteObjectController();
const showObjectController = new ShowObjectController();
const showAllObjectsController = new ShowAllObjectsController();

objectRoutes.use(verifyToken);

objectRoutes.post(
    "/create",
    createObjectController.handle,
);

objectRoutes.patch(
    "/update/:id",
    updateObjectController.handle,
);

objectRoutes.delete(
    "/delete/:id",
    deleteObjectController.handle,
);

objectRoutes.get(
    "/show/:id",
    showObjectController.handle,
);

objectRoutes.get(
    "/showall",
    showAllObjectsController.handle,
);

export { objectRoutes };
