import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { addUser ,deleteUser,updateUser } from './Features/Users';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state)=> state.users.value);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [newUserName,setNewUserName] = useState("")

  return (
    <div className="App">

        <div className='addUser'>
            <input type="text" placeholder='Enter name...' 
            onChange={(event)=>{setName(event.target.value)}}/>
            <input type="text" placeholder='Enter email...'
            onChange={(event)=>{setEmail(event.target.value)}}/>
            <button onClick={()=>{dispatch(addUser({id: userList[userList.length - 1].id + 1 , name , email}))}}> Add User
            </button>
        </div>
        <div className='displayUsers'>
            {userList.map((user)=>{
               return (
                <div>
                  <h1>{user.name}</h1>
                  <h1>{user.email}</h1>
                  <input type="text" placeholder='new username...' 
                  onChange={(event)=>{setNewUserName(event.target.value)}}
                  />
                  <button onClick={()=>{dispatch(updateUser({id:user.id , name:newUserName}))}}>update username</button>
                  <button onClick={()=>{dispatch(deleteUser({id:user.id}))}}>delete username</button>
                </div>

               )
               
            })}
        </div>
    </div>
  );
}

export default App;
