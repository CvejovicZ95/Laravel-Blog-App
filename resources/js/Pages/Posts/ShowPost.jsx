import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import PostCard from '@/Pages/Posts/PostCard'; 

export default function ShowPost() {
    const { post, auth } = usePage().props;

    return (
        <AppLayout>
            <Head title={post.title} />

            <div className="max-w-2xl mx-auto mt-6">
                <Link href="/posts" className="text-blue-600 hover:underline mb-4 inline-block">
                    &larr; Back to Posts
                </Link>

                <PostCard post={post} auth={auth} isSingle={true} />

            </div>
        </AppLayout>
    );
}
