import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Components/Pages/Home';
import Setting from './Components/Pages/Setting';
import Navbar from './Components/style/Navbar';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import AddUser from './Components/User/AddUser'
import EditUser from './Components/User/EditUser';
import View from './Components/User/View';
function App() {
  return (
    <Router>
       <div className='APP'>
     <Navbar/> 

        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/users/add' element={<AddUser/>}/>
          <Route path='/users/edit/:id' element={<EditUser/>}/>
          <Route path='./users/:id' element={<View/>}/>
        </Routes>

    </div>
     </Router>
  )
}

export default App;