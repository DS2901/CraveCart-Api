import { createUser, findUserByEmail } from "../services/authService.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await createUser(name, email, password);
    res.status(201).json({ message: "User created successfully", userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
