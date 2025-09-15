import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register (sirf pehle admin ke liye)
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Agar pehle se admin exist hai to block kar do
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      return res.status(403).json({ error: "Admin already exists. Registration closed." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, role: "admin" });
    await newUser.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, role: "admin" }); // sirf admin login kar sake
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.json({ message: "Login successful", role: user.role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Logout
export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
