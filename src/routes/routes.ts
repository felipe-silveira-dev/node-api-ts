import { Router } from 'express';
import { studentController } from '../controllers/student.controller';

const router = Router();

router.get('/', (req, res) => {
    res.json('Hello World! From Router');
});

router.get('/students', studentController.index);

export default router;