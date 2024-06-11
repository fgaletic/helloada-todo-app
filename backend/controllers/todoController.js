import Todo from '../schemas/todo';

const getTodos = async (_, res) => {
    try {
        const allTodos = await Todo.find()
        res.status(200).json(allTodos)

    } catch (error) {
        res.status(404).json({ message: "No todo found" })
    }
}

const postTodo = async (req, res) => {
    try {
        const body = req.body
        const data = {
            title: body.title,
            date: body.date,
            done: body.done
        }
        const todoToSave = new Todo(data)
        await todoToSave.save()
        res.status(201).json(todoToSave)
    } catch (error) {
        res.status(404).json(error)
    }
}

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params
        const todoFound = await Todo.findById(id)
        return res.status(200).json({ todoFound })
    } catch (error) {
        return res.status(500).json(error)
    }
}

const patchTodo = async (req, res) => {
    try {
        const body = req.body
        const { id } = req.params
        const todoUpdated = await Todo.findByIdAndUpdate(id, body, { new: true })
        return res.status(200).json({ todoUpdated })
    } catch (error) {
        return res.status(500).json(error)
    }
}


const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        await Todo.findByIdAndDelete(id)
        res.status(201).json({ message: "Todo deleted Successfully" })
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    getTodos,
    postTodo,
    getTodoById,
    patchTodo,
    deleteTodo
}