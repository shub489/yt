import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const Main = () => {
    return (
        <main className="flex-1 overflow-x-hidden p-4">
            <ButtonList />
            <VideoContainer />
        </main>
    )
}

export default Main