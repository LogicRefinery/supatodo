import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

//데이터베이스 서비스로직

const prisma = new PrismaClient();

const create = async (payload: any) => {
  try {
    const id = uuidv4();

    const todo = await prisma.todo.create({
      data: { ...payload, id },
    });

    return todo;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const toggle = async (payload: any) => {
  const todo = await prisma.todo.update({
    where: {
      id: payload.id,
    },
    data: {
      done: payload.done,
    },
  });

  return await prisma.todo.findUnique({
    where: {
      id: payload.id,
    },
  });
};

const remove = async (payload: any) => {
  const todo = await prisma.todo.delete({
    where: {
      id: payload.id,
    },
  });
  return { id: payload.id };
};

const modify = async (payload: any) => {
  const todo = await prisma.todo.update({
    where: {
      id: payload.id,
    },
    data: { ...payload },
  });

  return await prisma.todo.findUnique({
    where: {
      id: payload.id,
    },
  });
};
export const server_todo_service = { create, toggle, remove, modify };
