import React from 'react';
import { Link } from '@inertiajs/react';
const Layouts = ({children}) => {
    return (
        <div className="layout-container min-h-screen flex flex-col">
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-2xl font-bold">My Application</h1>
            </header>
            <main className="flex-grow p-4">
                <nav className="mb-4">
                    <ul className="flex space-x-4">
                        <li><Link className="text-blue-500 hover:text-blue-700" href="/">Home</Link></li>
                        <li><Link className="text-blue-500 hover:text-blue-700" href="/posts/create">About</Link></li>
                    </ul>
                </nav>
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2023 My Application</p>
            </footer>
        </div>
    );
};

export default Layouts;
