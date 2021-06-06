import { 
    ADD_TODO,
    DEL_TODO,
    TOGGLE_TODO,
    FILTER_TODO,
    FILTER_TYPE
    } from "./types"

const initialState={
    todoList:[],
    filter:false,
    filterType:true

}
export const todoReducer=(state = initialState,{type,payload})=>{
    switch(type){
        case ADD_TODO:
            return {...state, todoList:[...state.todoList,payload]}
        case DEL_TODO:
            return {...state, todoList:[...state.todoList.filter(todo=>todo.id!==payload)]}
        case TOGGLE_TODO:
            return {...state, todoList:[...state.todoList.map(todo=>{if(todo.id===payload){return {...todo,done:!todo.done}} return todo})]}
        case FILTER_TODO:
            return {...state, filter:payload }
        case FILTER_TYPE:
            return {...state, filterType:payload }
        
            
        default: return state
    }
    
}