import React from 'react';
import { Link } from '@inertiajs/react';
import { formatDistanceToNow } from 'date-fns';

export default function PostDetails({ post, isSingle }) {
    return (
        <div className="mb-4 p-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {isSingle ? (
                    post.title
                ) : (
                    <Link href={route('posts.show', post.id)} className="hover:underline">
                        {post.title}
                    </Link>
                )}
            </h2>

            <p className="text-gray-700 text-sm md:text-base mb-2">{post.content}</p>

            <p className="text-gray-500 text-xs mb-1">By: {post.user?.name || 'Unknown user'}</p>

            <p className="text-gray-400 text-[10px]">
                {formatDistanceToNow(new Date(post.updated_at), { addSuffix: true })}
            </p>
        </div>
    );
}
