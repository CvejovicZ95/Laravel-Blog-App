<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        if (!auth()->check()) {
            return redirect()->route('register');
        }

        $posts = Post::with(['user', 'comments.user'])->latest()->get();

        return inertia('Posts/Posts', [
            'posts' => $posts,
            'auth' => [
                'user' => auth()->user() ? [
                    'id' => auth()->user()->id,
                    'name' => auth()->user()->name,
                    'email' => auth()->user()->email,
                    'is_guest' => auth()->user()->is_guest,
                    'is_admin' => auth()->user()->is_admin,
                ] : null,
            ],
        ]);
    }

    public function create()
    {
        $this->authorize('create', Post::class);

        return inertia('Posts/CreatePost');
    }

    public function store(Request $request)
    {
        $this->authorize('create', Post::class);

        $request->validate([
            'title' => 'required|string|min:4|max:255',
            'content' => 'required|string|min:20',
        ]);

        Post::create([
            'user_id' => $request->user()->id,
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return redirect()->route('posts.index');
    }

    public function edit(Post $post)
    {
        $this->authorize('update', $post);

        return inertia('Posts/EditPost', [
            'post' => $post,
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $this->authorize('update', $post);

        $request->validate([
            'title' => 'required|string|min:4|max:255',
            'content' => 'required|string|min:20',
        ]);

        $post->update([
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return redirect()->route('posts.index');
    }

    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);

        $post->delete();

        return redirect()->route('posts.index');
    }

    public function show(Post $post)
    {
        return inertia('Posts/ShowPost', [
            'post' => $post->load(['user', 'comments.user']),
            'auth' => [
                'user' => auth()->user() ? [
                    'id' => auth()->user()->id,
                    'name' => auth()->user()->name,
                    'email' => auth()->user()->email,
                    'is_guest' => auth()->user()->is_guest,
                ] : null,
            ],
        ]);
    }
}