import React from 'react'
import { useState } from 'react'
import CreateTodoField from './create-todo-field/CreateTodoField'
import TodoItem from './item/TodoItem'

const data = [
    {
        _id: '1',
        tittle: "Finish the essay collaboration",
        isCompleted: false
    },
    {
        _id: '2',
        tittle: "Read next chapter of the book",
        isCompleted: false
    },
    {
        _id: '3',
        tittle: "Send document",
        isCompleted: false
    },
]

const Home = () => {

    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

    console.log(todos.length)


    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-4'>Todo</h1>
            <CreateTodoField setTodos={setTodos} />
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo._id}
                        todo={todo}
                        changeTodo={changeTodo}
                        removeTodo={removeTodo}
                    />
                ))
            }
            {!todos.length && <div className='text-center'> No tasks </div>}
        </div>
    )
}

export default Home