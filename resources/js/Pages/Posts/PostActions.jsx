import React from 'react';
import { Link, router } from '@inertiajs/react';

export default function PostActions({ post, auth }) {
    if (!auth.user || auth.user.id !== post.user_id) return null;

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this post?")) {
            router.delete(route('posts.destroy', post.id));
        }
    };

    return (
        <div className="flex gap-3 mt-4">
            <Link
                href={route('posts.edit', post.id)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
                Edit Blog
            </Link>
            <button
                onClick={handleDelete}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
                Delete Blog
            </button>
        </div>
    );
}
