import React, { useId } from 'react'

function Useid() {

    const id = useId()

  return (
    <div>

        <label htmlFor={id}>Email</label>
        <input id={id} type="email"/>
       
        
      
    </div>
  )
}

export default Useid;
