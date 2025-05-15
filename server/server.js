import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// database connection
await connectDB()
await connectCloudinary()

// Allow Multiple Origins
const allowedOrigins = ["https://localhost:5173"];

// Middleware Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => res.send("API is Working"));
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)

// testing the server
app.listen(port, () => {
  console.log(`Server is Running on hhttps://localhost:${port}`);
});
