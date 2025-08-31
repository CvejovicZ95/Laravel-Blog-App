import React, { useState } from "react";
import { router, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Header({ user }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route("logout"));
    };

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                
                <div className="text-2xl font-bold text-blue-600">Laravel Blog</div>

                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <Link href="/posts" className="hover:text-blue-600">
                        Home
                    </Link>
                    {user && user.is_guest === 0 && (
                        <Link href={route("posts.create")} className="hover:text-blue-600">
                            Create Blog
                        </Link>
                    )}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    {user && (
                        <span className="text-gray-600 text-sm">
                            Hi, <span className="font-semibold">{user.name}</span>
                        </span>
                    )}
                    {user && (
                        <PrimaryButton onClick={handleLogout}>
                            Logout
                        </PrimaryButton>
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
                    <Link href="/posts" className="block text-gray-700 hover:text-blue-600">
                        Home
                    </Link>
                    {user && user.is_guest === 0 && (
                        <Link
                            href={route("posts.create")}
                            className="block text-gray-700 hover:text-blue-600"
                        >
                            Create Blog
                        </Link>
                    )}
                    {user && (
                        <button
                            onClick={handleLogout}
                            className="w-full text-left text-gray-700 hover:text-blue-600"
                        >
                            Logout
                        </button>
                    )}
                </div>
            )}
        </header>
    );
}
