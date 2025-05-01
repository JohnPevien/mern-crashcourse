import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';

const router = express.Router();

// GET /api/products
router.get('/', async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json({
			success: true,
			message: 'Products fetched successfully',
			data: products,
		});
	} catch (error) {
		console.log('Error fetching products: ', error);
		res.status(500).json({
			success: false,
			message: 'Error fetching products',
			error: error.message,
		});
	}
});

// PUT /api/products/:id
router.put('/:id', async (req, res) => {
	const { id } = req.params;
	const product = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({
			success: false,
			message: 'Invalid product ID',
		});
	}

	try {
		const updatedProduct = await Product.findByIdAndUpdate(id, product, {
			new: true,
		});
		res.status(200).json({
			success: true,
			message: 'Product updated successfully',
			data: updatedProduct,
		});
	} catch (error) {
		console.log('Error updating product: ', error);
		res.status(500).json({
			success: false,
			message: 'Error updating product',
			error: error.message,
		});
	}
});

// POST /api/products
router.post('/', async (req, res) => {
	const product = req.body;
	if (!product.name || !product.price || !product.image) {
		return res
			.status(400)
			.json({ success: false, message: 'Missing required fields' });
	}

	const newProduct = new Product(product);

	try {
		await newProduct.save();
		res.status(201).json({
			success: true,
			message: 'Product created successfully',
			data: newProduct,
		});
	} catch (error) {
		console.log('Error creating product: ', error);
		res.status(500).json({
			success: false,
			message: 'Error creating product',
			error: error.message,
		});
	}
});

// DELETE /api/products/:id
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		await Product.findByIdAndDelete(id);
		res.status(200).json({
			success: true,
			message: 'Product deleted successfully',
		});
	} catch (error) {
		console.log('Error deleting product: ', error);
		res.status(404).json({
			success: false,
			message: 'Product not found',
			error: error.message,
		});
	}
});

export default router;