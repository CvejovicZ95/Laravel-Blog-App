import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function CommentForm({ postId }) {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        router.post(route('comments.store', postId), { comment: newComment });
        setNewComment('');
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="mt-4 flex items-center gap-2 bg-gray-100 p-2 rounded-lg"
        >
            <input
                type="text"
                className="flex-1 px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
                Post
            </button>
        </form>
    );
}
