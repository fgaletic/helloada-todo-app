import express from 'express';
import { getTodos, postTodo, getTodoById, patchTodo, deleteTodo } from '../controllers/todoController';
const todoRouter = express.Router();

todoRouter.get('/', getTodos);
todoRouter.post('/', postTodo);
todoRouter.get('/:id', getTodoById);
todoRouter.patch('/:id', patchTodo);
todoRouter.delete('/:id', deleteTodo);

export default todoRouter;