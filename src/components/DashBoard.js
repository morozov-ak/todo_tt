import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { filterTodo, filterTodoType } from '../redux/actions'

const DashBoard = ({ todos,filter,filterType }) => {
    const dispatch = useDispatch()
    let todoCount = todos.length
    let todoDone = todos.filter(todo=>todo.done).length
    let todoUnDone = todoCount - todoDone
    return (
        <div className="dashboard_wrapper">
            <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    filter options
                </button>
                <div class="dropdown-menu custom-dropdown">
                        <div class="form-check">
                            <input onClick={(event) => { event.stopPropagation(); dispatch(filterTodo(false)) }} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={!filter}></input>
                            <label class="form-check-label" for="flexRadioDefault1">
                                all todo
                            </label>
                        </div>
                        <div class="form-check">
                            <input onClick={(event) => { event.stopPropagation(); dispatch(filterTodoType(true)) }} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={filter&&filterType}></input>
                            <label class="form-check-label" for="flexRadioDefault2">
                                done
                            </label>
                        </div>
                        <div class="form-check">
                            <input onClick={(event) => { event.stopPropagation(); dispatch(filterTodoType(false)) }} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked={filter&&(!filterType)}></input>
                            <label class="form-check-label" for="flexRadioDefault3">
                                undone
                            </label>
                        </div>
                </div>
            </div>
            <div className="counterWrapper">
                <span>Всего todo: {todoCount}. Выполнено:{todoDone}, не выполнено:{todoUnDone}.</span>
            </div>
            
        </div>)

}

const mapStateToProps = state => {
    return { todos: state.notes.todoList,filter:state.notes.filter, filterType:state.notes.filterType}
}

export default connect(mapStateToProps, null)(DashBoard)
