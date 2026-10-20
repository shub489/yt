import React, { useState } from 'react'
import { HAMBURGER_ICON, YOUTUBE_LOGO } from '../utils/constant'
import { Search, User } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../redux/sidebarSlice'
import { Link } from 'react-router-dom'

const Header = ({ }) => {

    const dispatch = useDispatch()



    return (
        <header className="flex items-center justify-between px-6 py-2.5 shadow-sm sticky top-0 bg-white z-50">
            {/* Left section: Hamburger & Logo */}
            <div className="flex items-center gap-4">
                <img
                    className="h-6 cursor-pointer hover:opacity-75 transition-opacity"
                    src={HAMBURGER_ICON}
                    alt="Hamburger Menu"
                    onClick={() => dispatch(toggleSidebar())}
                />
                <Link to="/">
                    <img
                        className="h-5 cursor-pointer object-contain"
                        src={YOUTUBE_LOGO}
                        alt="YouTube Logo"
                    /></Link>
            </div>

            {/* Center section: Search Bar */}
            <div className="flex items-center justify-center flex-1 max-w-2xl mx-6">
                <div className="flex w-full items-center">
                    <input
                        className="h-10 w-full px-4 border border-gray-300 rounded-l-full text-sm focus:outline-none focus:border-blue-500 shadow-inner placeholder-gray-500"
                        type="text"
                        placeholder="Search"
                    />
                    <button
                        className="h-10 px-6 bg-gray-100 hover:bg-gray-200 border border-l-0 border-gray-300 rounded-r-full transition-colors cursor-pointer flex items-center justify-center shrink-0"
                        title="Search"
                    >
                        <Search size={19} className="text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Right section: User Profile */}
            <div className="flex items-center">
                <button
                    className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors"
                    title="User Profile"
                >
                    <User size={22} className="text-gray-700" />
                </button>
            </div>
        </header>
    )
}

export default Header