import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import AppLayout from '@/Layouts/AppLayout';

export default function CreatePost() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('posts.store'));
    };

    return (
        <AppLayout>
            <Head title="Create Post" />

             <div className="max-w-2xl mx-auto mt-4">
                <Link
                    href={route('posts.index')}
                    className="text-blue-600 hover:underline mb-4 inline-block"
                >
                    &larr; Back to Posts
                </Link>
            </div>

            <form onSubmit={submit} className="max-w-2xl mx-auto mt-8 space-y-6">
                <div>
                    <InputLabel htmlFor="title" value="Title" />
                    <TextInput
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="mt-1 block w-full"
                        required
                    />
                    <InputError message={errors.title} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="content" value="Content" />
                    <textarea
                        id="content"
                        name="content"
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        rows={6}
                        required
                    ></textarea>
                    <InputError message={errors.content} className="mt-2" />
                </div>

                <PrimaryButton className="mt-4" disabled={processing}>
                    Create Post
                </PrimaryButton>
            </form>
        </AppLayout>
    );
}
