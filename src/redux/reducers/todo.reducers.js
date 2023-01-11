import { ADD, DELETE, add, deleteTodo } from "../actions/todo.actions";
import { v4 } from "uuid";
const initialState = []

const todoReducer = (state=initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    id: v4(),
                    title: action.payload,
                    complete: false,
                },
            ]
        case DELETE: 
            return state.filter(todos=> todos.id != action.payload)
        default:
        return initialState;
    }
}

export default todoReducer