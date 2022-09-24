import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

import logger from "../utils/logger";
import auth from "../auth/config/auth";

export default function verifyToken(
  request: Request,
  response: Response,
  next: NextFunction) {
    try {
      const token = request.headers['x-access-token'];

      if (token === undefined) {
        return response.status(401)
          .send({ message: "Missing Token." })
          .end();
      };

      jwt.verify(token.toString(), auth.secret_access, (err) => {
        if (err) {
          return response.status(401)
            .send({ message: "Invalid Token." })
            .end();
        }
        return next();
      });
    } catch (error) {
      logger.error(error);
    };
};
