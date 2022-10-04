import React, { useState } from 'react'

const CreateTodoField = ({ setTodos }) => {

    const [title, setTitle] = useState('')

    const addTodo = title => {
        setTodos(prev => [
            {
                _id: new Date(),
                tittle: title,
                isCompleted: false
            },
            ...prev,
        ])
        setTitle('')
    }

    return (
        <div
            className='flex items-center justify-between mb-4 rounded-xl w-full border-2 border-zinc-800 mb-6 mt-6'
        >
            <input
                type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyDown={e => e.key === 'Enter' && addTodo(title)}
                className='bg-transparent w-full border-none outline-none p-5'
                placeholder='Add a task'
            />
        </div>
    )
}

export default CreateTodoField