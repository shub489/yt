import React, { useEffect, useState } from 'react'
import ChatMsg from './ChatMsg'
import { ChevronDown, MoreVertical, SendHorizontal } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../redux/chatSlice'
import { generateRandomChat } from '../utils/commanFunction'

const LiveChat = () => {
    const dispatch = useDispatch()
    const messages = useSelector((state) => state.chat.messages)

    const [comment, setComment] = useState("")

    useEffect(() => {
        const i = setInterval(() => {
            // Api Call
            console.log("API call is made")
            dispatch(addMessage(generateRandomChat()))
        }, 1000)

        return () => clearInterval(i)
    }, [])

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!comment.trim()) return
        dispatch(addMessage({ name: "Shubham Gupta", message: comment.trim() }))
        setComment("")
    }

    return (
        <div className="w-full h-[450px] bg-white border border-gray-200 rounded-2xl flex flex-col shadow-xs overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 bg-white select-none">
                <div className="flex items-center gap-1.5 cursor-pointer hover:bg-gray-100 px-2 py-1 -ml-1.5 rounded-lg transition-colors">
                    <h2 className="text-sm font-semibold text-gray-800">Top chat</h2>
                    <ChevronDown size={16} className="text-gray-500" />
                </div>
                <button className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
                    <MoreVertical size={18} />
                </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto px-2 py-2 flex flex-col-reverse">
                {
                    messages && messages.length > 0 && messages.map(({ name, message }, index) => (
                        <ChatMsg key={index} name={name} message={message} />
                    ))
                }
            </div>

            {/* Input Form */}
            <div className="p-2.5 border-t border-gray-200 bg-white">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Chat..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="flex-1 bg-gray-100 hover:bg-gray-200/60 focus:bg-white text-sm text-gray-800 placeholder-gray-500 rounded-full px-4 py-2 outline-none border border-transparent focus:border-blue-500 transition-all"
                    />
                    <button
                        type="submit"
                        disabled={!comment.trim()}
                        className="p-2 text-blue-600 hover:bg-blue-50 disabled:text-gray-300 disabled:hover:bg-transparent rounded-full transition-colors cursor-pointer disabled:cursor-not-allowed shrink-0"
                        title="Send"
                    >
                        <SendHorizontal size={18} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LiveChat