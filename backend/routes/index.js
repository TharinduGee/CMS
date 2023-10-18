import express from 'express';
import cargoRoutes from './cargoes.routes.js';
import authRoutes from './auth.routes.js';

const router = express.Router();

router.use('/cargoes', cargoRoutes);
router.use('/',authRoutes);

export default router;