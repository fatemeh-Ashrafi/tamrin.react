import React from 'react'

function Person({person , key}) {
  return (
    <div>
      <h2>
       {key}  i am {person.fname} i am {person.age} 
      </h2>
    </div>
  )
}

export default Person
