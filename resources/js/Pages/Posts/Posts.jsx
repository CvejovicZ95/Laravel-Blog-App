import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import PostCard from '@/Pages/Posts/PostCard';
import CommentForm from '@/Pages/Comments/CommentForm'; 

export default function Posts() {
    const { posts, auth } = usePage().props;

    return (
        <AppLayout>
            <Head title="Home" />

            {auth.user && !auth.user.is_guest && (
                <div className="flex flex-col items-center mb-6">
                    <p className="text-gray-700 mb-2 text-center">
                        Hello {auth.user.name}, welcome to the blog app!
                    </p>
                    <Link
                        href="/posts/create"
                        className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
                    >
                        Create Blog
                    </Link>
                </div>
            )}

            {(!posts || posts.length === 0) && (
                <p className="text-center text-gray-500 mt-8">No posts yet.</p>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                {posts && posts.map(post => (
                    <div key={post.id} className="flex flex-col gap-2">
                        <PostCard post={post} auth={auth} />
                         
                        {auth.user && <CommentForm postId={post.id} />}
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
