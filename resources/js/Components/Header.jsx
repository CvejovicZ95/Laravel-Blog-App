import React from 'react';
import { router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Header({ user }) {
    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route('logout'));
    };

    return (
        <header className="p-4 bg-gray-100 flex justify-between items-center">
            <div className="text-xl font-bold">Laravel Blog Application</div>

            <div className="flex items-center gap-4">  
                <PrimaryButton onClick={handleLogout}>
                    Logout
                </PrimaryButton>
            </div>
        </header>
    );
}
