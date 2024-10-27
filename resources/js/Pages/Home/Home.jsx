import React from 'react';
import { Link, useForm } from '@inertiajs/react';
const Home = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        body: '',
        rules: {
            body: 'required|string|min:5|max:255',
          }
    });
    function handleSubmit(e) {
        e.preventDefault();
        post('/posts')
         
    }
    console.log(errors)
    return (
        <div>
        {props.name}
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of your application.</p>
            {data.body}
<form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="body">Body:</label>
                    <input
                        id="body"
                        name="body"
                        value={data.body}
                     
                        style={{ display: 'block',border: '1px solid #ccc',width: '100%',padding: '5px' }}
                        onChange={(e) => setData('body', e.target.value)}
                    />
                    {errors.body && <div>{errors.body}</div>}
                </div>
                <button type="submit" disabled={processing}>
                    Create Post
                </button>
</form>

            <Link preserveScroll href="/about" className="mt-[1000px] block title">time</Link>
        </div>
    );
};

export default Home;