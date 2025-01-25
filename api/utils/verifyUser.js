import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, "Unauthorized"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
<<<<<<< HEAD
    if (err) return next(errorHandler(403, "Forbidden"));

=======
    if (err) {
      // console.error("JWT verification error:", err.message);
      return next(errorHandler(403, "Forbidden"));
    }
    // console.log("Decoded user from token:", user);
>>>>>>> 914b697e861b2ec02fc8e73267b989f7c3e6e2d9
    req.user = user;
    next();
  });
};
