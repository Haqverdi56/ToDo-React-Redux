import './App.css'
import Todos from './components/Todos'
import {Routes, Route, Link} from "react-router-dom"
import TodoList from './components/TodoList'

function App() {

  return (
    <div className="App">
      <Link to='todo'>Todo</Link>
      <Link to='todolist'>Todo List</Link>
      <Routes>
        <Route path='todo' element={<Todos />}/>
        <Route path='todolist' element={<TodoList />}/>
      </Routes>
    </div>
  )
}

export default App
