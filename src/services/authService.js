import User from "../models/user.js";
import bcrypt from "bcrypt";

export const signupUserService = async (name, email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const newUser = new User({ name, email, password });
  return await newUser.save();
};

export const loginUserService = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch){
    throw new Error("Password Not matched")
  }

  return user;

};
