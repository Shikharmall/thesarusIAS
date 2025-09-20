import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: {
    _id: string;
  };
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    // Get token from header or cookie
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : req.cookies?.access_token;

    if (!token) {
      return res.status(401).json({ status: "failed", message: "Unauthorized: No token provided" });
    }

    // Verify token
    const secret = process.env.JWT_SECRET || "defaultsecret";
    const decoded = jwt.verify(token, secret) as { id: string };

    // Attach user info to request
    req.user = { _id: decoded.id };
    next();
  } catch (error: any) {
    console.error(error);
    return res.status(401).json({ status: "failed", message: "Unauthorized: Invalid token" });
  }
};

export { authMiddleware, AuthRequest };
