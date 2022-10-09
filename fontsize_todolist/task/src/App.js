import './App.css';
import FontSize from './FontSize/FontSize';
import TodoList from './Component/TodoList';
import { useState , useRef, useEffect} from 'react';
// import uuidv4 from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todo'

function App() {

  const [todo,setTodo] = useState([]);
  const todoNameRef = useRef();

  useEffect(()=>{
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodo) setTodo(storedTodo)
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo))
  },[todo])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if(name === "") return
    setTodo( pervetodo =>{
      return [...pervetodo,{id:1 , name: name , complete:false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <div className="App">
      <FontSize/>
      <TodoList todo={todo}/>
      <input ref={todoNameRef} type='text'/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left todo</div>
    </div>
  );
}

export default App;
