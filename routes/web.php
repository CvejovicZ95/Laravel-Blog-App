<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\GuestLoginController;


Route::get('/', function () {
    return Inertia::render('Auth/Register'); 
});

Route::get('/posts', function () {
    return Inertia::render('Posts/Posts');
})->middleware(['auth'])->name('posts.index');

Route::post('/guest-login', [GuestLoginController::class, 'store'])->name('guest.login');

require __DIR__.'/auth.php';
