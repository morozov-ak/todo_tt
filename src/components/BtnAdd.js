import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'
import { message } from '../utilites/message.js'
const shortid = require('shortid');

export const BtnAdd = () => {
    const dispatch = useDispatch()

    const [todo, setTodo] = useState({
        name: '', text: '', done: false
    })

    const changeHandler = event => {
        setTodo({ ...todo, [event.target.name]: event.target.value })
    }

    const createHandler = (todo) => {
        try {
            if(todo.name.length===0){
                throw new Error("введите имя Todo")
            }
            if(todo.name.length>20){
                throw new Error("количество символов в названии превышает 20")
            }

            dispatch(addTodo({...todo,id:shortid.generate()}))
            setTodo({name:"",text:"",done:false})
        }
        catch (e) {message(e)}
    }

    return (
        <>

            <button
                onClick={(event) => { event.stopPropagation() }}
                type="button"
                id="#f11"
                className="btn btn-success custom_add_btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                New todo
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Создание новой задачи</h5>
                            <button onClick={(event) => { event.stopPropagation() }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="input-group mb-3">
                                    <input onChange={changeHandler} value={todo.name} name="name" id="name" type="text" placeholder="Todo name" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={(event) => { event.stopPropagation(); createHandler({...todo,id:shortid.generate()})}} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Создать и закрыть окно</button>
                            <button onClick={(event) => { event.stopPropagation(); createHandler({...todo,id:shortid.generate()}) }} type="button" data-dismiss="modal" className="btn btn-danger">Создать</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
