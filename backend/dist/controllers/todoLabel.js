import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getAllTasksLabel = async (req, res) => {
    const userId = req.user.userId;
    const lastIdLabel = req.query.lastIdLabel;
    const { id } = req.params;
    let query = { userId: userId };
    // if (lastIdLabel) {
    //   const lastId = parseInt(lastIdLabel);
    //   query = { ...query, id: { lt: lastId } }; // get the last ID
    // }
    const data = await prisma.todolabel.findMany({
        where: query,
        orderBy: {
            id: "desc",
        },
        take: 10,
    });
    res.json(data);
};
export const createTasksLabel = async (req, res) => {
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
export const getSingleTasksLabel = async (req, res) => {
    const { id } = req.params;
    const singleTodo = await prisma.todolabel.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    res.send(JSON.stringify(singleTodo));
};
export const updateTasksLabel = async (req, res) => {
    const { id } = req.params;
    const { task, color } = req.body;
    const updateTodo = await prisma.todolabel.update({
        where: {
            id: parseInt(id),
        },
        data: {
            task,
            color,
        },
    });
    res.send(JSON.stringify(updateTodo));
};
export const deleteTasksLabel = async (req, res) => {
    const { id } = req.params;
    const removeTodo = await prisma.todolabel.delete({
        where: { id: parseInt(id) },
    });
    res.send(JSON.stringify(removeTodo));
};
