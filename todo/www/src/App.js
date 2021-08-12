import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container} from '@material-ui/core';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get('http://localhost:5001/api/');
      // console.log(response.data)
      setTodos(response.data)
    }

    getTodos();
  }, [])

  // Create Todo
  const addTodo = async (content) => {
    await axios.post('http://localhost:5001/api/', {content:content});
    const res = await axios.get('http://localhost:5001/api/');
    // console.log(response.data)
    setTodos(res.data)
  }

  // Check Todo and update
  const checkTodo = async (id) => {
    await axios.put(`http://localhost:5001/api/${id}`);
    const res = await axios.get('http://localhost:5001/api/');
    setTodos(res.data)
  }

  // Delete Todo
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5001/api/${id}`);
    const res = await axios.get('http://localhost:5001/api/');
    setTodos(res.data)
  }

  return (
    <Container>
      <header align='center'>
        <h1>Todo<span>list</span></h1>
      </header>
      <main>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
      </main>
      <footer align='center'>
        <p>Copyright &copy; Dalibor Marinkovic</p>
      </footer>
    </Container>
  );
}

export default App;
