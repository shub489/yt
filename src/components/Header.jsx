import React, { useEffect, useState } from 'react'
import { HAMBURGER_ICON, YOUTUBE_LOGO } from '../utils/constant'
import { Search, User, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../redux/sidebarSlice'
import { Link } from 'react-router-dom'
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from '../utils/api'
import { cacheResults } from '../redux/searchSlice'

const Header = ({ }) => {
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const dispatch = useDispatch()
    const searchCacheData = useSelector((state) => state.searchCache)



    // Handle search
    function handleSearch(e) {
        // console.log(e.target.value)
        setSearch(e.target.value)
    }

    // Handle clear search
    function handleClearSearch() {
        setSearch("")
        setSearchResult([])
    }

    // Api call function
    async function searchApiCall() {
        try {
            const response = await fetch(`${YOUTUBE_SEARCH_SUGGESTIONS_API}&q=${search}`)
            const result = await response.json()
            // console.log("result search ", result);
            setSearchResult(result[1])
            dispatch(cacheResults({ query: search, result: result[1] }))

        } catch (error) {
            console.log("error in fetching result ", error);

        }
    }


    useEffect(() => {
        if (!search) {
            setSearchResult((prev) => (prev.length === 0 ? prev : []))
            return
        }

        // Check in cache, if present then return from cache else make api call and add to cache
        // console.log(Object.hasOwn(user, "name"));  // true

        if (Object.hasOwn(searchCacheData, search)) {
            setSearchResult(searchCacheData[search])
            return
        }

        const timer = setTimeout(() => {
            searchApiCall()
        }, 200)

        return () => {
            clearTimeout(timer)
        }


    }, [search])



    return (
        <header className="flex items-center justify-between px-6 py-2.5 shadow-sm sticky top-0 bg-white z-50 ">
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
                <div className="flex w-full items-center relative">
                    <input
                        className="h-10 w-full px-4 border border-gray-300 rounded-l-full text-sm focus:outline-none focus:border-blue-500 shadow-inner placeholder-gray-500"
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => handleSearch(e)}
                    />
                    <button
                        className="h-10 px-6 bg-gray-100 hover:bg-gray-200 border border-l-0 border-gray-300 rounded-r-full transition-colors cursor-pointer flex items-center justify-center shrink-0"
                        title="Search"
                    >
                        <Search size={19} className="text-gray-600" />
                    </button>
                    {search && <X className='absolute right-18 text-gray-600 cursor-pointer' onClick={handleClearSearch} />}
                    {searchResult.length > 0 && <div className='absolute w-10/12  top-11 left-2 flex flex-col gap-2 rounded-2xl p-2 shadow-2xl bg-white'>

                        {
                            searchResult.map((result, index) =>
                                <div className='hover:bg-gray-100 hover:rounded-xl p-2 flex gap-2 items-center cursor-pointer' key={index}>
                                    <Search className="h-4 w-4 text-gray-600" />
                                    <p>{result}</p>
                                </div>
                            )
                        }

                    </div>}
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

            {/* Searched result */}

        </header>
    )
}

export default Header