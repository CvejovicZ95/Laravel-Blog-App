import React from 'react';
import Header from '@/Components/Header';
import { usePage, Head } from '@inertiajs/react';

export default function Posts() {
    const { auth } = usePage().props;

    const post = {
        title: "My First Blog Post",
        content: "This is a static blog post added for demonstration purposes.",
        author: "Admin",
        comments: [
            {
                id: 1,
                user: "Jane Doe",
                comment: "Great post! Thanks for sharing."
            }
        ]
    };

    return (
        <>
            <Head title="Home" />

            <div>
                {auth.user && <Header user={auth.user} />}

                <main className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Welcome to the Blog!</h1>

                    <div className="bg-white shadow-md rounded-md p-4 mb-6">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-700 mb-2">{post.content}</p>
                        <p className="text-gray-500 text-sm">By {post.author}</p>

                        <div className="mt-4">
                            <h3 className="font-semibold mb-2">Comments</h3>
                            {post.comments.map(c => (
                                <div key={c.id} className="border-t pt-2 mt-2">
                                    <p className="text-gray-800">{c.comment}</p>
                                    <p className="text-gray-500 text-sm">— {c.user}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
