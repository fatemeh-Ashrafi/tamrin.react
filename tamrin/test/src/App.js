import React, { useState , useEffect , useMemo} from 'react';
import './App.css'
import Greet from './Greet';
import axios from "axios";
import SearchFilter from './SearchFilter';
import Card from './Card';
import Api from './Api';


function App() {
  const [count,setCount] = useState(4);
  const [them,setThem] = useState('red');
  const [value,setValue] = useState('fatemeh');
  const [date,setDate] = useState('');
  const [number,setNumber] = useState(1);
  const [num,setNum] = useState(0);
  const [dark,setDark] = useState(false);

  const doubelNumber =useMemo(()=>{
    return slowFunction(num)
  },[num]);
  const themStyle = {
    backgroundColor : dark ? "black" : "white",
    color : dark ? "white" :"black"
  }

  function addCount() {
    // setCount(count+1)
    setCount(nextCont=>nextCont+1)
    setThem('blue')
  }
  function removeCount() {
    setCount(perveCont=>perveCont-1)
  }

  function changeValue(e) {
    const chenge = e.target.value
    setValue(chenge)
  }

  useEffect(()=>{
    // console.log('hello word');
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response)=>{
      setDate(response.data[0].email);
      console.log('hello api ...');
    },[number])
  })

  return (
    <>
    <button onClick={addCount}>+</button>
    <span>{count}</span>
    <span>{them}</span>
    <button onClick={removeCount}>-</button>
    <div>
     <input onChange={changeValue}></input>
     {value}
    </div>
    <Greet name="fatemeh" age='20'>
      <p>this is children props</p>
    </Greet>
    <Greet name="setayesh" age='22'>
      <button>click mi</button>
    </Greet>
    <Greet name="iman" age='19' />
    <h1>hello word {date}</h1>
    <button onClick={()=>{setNumber(number +1)}}>{number}</button><br/>
     {/* ===================================================================================  */}
     <input type="number" value={num} onChange={e =>{setNum(parseInt(e.target.value))}}></input>
    <button onClick={ () => setDark(pervDark => !pervDark)}>chenga them</button>
    <div style={themStyle}>{doubelNumber}</div><br/>
    <SearchFilter/>
    <Card/>
    <Api/> 
    
    </>
  )
}

function slowFunction(num) {
  console.log('slow function');
  for (let i = 0; i <= 1000000000; i++) {
    return num * 2
  }
}
export default App;

