import express from 'express';
import cargoRoutes from './cargoes.routes.js';
import authRoutes from './auth.routes.js';
import employeeRoutes from './employee.routes.js';

const router = express.Router();

router.use('/cargoes', cargoRoutes);
router.use('/employees', employeeRoutes);
router.use('/',authRoutes);

export default router;