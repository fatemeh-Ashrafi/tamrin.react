 import React from 'react'
import {Link} from "react-router-dom";


 function Navbar() {
  return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">

    <a class="navbar-brand" href="/">React</a>
    <button class="navbar-toggler" type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link"  to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to="/setting">setting</Link>
        </li>
      </ul>
    </div>
    <Link className='btn btn-outline-light' to='/users/add'>Add User</Link>
  </div>
</nav>
   
)    
}  

export default Navbar;