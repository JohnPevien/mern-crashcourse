import express from "express";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.route.js";
connectDB();

const app = express();

app.use(express.json()); //allow to parse JSON data in the request body

app.use("/api/products", productRouter);

app.listen(9015, () => {
	console.log("Server is running on port 9015");
});
