import express from "express";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 9015;

app.use(express.json()); //allow to parse JSON data in the request body

app.use("/api/products", productRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
