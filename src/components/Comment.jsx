import { User } from 'lucide-react'
import React from 'react'

const Comment = ({ data }) => {
    const { name, text } = data
    return (
        <div className="flex gap-3 items-start my-1.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                <User size={18} className="text-gray-600" />
            </div>
            <div className="flex-1">
                <p className="font-semibold text-xs text-gray-900 leading-tight">@{name}</p>
                <p className="text-sm text-gray-800 mt-0.5 leading-snug">{text}</p>
            </div>
        </div>
    )
}

export default Comment