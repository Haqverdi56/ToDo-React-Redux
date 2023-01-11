const ADD = 'ADD'
const DELETE = 'DELETE'


const add = (item) => {
    return {
        type: ADD,
        payload:item
    }
}

const deleteTodo = (id) => {
    return {
        type: DELETE,
        payload: id,
    }
}

export {ADD,DELETE, add, deleteTodo}