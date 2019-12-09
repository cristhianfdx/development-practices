import {Router} from 'express';

import {
    getProjects,
    createProject,
    getOneProject,
    deleteProject,
    updateProject
} from '../controllers/projects.controller';

const router = Router();

//Routes
router.get('/', getProjects);
router.post('/', createProject);

router.get('/:id', getOneProject);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);

export default router;