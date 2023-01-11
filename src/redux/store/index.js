import { createStore } from "redux";
import todoReducer from "../reducers/todo.reducers"

const store = createStore(todoReducer)

export default store