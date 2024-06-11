const express = require('express')
const { getTodos, postTodo, getTodoById, patchTodo, deleteTodo } = require('../controllers/todoController')
const todoRouter = express.Router()

todoRouter.get('/', getTodos)
todoRouter.post('/', postTodo)
todoRouter.get('/:id', getTodoById)
todoRouter.patch('/:id', patchTodo)
todoRouter.delete('/:id', deleteTodo)

module.exports = todoRouter