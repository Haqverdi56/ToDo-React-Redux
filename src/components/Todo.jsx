import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions/todo.actions";
import "./todo.css";

function Todo({ todo }) {
  const dispatch = useDispatch();
  console.log(todo);

  const remove = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className="todo-ul-li">
      {todo.title}
      <div>
        <button onClick={remove}>Delete</button>
      </div>
    </li>
  );
}

export default Todo;
