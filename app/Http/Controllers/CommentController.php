<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Post;

class CommentController extends Controller
{
    public function store(Request $request, Post $post)
    {
        $request->validate([
            'comment' => 'required|string',
        ]);

        $user = $request->user(); 

        Comment::create([
            'post_id' => $post->id,
            'user_id' => $user->id,
            'comment' => $request->comment,
        ]);

        return redirect()->route('posts.show', $post->id);
    }

    public function destroy(Comment $comment)
    {
        $this->authorize('delete', $comment);

        $comment->delete();

        return redirect()->route('posts.show', $comment->post_id);
    }
}
