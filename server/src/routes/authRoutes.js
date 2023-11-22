import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { checkDuplicatedEmail } from "../middlewares/verifySignUp.js";


const router = Router();


router.post('/register', checkDuplicatedEmail, registerUser);

router.post('/login', loginUser)


export default router;