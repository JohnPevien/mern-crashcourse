import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

connectDB();

const app = express();

app.use(express.json()); //allow to parse JSON data in the request body

app.post("/api/products", async (req, res) => {
	const product = req.body;
	if (!product.name || !product.price || !product.image) {
		return res.status(400).json({ success: false, message: "Missing required fields" });
	}

	const newProduct = new Product(product);

	try {
		await newProduct.save();
		res.status(201).json({
			success: true,
			message: "Product created successfully",
			data: newProduct,
		});
	} catch (error) {
		console.log("Error creating product: ", error);
		res.status(500).json({
			success: false,
			message: "Error creating product",
			error: error.message,
		});
	}
});

app.listen(9015, () => {
	console.log("Server is running on port 9015");
});
