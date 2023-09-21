import { Router } from 'express';
const router = Router();
import { getAllUsers, createUser, deleteUser, updateUser } from '../controllers/userController.js';

router.get('/users', getAllUsers)

router.post('/user', createUser)

router.delete('/user/:id', deleteUser)

router.put('/user/:id', updateUser)

export default router