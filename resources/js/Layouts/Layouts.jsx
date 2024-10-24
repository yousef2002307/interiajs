import React from 'react';
import { Link } from '@inertiajs/react';
const Layouts = ({children}) => {
    return (
        <div className="layout-container">
            <header>
                <h1>My Application</h1>
            </header>
            <main>
               <nav>
                     <ul>
                          <li><Link href="/">Home</Link></li>
                          <li><Link href="/posts/create">About</Link></li>
                    
                     </ul>
               </nav>
                {children}
            </main>
            <footer>
                <p>&copy; 2023 My Application</p>
            </footer>
        </div>
    );
};

export default Layouts;
