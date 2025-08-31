import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 text-center py-4 mt-8 border-t">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Laravel Blog Application. All rights reserved.
            </p>
        </footer>
    );
}
