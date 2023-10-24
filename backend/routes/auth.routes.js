import authController from '../controllers/authController.js';
import userVertification from '../middlewares/authMiddleware.js';
import express from 'express';
const router = express.Router();

router.post('/Signup' , authController.Signup );
router.post('/login',authController.Login);
router.post('/',userVertification);

export default router;

