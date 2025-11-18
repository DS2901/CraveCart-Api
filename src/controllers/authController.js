import {
  signupUserService,
  loginUserService,
} from "../services/authService.js";

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
    console.log(req.body, "request body");
    const user = await loginUserService(email, password);
    res.status(200).json({ message: "Login successful", userId: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
