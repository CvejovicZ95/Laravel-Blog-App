import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import DeleteCommentButton from './DeleteCommentButton';

export default function CommentList({ comments, post, auth }) {
    if (!comments || comments.length === 0) return null;

    return (
        <div className="mt-2">
            <h3 className="text-md font-semibold mb-1">Comments:</h3>
            {comments.map((comment) => (
                <div
                    key={comment.id}
                    className="bg-gray-100 p-2 rounded mb-2 flex flex-col gap-1 relative"
                >
                    <span className="text-gray-800 text-sm">{comment.comment}</span>

                    <div className="flex flex-col gap-0.5 text-xs text-gray-600">
                        <span className="font-semibold">By: {comment.user?.name || 'Unknown'}</span>
                        {auth.user && (auth.user.id === comment.user_id || auth.user.id === post.user_id) && (
                            <DeleteCommentButton commentId={comment.id} />
                        )}
                    </div>

                    <span className="absolute bottom-1 right-2 text-xs text-gray-400">
                        {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
                    </span>
                </div>
            ))}
        </div>
    );
}
