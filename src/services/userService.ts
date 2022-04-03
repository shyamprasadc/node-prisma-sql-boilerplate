import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const findUsers = async (): Promise<any> => {
  const users = await prisma.user.findMany();
  return users;
};

const createUser = async (data: any): Promise<any> => {
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });
  return user;
};

export { findUsers, createUser };
