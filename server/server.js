import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";
// import { stripeWebhooks } from "./controllers/orderController.js";
import { paymobWebhook } from "./controllers/orderController.js";

const app = express();
const port = process.env.PORT || 4000;

// Log environment variables for debugging
console.log("Environment Variables:", {
  MONGODB_URL: process.env.MONGODB_URL,
  PAYMOB_API_KEY: process.env.PAYMOB_API_KEY,
  PORT: process.env.PORT,
});

// database connection
// app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);
app.post("/paymob-webhook", express.json(), paymobWebhook);

// Middleware Configuration
app.use(express.json());

// server.js
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, origin); // Reflect the requesting origin
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => res.send("API is Working"));
app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);

// testing the server
const startServer = async () => {
  try {
    await connectDB();
    await connectCloudinary();

    app.listen(port, () => {
      console.log(`Server is Running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
