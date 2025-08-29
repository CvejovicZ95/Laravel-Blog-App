import React from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import { router } from '@inertiajs/react';

export default function JoinAsGuest() {
    const handleGuestLogin = (e) => {
        e.preventDefault();
        router.post(route('guest.login'));
    };

    return (
        <div className="mt-6 flex justify-center">
            <PrimaryButton
                className="font-semibold py-2 px-4 rounded shadow transition duration-200"
                onClick={handleGuestLogin}
            >
                Join as Guest
            </PrimaryButton>
        </div>
    );
}
