import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/api'
import VideoCard from './VideoCard'
import { WithLabelTrendingVideo } from '../hoc/WithLabelTrendingVideo'



const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    const TrendingVideoCard = WithLabelTrendingVideo(VideoCard)

    useEffect(() => {
        async function getVideos() {
            try {
                const response = await fetch(`${YOUTUBE_VIDEOS_API}`)
                const data = await response.json()
                setVideos(data.items)
                // console.log(data.items);
            } catch (error) {
                console.log("error in fetching videos ", error)
            }
        }
        getVideos()
    }, [])

    if (!videos.length) {
        return <div>Loading...</div>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
            {
                videos.map((video) => {


                    return Number(video?.statistics?.viewCount) >= 10000000 ? (
                        <TrendingVideoCard key={video.id} info={video} />
                    ) : (
                        <VideoCard key={video.id} info={video} />
                    );
                })
            }
        </div>
    )
}

export default VideoContainer