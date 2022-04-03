import express from 'express';
import { getUsers, signupUser } from '../../controllers/userController';
const router = express.Router();

router.get('/', getUsers);
router.post('/', signupUser);

export default router;
