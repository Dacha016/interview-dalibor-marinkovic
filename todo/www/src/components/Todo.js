import React from 'react';
import { Card, CardContent, Typography, Container, IconButton } from '@material-ui/core';
import {Check, Delete } from '@material-ui/icons';

const Todo = (props) => {
    const markComplete = () => {
        props.checkTodo(props.id);
    }

    const todoStyle = props.done ? { textDecoration: 'line-through' } : {textDecoration: 'none'}

    const deleteTodo = () => {
        props.deleteTodo(props.id)
    }

  return (
    <>
        <Container>
            <Card 
                variant='outlined' 
                style={{
                    marginTop: 35,
                    background: 'lightGray'
                }}>
                    <CardContent>
                        <Typography variant='h5' component='h2' style={todoStyle}>
                            <IconButton onClick={markComplete}>
                                <Check style={{color: 'green'}}/>
                            </IconButton>
                            {props.content}
                            <IconButton style={{float: 'right'}} onClick={deleteTodo}>
                                <Delete style={{color: 'red'}}/>
                            </IconButton>
                        </Typography>
                    </CardContent>
            </Card>
        </Container>
    </>
  );
}

export default Todo;