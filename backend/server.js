import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 9015;
const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173,http://localhost:3000")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json()); //allow to parse JSON data in the request body

app.use("/api/products", productRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
