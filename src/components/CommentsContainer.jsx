import React from 'react'
import Comment from './Comment'
import { commentsData } from "../utils/commentsData"
import { User } from 'lucide-react'

const CommentsList = ({ comments }) => {
    if (!comments || comments.length === 0) return null

    return (
        <div className="flex flex-col">
            {comments.map((comment, index) => {
                return (
                    <div key={index} className="flex flex-col">
                        <div className="flex gap-3 items-start my-1.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                                <User size={18} className="text-gray-600" />
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-xs text-gray-900 leading-tight">@{comment.name}</p>
                                <p className="text-sm text-gray-800 mt-0.5 leading-snug">{comment.text}</p>
                            </div>
                        </div>
                        {comment.replies && comment.replies.length > 0 && (
                            <div className="pl-4 ml-4 border-l-2 border-gray-200">
                                <CommentsList comments={comment.replies} />
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

const CommentsContainer = () => {
    return (
        <div className="max-w-[800px] mt-6">
            <h1 className="text-xl font-bold mb-4 text-gray-900">
                Comments
            </h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer