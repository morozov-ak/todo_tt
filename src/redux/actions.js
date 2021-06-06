import { 
    ADD_TODO,DEL_TODO,TOGGLE_TODO,FILTER_TODO,FILTER_TYPE
} from "./types";

export function addTodo(todo) {
    return async dispatch => {
            dispatch({ type: ADD_TODO, payload: todo })
    }
}
export function delTodo(id) {
    return async dispatch => {
            dispatch({ type: DEL_TODO, payload: id })
    }
}
export function toggleTodo(id) {
    return async dispatch => {
            dispatch({ type: TOGGLE_TODO, payload: id })
    }
}
export function filterTodo(status) {
    return async dispatch => {
            dispatch({ type: FILTER_TODO, payload: status })
    }
}
export function filterTodoType(type) {
    return async dispatch => {
            dispatch({ type: FILTER_TODO, payload: true })
            dispatch({ type: FILTER_TYPE, payload: type })
    }
}

