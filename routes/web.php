<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\Auth\GuestLoginController;
use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    if (auth()->check()) {
        return redirect()->route('posts.index');
    }
    
    return Inertia::render('Auth/Register'); 
});

Route::get('/posts', [PostController::class, 'index'])->name('posts.index');

Route::post('/guest-login', [GuestLoginController::class, 'store'])->name('guest.login');

Route::middleware('auth')->group(function () {
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
    Route::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');
});

Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');

Route::post('/posts/{post}/comments', [CommentController::class, 'store'])->name('comments.store');

Route::delete('/comments/{comment}', [CommentController::class, 'destroy'])->name('comments.destroy');

require __DIR__.'/auth.php';

