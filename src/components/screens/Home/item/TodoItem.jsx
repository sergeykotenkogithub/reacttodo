import React from 'react'
import Checkbox from './Checkbox'
import { BsTrash } from 'react-icons/bs'


const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <div
            className='flex items-center justify-between mb-4 rounded-xl bg-gray-800 p-5 w-full'
            onClick={(e) => {
                // if (!e.target.closest('.delete-todo-item')) changeTodo(todo._id)
                !e.target.closest('.delete-todo-item') && changeTodo(todo._id)
            }}
        >
            <button className='flex items-center' >
                <Checkbox isCompleted={todo.isCompleted} />
                <span className={todo.isCompleted ? 'line-through' : ''}>
                    {todo.tittle}
                </span>
            </button>
            <button onClick={() => removeTodo(todo._id)} className="delete-todo-item">
                <BsTrash size={22} className='text-gray-600 hover:text-red-700 transition-color ease-in-out duration-300' />
            </button>
        </div>
    )
}

export default TodoItem