import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { v2 as cloudinary } from "cloudinary";

import markerRoutes from "./routes/markerRoute.js"

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
}); 

const app = express();

app.use(cors({origin:"*"}))
app.use(express.json()); // accepts json data in req.body

app.use("/api/markers", markerRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at port http://localhost:${PORT}`);
});

app.get("/", (req,res) => {
  res.send('API IS RUNNING')
});