import Todo from '../schemas/todo.js'; 

export const getTodos = async (_, res) => {
    try {
        const allTodos = await Todo.find();
        res.status(200).json(allTodos);
    } catch (error) {
        res.status(404).json({ message: "Error retrieving todos" });
    }
}

export const postTodo = async (req, res) => {
    try {
        const body = req.body;
        const data = {
            title: body.title,
            date: body.date,
            done: body.done
        }
        const todoToSave = new Todo(data);
        await todoToSave.save();
        res.status(201).json(todoToSave);
    } catch (error) {
        res.status(500).json({ message: "Error creating todo" });
    }
}

export const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todoFound = await Todo.findById(id);
        return res.status(200).json({ todoFound });
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving todo" });
    }
}

export const patchTodo = async (req, res) => {
    try {
        const body = req.body;
        const { id } = req.params;
        const todoUpdated = await Todo.findByIdAndUpdate(id, body, { new: true });
        return res.status(200).json({ todoUpdated });
    } catch (error) {
        return res.status(500).json({ message: "Error updating todo" });
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(201).json({ message: "Todo deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting todo" });
    }
}
