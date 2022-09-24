import * as jwt from "jsonwebtoken";

import auth from "../auth/config/auth";

function generateAccessToken(id: string) {
  const secret = auth.secret_access;
  const acessToken = jwt.sign({ id }, secret, {
    expiresIn: auth.expiration_access,
  });

  return acessToken;
};

function generateRefreshToken(id: string) {
  const secret = auth.secret_refresh;
  const refreshToken = jwt.sign({ id }, secret, {
    expiresIn: auth.expiration_refresh,
  });

  return refreshToken;
};

export {
  generateAccessToken,
  generateRefreshToken
};
