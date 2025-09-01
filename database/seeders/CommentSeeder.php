<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Faker\Factory as Faker;

class CommentSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        $posts = Post::all();
        $users = User::where('is_guest', false)->get();

        foreach ($posts as $post) {
            for ($i = 0; $i < rand(1, 4); $i++) {
                $commentUser = $users->random();

                Comment::create([
                    'post_id' => $post->id,
                    'user_id' => $commentUser->id,
                    'comment' => $faker->sentences(rand(1, 3), true) . ' ' . $faker->emoji,
                ]);
            }
        }
    }
}
