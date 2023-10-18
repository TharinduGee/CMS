import authController from '../controllers/authController.js';
import userVertification from '../middlewares/authMiddleware.js';
import express from 'express';
import userVerification from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/Signup' , authController.Signup );
router.get('/login',authController.Login);
router.post('/',userVerification)

export default router;

