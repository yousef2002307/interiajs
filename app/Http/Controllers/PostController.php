<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::paginate(6);
       return inertia("About",["posts"=>$posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       return inertia("Home/Home");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        sleep(2);
        $validatedData = $request->validate([
            "body" => ["required", "string", "max:255", "min:5"]
        ]);
       
        Post::create([
            "body" => $validatedData['body']
        ]);
        return redirect('/');
 
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
<<<<<<< HEAD
        return inertia("Show");
=======
        return inertia("Home/Home");
>>>>>>> a07c6bf2c276936df39c0001a34476c671eb52e8
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
