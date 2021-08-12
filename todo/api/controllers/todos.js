const Todo = require('../models/Todo')

const getTodos = async (req, res) => {
    const todos = await Todo.find({});

    res.json({ todos });
}

const createTodo = async (req, res) => {
    const {content} = req.body;
    let todo = await Todo.create({content, done: false});
    res.status(201).json({todo})
}

const updateTodo = async (req, res) => {
    const id = req.params.id;

    todo = await Todo.findById(id);
    if (todo) {
        if(todo.done === true){
            todo.done = false;
            let updatedTodo = await todo.save()
            res.json(updatedTodo)
        }else{
            todo.done = true;
            let updatedTodo = await todo.save()
            res.json(updatedTodo)
        }
    }else {
        res.json({ 'message': 'Todo not found' })
    }
}

const removeTodo = async (req, res) => {
    const id = req.params.id;

    todo = await Todo.findById(id);
    if (todo) {
        await todo.remove()
        res.json({ message: 'Todo removed' })
    }else {
        res.json({ message: 'Todo not found' })
    }
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    removeTodo
};