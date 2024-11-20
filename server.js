import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/db.js";
import { v2 as cloudinary } from "cloudinary";

import markerRoutes from "./routes/markerRoute.js"
import authRoutes from "./routes/authRoute.js" 
import userRoutes from "./routes/userRoute.js"

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json()); // accepts json data in req.body
app.use(cookieParser()); // parse incoming cookies from request headers

app.use("/api/markers", markerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at port http://localhost:${PORT}`);
});

app.get("/", (req,res) => {
  res.send('API IS RUNNING')
});