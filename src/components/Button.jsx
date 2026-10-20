import React from 'react'

export const Button = ({ name }) => {
    const isActive = name === 'All'

    return (
        <button
            className={`px-3.5 py-1.5 m-1 text-sm font-medium rounded-lg whitespace-nowrap cursor-pointer transition-colors shrink-0 ${isActive
                ? 'bg-black text-white hover:bg-neutral-800'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
        >
            {name}
        </button>
    )
}
