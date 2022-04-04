import React from 'react';
import './Todo.css';

const TodoList = ({todolist,deleteHandler}) => {
  return (
    <div >
        {todolist.map((todo,index) => <div className='todoContent' key={index}><h3>{todo}</h3> <button className='close' onClick={()=> deleteHandler(index)}>X</button></div>
          )}
    </div>
  )
}

export default TodoList