import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import PostCard from '@/Pages/Posts/PostCard';
import HomePageButton from '@/Components/HomePageButton';
import CommentForm from '@/Pages/Comments/CommentForm';

export default function ShowPost() {
    const { post, auth } = usePage().props;

    return (
        <AppLayout>
            <Head title={post.title} />

            <div className="max-w-2xl mx-auto mt-6">
                <div className="max-w-2xl mx-auto mt-4">
                    <HomePageButton /> 
                </div>

                <PostCard post={post} auth={auth} isSingle={true} />

                {auth.user && <CommentForm postId={post.id} />}
            </div>
        </AppLayout>
    );
}
