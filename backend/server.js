import express from "express";
import { connectDB } from "./config/db.js";

connectDB();

const app = express();

app.get("/products", (req, res) => {});

app.listen(9015, () => {
	console.log("Server is running on port 9015");
});
