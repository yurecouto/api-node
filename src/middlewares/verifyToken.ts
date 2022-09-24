import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

import logger from "../utils/logger";
import auth from "../auth/config/auth";

export default function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction) {
    try {
      const token = req.headers['x-access-token'];

      if (token === undefined) {
        return res.status(401)
          .send({ message: "Missing Token." })
          .end();
      };

      jwt.verify(token.toString(), auth.secret_token, (err) => {
        if (err) {
          return res.status(401)
            .send({ message: "Invalid Token." })
            .end();
        }
        return next();
      });
    } catch (error) {
      logger.error(error);
    };
};
