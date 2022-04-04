import './App.css';
import React,{useState} from 'react';
import TodoList from './TodoList';

function App() {
  const [task, setTask] = useState("");
  const [todos,setTodos] = useState([]);
  const changeHandler = e =>{
    setTask(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    console.log(task)
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
      const newTodos = todos.filter((todo,index) => index !== indexValue);
      setTodos(newTodos);
  }
  return (
    <div className="App">
   
     <h2>Todo list App</h2>
     <div className='container'>
     <form onSubmit={submitHandler}>
      <div className='hero_content'>
        <input type='text' name="search" placeholder=' Add todo here!' value={task}  onChange={changeHandler}/>
        <button type='submit' name="Add" className='pluse_button'>+</button>
      </div>
      </form>
     <TodoList todolist={todos} deleteHandler={deleteHandler}/>
     </div>
    </div>
  );
}

export default App;
