import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data,setData] = useState([])
  const [postApi,setPostApi]= useState([])
  const [dataPost,setDataPost]= useState('');
  const [comment,setComment] = useState([])

  function hendelApi(id) {
    // setPostApi(item.id)
    setPostApi(id);
    // console.log(id);
    console.log(postApi)
  }
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{ 
          console.log(response);
          
          setData(response.data)
            console.log('hello word');
        })
    },[])

    useEffect(()=>{

      axios.get(`https://jsonplaceholder.typicode.com/posts/${postApi}`)
      .then((response)=>{
        console.log(response);
        setDataPost(response.data)
        console.log('hello');
      })

      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postApi}`)
      .then((response)=>{
        console.log(response);
        setComment(response.data)
        console.log('hello');
      })
    },[postApi])
// console.log(dataPost)
    // console.log(data);


    return (
      <div className='app'>
      
       <div >
       {data.map((item)=>{
         return (
          <div>
             <li onClick={(e)=>hendelApi(item.id)}>
              <p >id: {item.id}</p>
              <p >title: {item.title}</p>
              <p >body: {item.body}</p>
              </li>
          </div>
              )
            })}
       </div>
      <div>
      <li>
      <p >id: {dataPost.id}</p>
      <p >title: {dataPost.title}</p>
      <p >body: {dataPost.body}</p>
      </li>
      </div>
      {/* <div>
        {comment.map((e)=>{
          return(
            <div>
              <li>id: {e.id}</li>
              <li>name :{e.name} </li>
              <li>email :{e.email}</li>
              <li>body:{e.body}</li>
            </div>
            
          )
        })}
      </div> */}


    </div>
  )
}
export default App;
