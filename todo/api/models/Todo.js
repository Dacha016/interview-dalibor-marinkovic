const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    content: String,
    done:Boolean
});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;