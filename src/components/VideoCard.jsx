import React from 'react'
import { formatDuration, getTimeAgo } from '../utils/commanFunction'
import { Link } from 'react-router-dom'

const VideoCard = ({ info }) => {

    const thumbnail = info.snippet.thumbnails.medium.url
    const title = info.snippet.title
    const channelName = info.snippet.channelTitle
    const views = info.statistics.viewCount
    const uploadTime = info.snippet.publishedAt
    const duration = info.contentDetails.duration



    // console.log(info);


    function viewsData(viewsCount) {
        // case-1 if views count is 0-999
        if (viewsCount >= 0 && viewsCount <= 999)
            return `${viewsCount}`

        // case-2 if view count is 1000-999999
        if (viewsCount >= 1000 & viewsCount <= 999999)
            return `${(viewsCount / 1000).toFixed(1)}k`

        // case-3 if views count is 1000000-1000000000
        if (viewsCount >= 1000000 && viewsCount <= 1000000000)
            return `${(viewsCount / 1000000).toFixed(1)}M`
    }

    return (
        <Link to={`/watch?v=${info.id}`}>
            <div className="w-full cursor-pointer flex flex-col gap-2.5 group">
                {/* Thumbnail & Duration */}
                <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-100">
                    <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        src={thumbnail}
                        alt={title}
                    />
                    <p className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-semibold px-1.5 py-0.5 rounded-md backdrop-blur-xs tracking-tight">
                        {formatDuration(duration)}
                    </p>
                </div>

                {/* Video Details */}
                <div className="flex flex-col gap-1 px-0.5">
                    <p className="font-semibold text-sm text-gray-900 line-clamp-2 leading-snug">
                        {title}
                    </p>
                    <div className="text-xs text-gray-600 flex flex-col gap-0.5">
                        <p className="hover:text-gray-900 transition-colors">
                            {channelName}
                        </p>
                        <div className="flex items-center gap-1 text-gray-500">
                            <span>{viewsData(views)} views</span>
                            <span>•</span>
                            <span>{getTimeAgo(uploadTime)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    )
}



export default VideoCard