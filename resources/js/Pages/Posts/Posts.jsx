import React from 'react';
import Header from '@/Components/Header';
import { usePage, Head } from '@inertiajs/react';

export default function Posts() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Home" />

            <div>
                {auth.user && <Header user={auth.user} />}

                <main className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Welcome to the Blog!</h1>
                    
                    <p>Here you will see all blog posts.</p>
                </main>
            </div>
        </>
    );
}
