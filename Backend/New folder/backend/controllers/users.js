import Users from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send({ data: users });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Something went wrong" });
  }
};

const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname) {
      return res.status(400).send({ status: false, message: "Full name is required" });
    }

    if (!email) {
      return res.status(400).send({ status: false, message: "Email is required" });
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send({ status: false, message: "Invalid email address" });
    }

    if (!password) {
      return res.status(400).send({ status: false, message: "Password is required" });
    }

    if (password.length < 6) {
      return res.status(400).send({
        status: false,
        message: "Password must be at least 6 characters long",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    await Users.create({
      fullname,
      email,
      password: hashedPass,
    });

    res.status(200).send({ status: true, message: "Account created" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ status: false, message: "Something went wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUserExist = await Users.findOne({ email });
    if (!isUserExist) {
      return res.status(404).send({ status: false, message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, isUserExist.password);
    if (!isValidPassword) {
      return res.status(400).send({ status: false, message: "Invalid password" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.status(200).send({ status: true, message: "Logged in successfully", data: token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, message: "Something went wrong" });
  }
};

const tokenVerify = async (req, res) => {
  try {
    const { token } = req.body;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Invalid token" });
      }
      res.status(200).send({ message: "Token verified", data: decoded });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};

export { getUsers, register, login, tokenVerify };
