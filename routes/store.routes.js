import express from 'express';
import {
    createStore,
    getAllStores,
    updateStore,
    deleteStore,
} from '../controllers/store.controller.js';

const router = express.Router();

router.post('/', createStore);
router.get('/', getAllStores);
router.patch('/:id', updateStore);
router.delete('/:id', deleteStore);

export default router;
