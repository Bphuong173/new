import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";

export const getAllTasksLabel = async (req: Request, res: Response) => {
  const userId = req.user.userId;
  const lastIdLabel = req.query.lastIdLabel || null;
  
  let query: { [key: string]: any } = { userId: userId };

  if (lastIdLabel) { 
    query = { ...query, id: { lt: lastIdLabel } }; // get the last ID
  }

  const data = await prisma.todolabel.findMany({
    where: query,
    orderBy: {
      id: "desc",
    },
    take: 10,
  });

  res.json(data);
};

export const createTasksLabel = async (req: Request, res: Response) => {
  const userId = req.user.userId;
  const { task, color } = req.body;
  const newTodomodel = prisma.todolabel.create({
    data: {
      task,
      color,
      userId: userId,
    },
  });
  res.send(JSON.stringify(newTodomodel));
};
export const getSingleTasksLabel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const singleTodo = await prisma.todolabel.findUnique({
    where: {
      id: (id),
    },
  });
  res.send(JSON.stringify(singleTodo));
};
export const updateTasksLabel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { task, color } = req.body;
  const updateTodo = await prisma.todolabel.update({
    where: {
      id: (id),
    },
    data: {
      task,
      color,
    },
  });
  res.send(JSON.stringify(updateTodo));
};
export const deleteTasksLabel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const removeTodo = await prisma.todolabel.delete({
    where: { id: (id) },
  });
  res.send(JSON.stringify(removeTodo));
};
