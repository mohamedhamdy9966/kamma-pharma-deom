import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

// Allow Multiple Origins
const allowedOrigins = ["https://localhost:5173"];

// Middleware Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => res.send("API is Working"));

// testing the server
app.listen(port, () => {
  console.log(`Server is Running on hhttps://localhost:${port}`);
});
