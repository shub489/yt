import React, { useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../redux/sidebarSlice';
import Comment from './Comment';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

    const dispatch = useDispatch()

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

    useEffect(() => {
        dispatch(closeSidebar())
    }, [])

    return (
        <div className="p-4">
            {/* You will use videoId here to embed the YouTube iframe player */}
            <div>
                <iframe
                    width="800"
                    height="450"
                    src={`https://www.youtube.com/embed/${videoId}?controls=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
            <div>
                <CommentsContainer />
            </div>
        </div>
    )
}

export default WatchPage