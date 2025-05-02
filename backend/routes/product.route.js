import express from 'express';
import mongoose from 'mongoose';
import {
  getProducts,
  updateProduct,
  createProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

// GET /api/products
router.get('/', getProducts);

// PUT /api/products/:id
router.put('/:id', updateProduct);

// POST /api/products
router.post('/', createProduct);

// DELETE /api/products/:id
router.delete('/:id', deleteProduct);

export default router;