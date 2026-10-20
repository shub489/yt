import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import { useSelector } from 'react-redux'

const Body = () => {

    const isOpenSidebar = useSelector((state) => state.sidebar.isOpenSidebar)


    return (
        <div className="flex">
            {isOpenSidebar && <Sidebar />}
            <Main />
        </div>
    )
}

export default Body