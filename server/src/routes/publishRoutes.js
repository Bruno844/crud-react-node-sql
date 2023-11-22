import { Router } from 'express';
const router = Router();
import { getAllPublish, createPublish, deletePublish, updatePublish, getPublishByUser, getPublishById } from '../controllers/publishController.js';


router.get('/publishes', getAllPublish)

router.get('/publish/:id', getPublishById)

router.get('/publishes/:userId', getPublishByUser)

router.post('/publish', createPublish)

router.delete('/publish/:id', deletePublish)

router.put('/publish/:id', updatePublish)

export default router