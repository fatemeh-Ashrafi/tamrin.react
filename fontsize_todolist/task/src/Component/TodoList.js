import React from 'react';
import Todo from './Todo';

function TodoList({todo}) {
  return (
    todo.map(todo=>{
        return <Todo key={todo} todo={todo}/>
    })
  )
}

export default TodoList
