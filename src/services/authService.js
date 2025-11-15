import User from "../models/user.js";
import bcrypt from "bcrypt";

export const createUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  return await newUser.save();
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};
