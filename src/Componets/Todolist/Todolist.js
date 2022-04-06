import React from 'react'
import './Todolist.css'

const Todolist = ({todos, deletHandler}) => {
  return (
    <div >
        {todos.map((todo,index) =>
            <div className='todoContent' key={index}><h2>{todo}</h2> <button onClick={() => deletHandler(index)}>X</button></div>
        )}
    </div>
  )
}

export default Todolist