import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h1>404!!!</h1>
      <h3>Oops , Looks Like You lost</h3>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default NotFound
