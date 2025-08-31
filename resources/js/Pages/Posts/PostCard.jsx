import React from 'react';
import CommentList from '@/Pages/Comments/CommentList';
import PostActions from '@/Pages/Posts/PostActions';
import PostDetails from '@/Pages/Posts/PostDetails';

export default function PostCard({ post, auth, isSingle }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            
            <PostDetails post={post} isSingle={isSingle} />

            <CommentList comments={post.comments} post={post} auth={auth} />

            <PostActions post={post} auth={auth} />
        </div>
    );
}
