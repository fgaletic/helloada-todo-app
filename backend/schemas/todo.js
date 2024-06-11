const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    done: { type: Boolean, default: false }
});

const Todo = model('todo', todoSchema);

module.exports = Todo;