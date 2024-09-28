import express from 'express';
import {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

router.post('/', addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
