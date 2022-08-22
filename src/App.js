import React,{useState} from 'react'
import './App.css';
import Todolist from './Componets/Todolist/Todolist';


const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const onchangeHandler = e =>{
    setTask(e.target.value);
  }
  const onsubmitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    console.log(task);
    setTodos(newTodos);
    setTask("");
  }

  const deletHandler = (indexValue) => {
    const newTodos = todos.filter((todo,index) => index !== indexValue );
    setTodos(newTodos);
  }
  return (
    <div>
      <div className="container">
       <h1>Todo list in React</h1>
        <form className='fomrTodo d-flex p-2 bd-highlight' onSubmit={onsubmitHandler}>
          <input className='form-control' type="text" value={task} placeholder='Enter the values' onChange={onchangeHandler} />
          <input type='submit' value="+" className='btn btn-warning p-4 m-2 btn-lg '/>
        </form>
       </div>
        <Todolist  todos={todos} deletHandler={deletHandler}/>
      
    </div>
  )
}

export default App