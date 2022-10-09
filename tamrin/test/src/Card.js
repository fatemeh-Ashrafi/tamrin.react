import React, { useState } from 'react'

function Card() {

  const [data,setDate] = useState([]);
  const [name,setName] = useState("");
  const [age,setAge] = useState();

    function myClick() {
        if (name === '' || age === '') {
            alert('please por konid fild')
          }
          
          const esm = {Name:name}
          setName(data.push(esm))
          const sen = {Age:age}
          setAge(data.push(sen))
          console.log(setDate(data))
          return
    }

  return (
    <div className='app'>
      
      <input placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
      <input placeholder='age' value={age} onChange={(e)=>{setAge(e.target.value)}}></input>
      <input type="submit" value='Submit' onClick={myClick}/>
    </div>
  )
}

export default Card;
