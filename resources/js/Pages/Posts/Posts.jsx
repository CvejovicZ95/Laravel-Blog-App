import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import PostCard from '@/Pages/Posts/PostCard'; 

export default function Posts() {
    const { posts, auth } = usePage().props;

    return (
        <AppLayout>
            <Head title="Home" />

            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Welcome to the Blog Application!
            </h1>

            {auth.user && !auth.user.is_guest && (
                <div className="flex justify-center mb-6">
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
                    <PostCard key={post.id} post={post} auth={auth} />
                ))}
            </div>
        </AppLayout>
    );
}
