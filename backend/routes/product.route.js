import express from 'express';
import mongoose from 'mongoose';
import {
  getProducts,
  updateProduct,
  createProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

// Writes require API key: set ADMIN_API_KEY env; clients send x-api-key header.
// Fails closed when the env var is unset. GET stays public.
const writeAuth = (req, res, next) => {
  const expected = process.env.ADMIN_API_KEY;
  if (!expected || req.get("x-api-key") !== expected) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
  next();
};

// GET /api/products
router.get('/', getProducts);

// PUT /api/products/:id
router.put('/:id', writeAuth, updateProduct);

// POST /api/products
router.post('/', writeAuth, createProduct);

// DELETE /api/products/:id
router.delete('/:id', writeAuth, deleteProduct);

export default router;