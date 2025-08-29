<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        Post::create([
            'user_id' => 14,
            'title' => 'Prvi Post',
            'content' => 'Ovo je prvi test post.',
            'deleted' => false,
        ]);

        Post::create([
            'user_id' => 14,
            'title' => 'Drugi Post',
            'content' => 'Još jedan test post.',
            'deleted' => false,
        ]);

        Post::create([
            'user_id' => 14,
            'title' => 'Drugi Post',
            'content' => 'Još jedan test post.',
            'deleted' => false,
        ]);
    }
}
