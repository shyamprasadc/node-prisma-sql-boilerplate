import { Request, Response, NextFunction } from 'express';
import asyncHandler from '../helpers/asyncHandler';
import { SuccessResponse } from '../core/ApiResponse';
import { createUser, findUsers } from '../services/userService';

const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await findUsers();
  return new SuccessResponse('Users Data', users).send(res);
});

const signupUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await createUser({ name, email, password });
  return new SuccessResponse('User created', user).send(res);
});

export { getUsers, signupUser };
