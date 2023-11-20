import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import * as UserController from '../controllers/UserController.js';

const router = express.Router();

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);
router.get('/protected', authMiddleware, UserController.protectedRoute);

export default router;
