import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

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
                    <div
                        key={post.id}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                        <p className="text-gray-700 mb-4">{post.content}</p>
                        <p className="text-gray-500 text-sm mb-4">By {post.user?.name || 'Unknown'}</p>

                        <div className="mt-4">
                            <h3 className="font-semibold text-gray-800 mb-3">Comments</h3>
                            <div className="space-y-3">
                                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                                    <p className="text-gray-700 text-sm">Great post! Thanks for sharing.</p>
                                    <p className="text-gray-400 text-xs mt-1">— Jane Doe</p>
                                </div>
                                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                                    <p className="text-gray-700 text-sm">I learned a lot from this post.</p>
                                    <p className="text-gray-400 text-xs mt-1">— John Smith</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
