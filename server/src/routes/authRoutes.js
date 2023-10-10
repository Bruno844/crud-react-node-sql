import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { checkDuplicatedEmail } from "../middlewares/verifySignUp.js";
import { verifyToken } from "../middlewares/authJwt.js";

const router = Router();


router.post('/register', checkDuplicatedEmail,   registerUser);

router.get('/login',  loginUser)


export default router;