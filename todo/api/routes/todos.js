const express = require('express');
const router = express.Router();
const todos = require('../controllers/todos');

router
    .route('/')
        .get(todos.getTodos)
        .post(todos.createTodo)

router
    .route("/:id")
        .put(todos.updateTodo)
        .delete(todos.removeTodo)

module.exports = router;