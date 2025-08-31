import React from 'react';
import { usePage } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function AppLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-100">
        
            {auth.user && <Header user={auth.user} />}

            <main className="p-4 max-w-4xl mx-auto">
                {children}
            </main>

            <Footer />
        </div>
    );
}
