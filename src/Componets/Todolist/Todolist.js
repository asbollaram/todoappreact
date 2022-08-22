import React from 'react';
import './Todolist.css';
import Container from 'react-bootstrap/Container';

const Todolist = ({todos, deletHandler}) => {
  return (
    <div>
        <Container>
            {todos.map((todo,index) =>
                <div className='todoContent' key={index}><h2>{todo}</h2> <button className='btn btn-outline-danger' onClick={() => deletHandler(index)}>X</button></div>
            )}
        </Container>
    </div>
  )
}

export default Todolist