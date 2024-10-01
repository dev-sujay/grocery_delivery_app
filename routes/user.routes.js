import express from 'express';
import {
    registerUser,
    loginUser,
    getUserProfile,
    updateUser,
    getAllUsers,
} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile/:id', getUserProfile);
router.patch('/profile/:id', updateUser);
router.get('/', getAllUsers);

export default router;
