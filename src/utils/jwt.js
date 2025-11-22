// utils/jwt.js
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_secret_key"; // production me .env me rakho

export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "1d" });
};
