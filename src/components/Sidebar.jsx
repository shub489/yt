import React from 'react'
import { Home, PlaySquare, Tv2, Music, Trophy, Gamepad2, Clapperboard, Flame, Compass } from 'lucide-react'

const Sidebar = () => {
    return (
        <aside className="w-56 p-3 border-r border-gray-100 min-h-[calc(100vh-56px)] sticky top-14 bg-white shrink-0 overflow-y-auto">
            {/* Primary navigation */}
            <ul className="space-y-0.5 pb-3 border-b border-gray-200 text-sm">
                <li className="flex items-center gap-5 px-3 py-2.5 rounded-xl bg-gray-100 font-medium cursor-pointer">
                    <Home size={20} />
                    <span>Home</span>
                </li>
                <li className="flex items-center gap-5 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-800 cursor-pointer transition-colors">
                    <PlaySquare size={20} />
                    <span>Shorts</span>
                </li>
                <li className="flex items-center gap-5 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-800 cursor-pointer transition-colors">
                    <Tv2 size={20} />
                    <span>Subscriptions</span>
                </li>
            </ul>

            {/* Subscriptions section */}
            <div className="pt-3 pb-3 border-b border-gray-200">
                <h2 className="px-3 pb-2 text-sm font-semibold text-gray-800">
                    Subscriptions
                </h2>
                <ul className="space-y-0.5 text-sm">
                    <li className="flex items-center gap-5 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-800 cursor-pointer transition-colors">
                        <Music size={20} />
                        <span>Music</span>
                    </li>
                    <li className="flex items-center gap-5 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-800 cursor-pointer transition-colors">
                        <Trophy size={20} />
                        <span>Sports</span>
                    </li>
                    <li className="flex items-center gap-5 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-800 cursor-pointer transition-colors">
                        <Gamepad2 size={20} />
                        <span>Gaming</span>
                    </li>
                    <li className="flex items-center gap-5 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-800 cursor-pointer transition-colors">
                        <Clapperboard size={20} />
                        <span>Movies</span>
                    </li>
                </ul>
            </div>

            {/* Explore section */}
            <div className="pt-3">
                <h2 className="px-3 pb-2 text-sm font-semibold text-gray-800">
                    Explore
                </h2>
                <ul className="space-y-0.5 text-sm">
                    <li className="flex items-center gap-5 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-800 cursor-pointer transition-colors">
                        <Flame size={20} />
                        <span>Trending</span>
                    </li>
                    <li className="flex items-center gap-5 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-800 cursor-pointer transition-colors">
                        <Compass size={20} />
                        <span>News</span>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar