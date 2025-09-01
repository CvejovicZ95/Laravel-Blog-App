import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function DeleteBlogButton({ postId }) {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = () => {
        router.delete(route('posts.destroy', postId));
        setShowConfirm(false);
    };

    return (
        <>
            <button
                onClick={() => setShowConfirm(true)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
                Delete Blog
            </button>

           {showConfirm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center z-[9999]">
                        <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
                        <p className="text-gray-600 mb-6">This action cannot be undone.</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
