import bcrypt from "bcryptjs";
import Nst from "../models/Nst.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await Nst.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Nst({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};
