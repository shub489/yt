import React from 'react'

const ChatMsg = ({ name, message }) => {
    return (
        <div className="flex items-start gap-2.5 px-2.5 py-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
            <img
                className="w-6 h-6 rounded-full object-cover shrink-0 mt-0.5"
                alt="user avatar"
                // src="https://yt4.ggpht.com/_Q8CCydyXsusxuAfcg-3476Z5KI0XERJSPa36zLEd_aa9-h6NCS6WwRyRG0exXhO0RPBKMKdIg=s32-c-k-c0x00ffffff-no-rj"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_QO1P2bAVG4K3xQj_VAgwAXdT5mubu-ioYcA8NY9bkg&s=10"
            />
            <div className="text-xs leading-relaxed break-words flex-1">
                <span className="font-semibold text-gray-500 mr-2 cursor-pointer hover:underline">
                    {name}
                </span>
                <span className="text-gray-800">
                    {message}
                </span>
            </div>
        </div>
    )
}

export default ChatMsg