import express from 'express';
import employeeController from '../controllers/employeeController.js';
const router = express.Router();

router.get('/',employeeController.list);
router.post('/new', employeeController.create);
router.get('/:id', employeeController.view);
router.get('/find/:EmpId', employeeController.find);
router.put('/:id', employeeController.update);
router.delete('/:id', employeeController.remove);


export default router;