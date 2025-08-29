<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;

class GuestLoginController extends Controller
{
    public function store(Request $request)
    {     
        $username = 'guest_' . uniqid();

        $user = User::create([
            'name' => $username,
            'email' => $username . '@guest.local',
            'password' => bcrypt(str()->random(10)),
            'is_guest' => true, 
        ]);

        Auth::login($user);

        return redirect()->route('posts.index');
    }
}
