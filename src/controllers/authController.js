import {
  signupUserService,
  loginUserService,
} from "../services/authService.js";

import { generateToken } from "../utils/jwt.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;


    const newUser = await signupUserService(name, email, password);
    res.status(201).json({message:"user created successfully", userId: newUser._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUserService(email, password);

    const token = generateToken(user._id);

    res.status(200).json({
      error: false,
      message: "Login successful",
      token,
      userId: user._id,
    });

  } catch (err) {
    res.status(400).json({
      error: true,
      message: err.message
    });
  }
};
