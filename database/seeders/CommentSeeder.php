<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;

class CommentSeeder extends Seeder
{
    public function run()
    {
        $posts = Post::all();
        $users = User::all();

        foreach ($posts as $post) {      
            Comment::create([
                'post_id' => $post->id,
                'user_id' => $users[0]->id,
                'comment' => 'Ovo je komentar od ' . $users[0]->name,
            ]);

            $secondUser = $users[1] ?? $users[0];
            Comment::create([
                'post_id' => $post->id,
                'user_id' => $secondUser->id,
                'comment' => 'Ovo je komentar od ' . $secondUser->name,
            ]);

            $guest = $users->where('is_guest', 1)->first();
            if ($guest) {
                Comment::create([
                    'post_id' => $post->id,
                    'user_id' => $guest->id,
                    'comment' => 'Komentar od gosta ' . $guest->name,
                ]);
            }
        }
    }
}
