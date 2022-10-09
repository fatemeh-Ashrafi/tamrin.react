import React from 'react';
import { useDispatch } from 'react-redux';
import { login , logout } from '../Features/Users';

function Login() {

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=>
        {dispatch(login({name :"fatemeh" , age: 20 , email:"fatemeh@gmail.com"}))}}>
          Login
        </button>

        <button 
        onClick={()=>{dispatch(logout())}}>
            logout
        </button>

    </div>
  )
}

export default Login
