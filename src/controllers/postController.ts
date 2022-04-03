import { Request, Response } from 'express';
import asyncHandler from '../helpers/asyncHandler';
import { SuccessResponse } from '../core/ApiResponse';
import { createPost, findPosts } from '../services/postService';

const getPosts = asyncHandler(async (req: Request, res: Response) => {
  const posts = await findPosts();
  return new SuccessResponse('Posts data', posts).send(res);
});

const addPost = asyncHandler(async (req: Request, res: Response) => {
  const { title, content, authorEmail } = req.body;
  const post = await createPost({ title, content, authorEmail });
  return new SuccessResponse('Post created', post).send(res);
});

export { getPosts, addPost };
