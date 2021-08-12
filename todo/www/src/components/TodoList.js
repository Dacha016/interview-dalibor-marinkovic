import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, checkTodo, deleteTodo}) => {
  return (
    <>
    {/* {console.log(todos.todos)} */}
    {todos.todos && todos.todos.map( todo => {
        return (
            <Todo key={todo._id} content={todo.content} done={todo.done} checkTodo={checkTodo} id={todo._id} deleteTodo={deleteTodo}/>
        )
    })}
    </>
  );
}

export default TodoList;