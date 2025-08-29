import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('posts.store'));
    };

    return (
        <GuestLayout>
            <Head title="Create Post" />

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
        </GuestLayout>
    );
}
