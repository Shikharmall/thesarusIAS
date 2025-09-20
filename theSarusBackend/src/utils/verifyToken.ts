// verifyToken.ts
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config/config";

const verifyToken = (token: string): JwtPayload | false => {
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as JwtPayload;
    return decoded;
  } catch (err) {
    return false;
  }
};

export default verifyToken;
