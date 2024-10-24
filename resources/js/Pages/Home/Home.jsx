import React from 'react';
import { Link } from '@inertiajs/react';
const Home = (props) => {
    return (
        <div>
        {props.name}
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of your application.</p>


            <Link preserveScroll href="/about" className="mt-[1000px] block title">time</Link>
        </div>
    );
};

export default Home;