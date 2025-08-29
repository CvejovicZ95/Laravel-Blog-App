import React from 'react';
import Header from '@/Components/Header';
import CreatePost from './CreatePost';
import { usePage, Head } from '@inertiajs/react';

export default function Posts() {
    const { auth, posts } = usePage().props; 
    return (
        <>
            <Head title="Home" />

            <div>
                {auth.user && <Header user={auth.user} />}
            
                <main className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Welcome to the Blog!</h1>
 
                   {auth.user && !auth.user.is_guest && <CreatePost />}

                    {(!posts || posts.length === 0) && <p>No posts yet.</p>}

                    {posts && posts.map(post => (
                        <div key={post.id} className="bg-white shadow-md rounded-md p-4 mb-6">
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="text-gray-700 mb-2">{post.content}</p>
                            <p className="text-gray-500 text-sm">By {post.user?.name || 'Unknown'}</p>

                            <div className="mt-4">
                                <h3 className="font-semibold mb-2">Comments</h3>
                                <div className="border-t pt-2 mt-2">
                                    <p className="text-gray-800">Great post! Thanks for sharing.</p>
                                    <p className="text-gray-500 text-sm">— Jane Doe</p>
                                </div>
                                <div className="border-t pt-2 mt-2">
                                    <p className="text-gray-800">I learned a lot from this post.</p>
                                    <p className="text-gray-500 text-sm">— John Smith</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </>
    );
}
