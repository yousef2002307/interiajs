import React from 'react';
import { Link } from '@inertiajs/react';
const About = ({posts}) => {
    console.log(posts)
    return (
        <div>
            <h1 className="text-4xl font-bold">About Us</h1>
           {
                posts.data.map((post, index) => (
                     <div key={index} className="my-4">
                         
                          <p>{post.body}</p>
                          <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                     </div>
                ))
           }
           <aside className="p-7">
           {posts.links.map((link, index) => (
            link.url ?
            <button key={index} className="mx-1 px-3 py-1 bg-gray-300" >
                <Link key={link.label} href={link.url} dangerouslySetInnerHTML={{__html : link.label}} className={link.active ? "text-blue-500 font-bold" : ""} />
            </button>
            :
            <span key={index} className="mx-1 px-3 py-1 bg-gray-600" dangerouslySetInnerHTML={{__html : link.label}} ></span>
           ))
        }
           </aside>
        </div>
    );
};

export default About;