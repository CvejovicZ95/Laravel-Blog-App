<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 4; $i++) {
            User::create([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password123'),
                'is_guest' => false,
                'is_admin' => false,
            ]);
        }

        User::create([
            'name' => 'guest_' . Str::random(8),
            'email' => 'guest_' . Str::random(8) . '@guest.local',
            'password' => Hash::make('guest1234'),
            'is_guest' => true,
            'is_admin' => false,
        ]);
    }
}
