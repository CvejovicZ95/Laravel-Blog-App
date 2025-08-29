<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\Auth\GuestLoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Auth/Register'); 
});

Route::get('/posts', [PostController::class, 'index'])->name('posts.index');

Route::post('/guest-login', [GuestLoginController::class, 'store'])->name('guest.login');

Route::middleware('auth')->group(function () {
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
});

require __DIR__.'/auth.php';

