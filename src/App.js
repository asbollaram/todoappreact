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
    <section>
    <h1>Todo list in React</h1>
      <form className='fomrTodo' onSubmit={onsubmitHandler}>
        <input type="text" value={task} placeholder='Enter the values' onChange={onchangeHandler} />
        <input type='submit' value="+" />
      </form>
      <Todolist  todos={todos} deletHandler={deletHandler}/>
    </section>
  )
}

export default App