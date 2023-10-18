import express from 'express';
import cargoController from '../controllers/cargo.controller.js';
const router = express.Router();

router.get('/',cargoController.list);
router.post('/new', cargoController.create);
router.get('/:id', cargoController.view);
router.put('/:id', cargoController.update);
router.delete('/:id', cargoController.remove);


export default router;