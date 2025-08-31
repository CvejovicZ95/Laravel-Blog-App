import React from 'react';
import { router } from '@inertiajs/react';

export default function CommentList({ comments, post, auth }) {
    if (!comments || comments.length === 0) return null;

    return (
        <div className="mt-4">
            <h3>Comments:</h3>
            {comments.map((comment) => (
                <div
                    key={comment.id}
                    className="bg-gray-100 p-2 rounded mb-1 flex justify-between items-center text-sm"
                >
                    <div>
                        <strong>{comment.user?.name || 'Unknown'}:</strong> {comment.comment}
                    </div>

                    {auth.user && (auth.user.id === comment.user_id || auth.user.id === post.user_id) && (
                        <button
                            onClick={() => {
                                if (confirm("Are you sure you want to delete this comment?")) {
                                    router.delete(route('comments.destroy', comment.id));
                                }
                            }}
                            className="ml-2 px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-xs"
                        >
                            X
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}
