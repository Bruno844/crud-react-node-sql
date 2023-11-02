import { Router } from 'express';
const router = Router();
import { getAllUsers, createUser, deleteUser, updateUser, getUserById } from '../controllers/userController.js';

router.get('/users', getAllUsers)

router.get('/user/:id', getUserById)

router.post('/user', createUser)

router.delete('/user/:id', deleteUser)

router.put('/user/:id', updateUser)

export default router