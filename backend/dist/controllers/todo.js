import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getAllTasks = async (req, res) => {
    const userId = req.user.userId; //lấy uesrId r gán vào biến
    // const lastIdTodo = req.query.lastIdTodo || null; 
    const { id } = req.params;
    let query = { userId: userId }; //lọc và tìm kiếm dữ liệu
    // cập nhật query object bằng cách sử dụng lastIdTodo
    // if (lastIdTodo && typeof lastIdTodo === "string") {
    //   try {
    //     query = { ...query, userId:  id  };
    //   } catch (error) {
    //     console.error("Error converting lastIdTodo to ObjectId:", error);
    //   }
    // } else {
    //   console.error("Invalid lastIdTodo value:", lastIdTodo);
    // }
    const data = await prisma.todo.findMany({
        where: query,
        take: 5
    });
    const newData = [];
    for (const todoItem of data) {
        let dataTodoLabel;
        try {
            if (todoItem.labelId) {
                dataTodoLabel = await prisma.todolabel.findUnique({
                    where: { id: Number(id) }
                });
                if (!dataTodoLabel) {
                    console.error(`Label not found for todo with labelId: ` //thêm
                    );
                    continue;
                }
            }
            else {
                console.error(`LabelId not provided for todo with _id: }` // thêm
                );
                continue;
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
        const newTodo = {
            ...todoItem,
            label: dataTodoLabel.task,
        };
        newData.push(newTodo);
    }
    res.json(newData);
};
export const createTasks = async (req, res) => {
    const userId = req.user.userId;
    const { task, labelId, time, clockCompleted, countdownTime, notes } = req.body;
    const newTodomodel = await prisma.todo.create({
        data: {
            task,
            labelId,
            time,
            clockCompleted,
            countdownTime,
            userId,
            notes,
            createTime: new Date(),
        }
    });
    res.send(JSON.stringify(newTodomodel));
};
export const getSingleTasks = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.userId;
    try {
        const singleTodo = await prisma.todo.findFirst({
            where: {
                id: Number(id), userId: userId
            }
        });
        if (!singleTodo) {
            return res
                .status(404)
                .json({ message: "Todo not found or unauthorized" });
        }
        res.send(JSON.stringify(singleTodo));
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const updateTasks = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.userId;
    console.log("Received update request for task ID:", id);
    console.log("Request body:", req.body);
    try {
        const existingTodo = await prisma.todo.findFirst({
            where: {
                id: Number(id), userId: userId
            }
        });
        if (!existingTodo) {
            return res
                .status(404)
                .json({ message: "Todo not found or unauthorized" });
        }
        const updateTodo = await prisma.todo.update({
            where: {
                id: Number(id),
            },
            data: {
                task: req.body.task,
                labelId: req.body.label,
                time: req.body.time,
                clockCompleted: req.body.clockCompleted,
                notes: req.body.notes,
            },
        });
        console.log("Updated todo:", updateTodo);
        res.send(JSON.stringify(updateTodo));
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteTasks = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.userId;
    try {
        const existingTodo = await prisma.todo.findFirst({ where: {
                id: Number(id),
                userId: userId,
            }, });
        if (!existingTodo) {
            return res
                .status(404)
                .json({ message: "Todo not found or unauthorized" });
        }
        await prisma.todo.delete({ where: { id: Number(id) } });
        res.send("Todo deleted successfully");
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
