import React from 'react';
import { Link } from '@inertiajs/react';

export default function HomePageButton() {
    return (
        <Link
            href={route('posts.index')}
            className="text-blue-600 hover:underline mb-4 inline-block"
        >
            &larr; Back to Home page
        </Link>
    );
}
