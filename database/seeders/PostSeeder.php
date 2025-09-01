<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\User;
use Faker\Factory as Faker;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        $users = User::where('is_guest', false)->get();

        foreach ($users as $user) {
            for ($i = 0; $i < rand(2, 3); $i++) {
                Post::create([
                    'user_id' => $user->id,
                    'title' => ucfirst($faker->words(rand(3, 6), true)), 
                    'content' => $faker->paragraphs(rand(2, 5), true) . "\n\n" . $faker->emoji, 
                ]);
            }
        }
    }
}
