import {Router} from 'express';

const router = Router();

import {
    createTask,
    getTasks,
    deleteTask,
    updateTask,
    getOneTask,
    getTaskByProject
 } from '../controllers/tasks.controller';

router.get('/', getTasks);
router.post('/', createTask);

router.delete('/:id', deleteTask);
router.put('/:id', updateTask);
router.get('/:id', getOneTask);
router.get('/projects/:projectId', getTaskByProject);

export default router;