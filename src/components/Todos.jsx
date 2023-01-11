import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/actions/todo.actions'
import Todo from './Todo'
import "./todo.css"

function Todos() {
  const [title, setTitle] = useState('')
  const todos = useSelector(state=> state)
  const dispatch = useDispatch()

  const onchange = (e) => {
    setTitle(e.target.value)
  }

  const addTodo = () => {
    dispatch(add(title))
    setTitle('')
  }

  return (
    <>
    <div className='todos'>
      <form onSubmit={(e)=>{
        e.preventDefault()
        setTitle('')
      }}>
      <input value={title} type="text" onChange={onchange} />
      <button onClick={addTodo} disabled={title<1 ? true : false}>Add Todo</button>
      </form>
    </div>
    <div className='todo'>
        <ul className='todo-ul'>
          {
            todos && todos.map((todo, i) => (
              <Todo key={i} todo={todo} />
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Todos