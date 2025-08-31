import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import PostCard from '@/Pages/Posts/PostCard';
import CommentForm from '@/Pages/Comments/CommentForm'; 

export default function Posts() {
    const { posts, auth } = usePage().props;

    return (
        <AppLayout>
            <Head title="Home" />

            {(!posts || posts.length === 0) && (
                <p className="text-center text-gray-500 mt-8 text-lg">No posts yet.</p>
            )}

            <div className="flex flex-col gap-8 mt-12">
                {posts && posts.map(post => (
                    <div key={post.id} className="flex flex-col gap-4 p-6 border rounded-lg shadow-lg bg-white">           
                        <PostCard post={post} auth={auth} className="text-xl" />

                        {auth.user && (
                            <div className="mt-4 border-t pt-4">                  
                                <CommentForm postId={post.id} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
