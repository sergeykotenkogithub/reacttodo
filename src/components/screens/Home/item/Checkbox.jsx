import React from 'react'
import { BsCheck } from 'react-icons/bs'

const Checkbox = ({ isCompleted }) => {
    return (
        <div
            className={`border-2 rounded-lg
            border-pink-600 ${isCompleted ? 'bg-pink-400' : ''}
            w-5 h-5 mr-4 flex items-center justify-center`}>
            {
                isCompleted &&
                <BsCheck size={24} className='text-gray-800' />
            }
        </div>
    )
}

export default Checkbox