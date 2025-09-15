import express from "express";
import validator from "validator";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cloudinary from "cloudinary";

import dbConnect from "./dbConnect.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

dbConnect();

import Todos from "./routes/todos.js";
import Users from "./routes/users.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

// app.post("/contact", async (req, res) => {
//   try {
//     const { email, subject, text } = req.body;

//     transporter.sendMail({
//       from: "Hamza Aamir",
//       to: email,
//       subject: subject,
//       text: text,
//     });

//     res.status(200).send({ message: "Email Sent" });
//   } catch (e) {
//     console.log(e);
//     res.status(500).send({ message: "Something went wrong" });
//   }
// });

app.use("/todos", Todos);
app.use("/users", Users);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("server running successfully");
});

// app.get("/todos/one", async (req, res) => {
//   try {
//     const { title } = req.body;

//     const todos = await Todos.findOne({ title });

//     res.status(200).send({ data: todos });
//   } catch (e) {
//     console.log(e);
//     res.status(500).send({ message: "Something went wrong" });
//   }
// });

// const products = [
//   { id: 1, title: "Wireless Mouse", category: "Electronics", price: 5120 },
//   { id: 2, title: "Bluetooth Speaker", category: "Electronics", price: 16800 },
//   { id: 3, title: "Running Shoes", category: "Footwear", price: 22800 },
//   { id: 4, title: "Yoga Mat", category: "Fitness", price: 7500 },
//   { id: 5, title: 'LED Monitor 24"', category: "Electronics", price: 41000 },
//   { id: 6, title: "Gaming Keyboard", category: "Electronics", price: 24900 },
//   { id: 7, title: "Cotton T-shirt", category: "Apparel", price: 6300 },
//   { id: 8, title: "Jeans", category: "Apparel", price: 17800 },
//   { id: 9, title: "Backpack", category: "Accessories", price: 15200 },
//   {
//     id: 10,
//     title: "Analog Wrist Watch",
//     category: "Accessories",
//     price: 22400,
//   },
//   { id: 11, title: "Water Bottle 1L", category: "Home & Kitchen", price: 5400 },
//   {
//     id: 12,
//     title: "Electric Kettle",
//     category: "Home Appliances",
//     price: 13900,
//   },
//   { id: 13, title: "Scented Candle", category: "Home Decor", price: 6800 },
//   { id: 14, title: "Wall Art Canvas", category: "Home Decor", price: 9100 },
//   { id: 15, title: "Fiction Novel", category: "Books", price: 6200 },
//   { id: 16, title: "Notebook Pack", category: "Stationery", price: 5700 },
//   { id: 17, title: "Ballpoint Pens", category: "Stationery", price: 5000 },
//   { id: 18, title: "Smartphone Stand", category: "Electronics", price: 7800 },
//   { id: 19, title: "Portable Charger", category: "Electronics", price: 11900 },
//   {
//     id: 20,
//     title: "Noise Cancelling Headphones",
//     category: "Electronics",
//     price: 36800,
//   },
//   { id: 21, title: "Office Chair", category: "Furniture", price: 42000 },
//   { id: 22, title: "Desk Lamp", category: "Furniture", price: 9300 },
//   { id: 23, title: "Wool Scarf", category: "Apparel", price: 8900 },
//   { id: 24, title: "Sneakers", category: "Footwear", price: 25900 },
//   { id: 25, title: "Sunscreen SPF 50", category: "Personal Care", price: 6400 },
//   { id: 26, title: "Shampoo", category: "Personal Care", price: 6700 },
//   { id: 27, title: "Conditioner", category: "Personal Care", price: 6600 },
//   { id: 28, title: "Toaster", category: "Home Appliances", price: 11800 },
//   { id: 29, title: "Coffee Mug", category: "Home & Kitchen", price: 5200 },
//   { id: 30, title: "Cutlery Set", category: "Home & Kitchen", price: 10300 },
//   { id: 31, title: "Blender", category: "Home Appliances", price: 19800 },
//   { id: 32, title: "Desk Organizer", category: "Stationery", price: 8400 },
//   { id: 33, title: "Coloring Pencils", category: "Stationery", price: 7000 },
//   { id: 34, title: "Wireless Earbuds", category: "Electronics", price: 27600 },
//   { id: 35, title: "Trekking Poles", category: "Fitness", price: 13500 },
//   { id: 36, title: "Sleeping Bag", category: "Outdoors", price: 18200 },
//   { id: 37, title: "Camping Stove", category: "Outdoors", price: 16200 },
//   { id: 38, title: "Rain Jacket", category: "Apparel", price: 19500 },
//   { id: 39, title: "Digital Watch", category: "Accessories", price: 15700 },
//   { id: 40, title: "Sunglasses", category: "Accessories", price: 11200 },
//   { id: 41, title: "Hair Dryer", category: "Personal Care", price: 13700 },
//   { id: 42, title: "Lip Balm", category: "Personal Care", price: 5100 },
//   {
//     id: 43,
//     title: "Electric Toothbrush",
//     category: "Personal Care",
//     price: 22600,
//   },
//   { id: 44, title: "Face Mask Pack", category: "Personal Care", price: 8700 },
//   { id: 45, title: "Laptop Stand", category: "Electronics", price: 9800 },
//   { id: 46, title: "HDMI Cable", category: "Electronics", price: 5500 },
//   { id: 47, title: "Flash Drive 64GB", category: "Electronics", price: 7200 },
//   { id: 48, title: "WiFi Router", category: "Electronics", price: 24800 },
//   { id: 49, title: "Graphic T-shirt", category: "Apparel", price: 9700 },
//   { id: 50, title: "Beanie Hat", category: "Apparel", price: 6100 },
// ];

// body params query

// app.get("/", (req, res) => {
//   res.send("api get code running");
// });

// app.get("/body", (req, res) => {
//   const { firstName, lastName, age, email, pass } = req.body;

//   if (!validator.isEmail(email)) {
//     return res.status(400).send("enter a valid email");
//   }

//   if (!validator.isStrongPassword(pass)) {
//     return res.status(400).send("enter a strong password");
//   }

//   console.log(firstName, lastName, age, email);

//   res.send("api body get code running");
// });

// app.get("/params/:id", (req, res) => {
//   const { id } = req.params;

//   console.log(id);

//   res.send("api params get code running");
// });

// app.get("/query", (req, res) => {
//   const { category, color, minPrice, maxPrice } = req.query;

//   if (!category || !color || !minPrice || !maxPrice) {
//     return res.status(500).send("all fields are required");
//   }

//   console.log(category, color, minPrice, maxPrice);

//   res.send("api query get code running");
// });

// app.get("/products", (req, res) => {
//   res.send("api get code running");
// });

// app.post("/", (req, res) => {
//   res.send("api post code running");
// });

// app.put("/", (req, res) => {
//   res.send("api put code running");
// });

// app.patch("/", (req, res) => {
//   res.send("api patch code running");
// });

// app.delete("/", (req, res) => {
//   res.send("api delete code running");
// });

// ===== http methods
// get
// post
// put - patch
// delete
