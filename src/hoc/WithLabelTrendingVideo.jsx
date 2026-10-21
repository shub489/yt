export const WithLabelTrendingVideo = (Video_card) => {
    return (props) => {
        return (
            <div className="relative group">
                <span className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 bg-gradient-to-r from-red-600 to-rose-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md backdrop-blur-xs tracking-wide uppercase pointer-events-none">
                    🔥 Trending
                </span>
                <Video_card {...props} />
            </div>
        )
    }
}