import React from 'react'
import { useSelector } from 'react-redux'

function TodoList() {
    const todos = useSelector(state=>state)
    // console.log(todos,'1');
  return (
    <div>
        <ul>
        {
            todos && todos.map((todo, i) => {
                <li>{todo.title}</li>
            })
        }
        </ul>
    </div>
  )
}

export default TodoList