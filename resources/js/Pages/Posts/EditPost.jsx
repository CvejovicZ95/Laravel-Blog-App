import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function EditPost({ post }) {
    const { data, setData, put, processing, errors } = useForm({
        title: post.title,
        content: post.content,
    });

    const [error, setError] = React.useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};
        if (!data.title.trim()) {
            newErrors.title = "Title is required.";
        }
        if (!data.content.trim()) {
            newErrors.content = "Content is required.";
        }

        setError(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        put(route('posts.update', post.id));
    };

    return (
        <AppLayout>
            <Head title="Edit Post" />

            <h1 className="text-2xl font-bold mb-6 text-center">Edit Post</h1>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={e => setData('title', e.target.value)}
                        className="w-full border rounded p-2"
                    />
                    {error.title && <div className="text-red-500 text-sm">{error.title}</div>}
                    {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Content</label>
                    <textarea
                        value={data.content}
                        onChange={e => setData('content', e.target.value)}
                        className="w-full border rounded p-2"
                    />
                    {error.content && <div className="text-red-500 text-sm">{error.content}</div>}
                    {errors.content && <div className="text-red-500 text-sm">{errors.content}</div>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Update Post
                </button>
            </form>
        </AppLayout>
    );
}
