import React, {useState,useEffect} from 'react';
import axios from 'axios';

function Api() {
 
  const [count,setCount] = useState(1)
  const [data,setData] = useState('')

  useEffect(()=>{
    // console.log('hello word');
    axios.get(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then((response)=>{
      setData(response.data.title);
      console.log('hello');
    },[count])
  })
  
  return (
    <div className="App">
    {count}
    <button onClick={()=>{setCount(count + 1)}}>next</button>
    <button onClick={()=>{setCount(count - 1);}}>pre</button>
    {data}
   </div> 
  );
}
 
export default Api;