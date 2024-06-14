import express from 'express';
import { getTodos, postTodo, getTodoById, patchTodo, deleteTodo } from '../controllers/todoController.js';
const todoRouter = express.Router();

todoRouter.get('/todos', getTodos);
todoRouter.post('/todos', postTodo);
todoRouter.get('/todos/:id', getTodoById);
todoRouter.patch('/todos/:id', patchTodo);
todoRouter.delete('/todos/:id', deleteTodo);

export default todoRouter;