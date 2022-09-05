import { Express, Request, Response } from "express";

function router (app: Express) {
    app.get(
        "/", (req: Request, res: Response) => {
        res.sendStatus(200)
    });

    // app.post(
    //     "/users", 
    //     validate(createUserSchema), 
    //     createUserHandler
    // );

    // app.post(
    //     "/sessions", 
    //     validate(createSessionSchema), 
    //     createUserSessionHandler
    // );
};

export default router;
