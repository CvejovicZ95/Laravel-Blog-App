import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import HomePageButton from '@/Components/HomePageButton';
import PrimaryButton from '@/Components/PrimaryButton';
import AppLayout from '@/Layouts/AppLayout';

export default function CreatePost() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        content: '',
    });

    const [attemptedSubmit, setAttemptedSubmit] = React.useState(false);

    const customMessages = {
        title: 'Title cannot be empty.',
        content: 'Content cannot be empty.',
    };

    const submit = (e) => {
        e.preventDefault();
        setAttemptedSubmit(true);

        if (data.title.trim() !== '' && data.content.trim() !== '') {
            post(route('posts.store'), {
                onSuccess: () => {
                    reset(); 
                    setAttemptedSubmit(false);
                },
            });
        }
    };

    return (
        <AppLayout>
            <Head title="Create Blog" />

            <div className="max-w-2xl mx-auto mt-4">
                <HomePageButton /> 
            </div>

            <form onSubmit={submit} className="max-w-2xl mx-auto mt-8 space-y-6 bg-white p-6 rounded-xl shadow-md">
                <div>
                    <InputLabel htmlFor="title" value="Title" />
                    <TextInput
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="mt-1 block w-full"
                    />
                    <InputError
                        message={attemptedSubmit && data.title.trim() === '' ? customMessages.title : errors.title}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel htmlFor="content" value="Content" />
                    <textarea
                        id="content"
                        name="content"
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm resize-none"
                        rows={6}
                    ></textarea>
                    <InputError
                        message={attemptedSubmit && data.content.trim() === '' ? customMessages.content : errors.content}
                        className="mt-2"
                    />
                </div>

                <PrimaryButton className="mt-4" disabled={processing}>
                    Create Blog
                </PrimaryButton>
            </form>
        </AppLayout>
    );
}
