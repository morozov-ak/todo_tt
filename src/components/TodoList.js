import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { delTodo,toggleTodo } from '../redux/actions'

const TodoList = ({ todos,filter,filterType  }) => {
    const dispatch = useDispatch()
    if (todos.length) {
        return (
            <>
                <ul className="list-group">
                    {todos
                    .filter(todo=>{
                        if(!filter){return todo}
                        return todo.done===filterType
                    })
                    .map(todo => {
                        return (
                            <React.Fragment key={todo.id}>
                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center "
                                    onClick={(event) => { event.stopPropagation();dispatch(toggleTodo(todo.id)) }}
                                >
                                    <span class={todo.done&&"text-decoration-line-through"}>{todo.name}</span>
                                    <button onClick={(event) => {event.stopPropagation();dispatch(delTodo(todo.id))}} type="button" className="btn btn-danger btn_del">Х</button>
                                </li>
                                
                            </React.Fragment>
                        )
                    })}

                </ul>

            </>
        )
    }

    return (<h2>Пока нет todo</h2>)

}

const mapStateToProps = state => {
    return { todos: state.notes.todoList,filter:state.notes.filter, filterType:state.notes.filterType }
}

export default connect(mapStateToProps, null)(TodoList)
