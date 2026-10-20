import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/api'

const VideoContainer = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        async function getVideos() {
            try {
                const response = await fetch(`${YOUTUBE_VIDEOS_API}`)
                const data = await response.json()
                setVideos(data.items)
                console.log(data.items);
            } catch (error) {
                console.log("error in fetching videos ", erro)
            }
        }
        getVideos()
    }, [])

    return (
        <div>VideoContainer</div>
    )
}

export default VideoContainer