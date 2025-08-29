<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with(['user'])
                     ->where('deleted', false)
                     ->latest()
                     ->get();

        return inertia('Posts/Posts', [
            'posts' => $posts,
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

    public function create()
    {
        return inertia('Posts/Create'); 
    }

    public function store(Request $request)
    {
        if ($request->user()->is_guest) {
            abort(403, 'Guests cannot create posts.');
        }

        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $post = Post::create([
            'user_id' => $request->user()->id,
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return redirect()->route('posts.index');
    }
}
