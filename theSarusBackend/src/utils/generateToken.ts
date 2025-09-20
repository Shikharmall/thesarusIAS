// generateToken.ts
import jwt, { SignOptions } from "jsonwebtoken";
import config from "../../config/config";

const generateToken = (id: string, expiresIn: string = "24h"): string => {
  const payload = { id };
  const options: SignOptions = { expiresIn: expiresIn as SignOptions["expiresIn"] };
  const secret: jwt.Secret = config.jwtSecret;

  return jwt.sign(payload, secret, options);
};

export default generateToken;
