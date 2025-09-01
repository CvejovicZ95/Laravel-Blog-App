import React from 'react';
import { Link } from '@inertiajs/react';
import DeleteBlogButton from './DeleteBlogButton';

export default function PostActions({ post, auth }) {
   if (!auth.user || (auth.user.id !== post.user_id && !auth.user.is_admin)) return null;

    return (
        <div className="flex gap-3 mt-4">
            {auth.user.id === post.user_id && (
                <Link
                    href={route('posts.edit', post.id)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                    Edit Blog
                </Link>
            )}
            <DeleteBlogButton postId={post.id} />
        </div>
    );

}
