import express, { Request, Response, NextFunction } from 'express';
import { SuccessMsgResponse } from '../../core/ApiResponse';
import asyncHandler from '../../helpers/asyncHandler';
const router = express.Router();
import user from './user';
import post from './post';

router.get(
  '/',
  asyncHandler(async (req: Request, res: Response, next: NextFunction) =>
    new SuccessMsgResponse('OK').send(res),
  ),
);
router.use('/users', user);
router.use('/posts', post);

export default router;
