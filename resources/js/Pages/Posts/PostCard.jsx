import React from 'react';
import { Link, router } from '@inertiajs/react';
import { formatDistanceToNow } from 'date-fns';

export default function PostCard({ post, auth, isSingle }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                {isSingle ? (
                    post.title
                ) : (
                    <Link href={route('posts.show', post.id)} className="hover:underline">
                        {post.title}
                    </Link>
                )}
            </h2>
            <p className="text-gray-700 mb-2">{post.content}</p>
            <p className="text-gray-500 text-sm mb-2">By {post.user?.name || 'Unknown user'}</p>
            <p className="text-gray-400 text-xs mb-4">
                {formatDistanceToNow(new Date(post.updated_at), { addSuffix: true })}
            </p>

            {post.comments && post.comments.length > 0 && (
                <div className="mt-4">
                    <p className="text-gray-500 text-sm mb-2">{post.comments.length} comment(s)</p>
                    {post.comments.map((comment) => (
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
            )}

            {auth.user && auth.user.id === post.user_id && (
                <div className="flex gap-3 mt-4">
                    <Link
                        href={route('posts.edit', post.id)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this post?")) {
                                router.delete(route('posts.destroy', post.id));
                            }
                        }}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}