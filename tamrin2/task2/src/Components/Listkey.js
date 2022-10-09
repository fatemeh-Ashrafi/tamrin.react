import React from 'react'
import Person from './Person'

function Listkey() {

    const persons = [
        {
            id: 1,
            fname:"fatemeh",
            age:20
        },
        {
            id:2,
            fname:"mina",
            age:19
        },
        {
            id:3,
            fname:"maryam",
            age:22
        }
    ]

    const personList = persons.map(person => <Person key={person.id} person={person}/>)

  return <div>{personList}</div>
  
}

export default Listkey;
