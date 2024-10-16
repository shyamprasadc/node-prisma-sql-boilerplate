import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// service to find posts and create posts
const findPosts = async (): Promise<any> => {
  const posts = await prisma.post.findMany({
    include: { author: true },
  });
  return posts;
};

const createPost = async (data: any): Promise<any> => {
  const post = await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      author: { connect: { email: data.authorEmail } },
    },
  });
  return post;
};

export { findPosts, createPost };
