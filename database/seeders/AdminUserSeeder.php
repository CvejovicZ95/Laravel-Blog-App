<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run()
    {
        if (!User::where('email', 'admin@example.com')->exists()) {
            User::create([
                'name' => 'Admin',            
                'email' => 'admin@blogapp.com',
                'password' => Hash::make('12345678'),
                'is_admin' => true,
            ]);
        }
    }
}
