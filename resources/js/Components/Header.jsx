import React from 'react';
import { router } from '@inertiajs/react';

export default function Header({ user }) {
    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route('logout'));
    };

    return (
        <header className="p-4 bg-gray-100 flex justify-between items-center">
            <div className="text-xl font-bold">My Blog</div>

            <div>
                <span className="mr-4">Welcome, {user.name}</span>
                <button
                    onClick={handleLogout}
                    className="text-sm text-red-600 underline hover:text-red-800"
                >
                    Logout
                </button>
            </div>
        </header>
    );
}
