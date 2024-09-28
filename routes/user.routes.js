import express from 'express';
import {
    registerUser,
    loginUser,
    getUserProfile,
    updateUser,
} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getUserProfile);
router.patch('/profile', updateUser);

export default router;
