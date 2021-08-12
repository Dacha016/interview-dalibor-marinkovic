import React, {useState} from 'react';
import {Container, FormControl, TextField, Button} from '@material-ui/core';

const TodoForm = (props) => {
    const [content, setContent] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        props.addTodo(content);
        setContent('');
    }

  return (
    <Container maxWidth='sm'>
      <form onSubmit={submitHandler}>
          <FormControl fullWidth={true}>
              <TextField 
                label='Add Todo'
                required={true}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            <Button variant='contained' color='primary' type='submit' style={{
                marginTop: 10
            }}>
                Add Todo
            </Button>
          </FormControl>
      </form>
    </Container>
  );
}

export default TodoForm;