import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import dbConnect from "./dbconnect.js";

import featureRoutes from "./routes/featureRoute.js";
import pricingRoutes from "./routes/pricingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import NstRoutes from "./routes/NstRoute.js";



dotenv.config();
const app = express();

// Middlewares
 app.use( cors({ origin: "https://ahsan-ali-portfolio.vercel.app",
   credentials: true, })
   );

app.use(express.json());
app.use(cookieParser());

// DB Connection
dbConnect();

// Routes
app.use("/features", featureRoutes);
app.use("/api/pricing", pricingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

app.use("/api", NstRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
