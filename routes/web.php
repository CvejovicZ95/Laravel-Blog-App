<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Auth/Register'); 
});

Route::get('/posts', function () {
    return Inertia::render('Posts/Posts');
})->middleware(['auth'])->name('posts.index');

require __DIR__.'/auth.php';
