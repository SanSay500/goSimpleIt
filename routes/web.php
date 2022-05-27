<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrderController;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/index', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('index');

Route::post('/store', [\App\Http\Controllers\OrderController::class, 'store'])->name('order.store');
Route::get('/', [\App\Http\Controllers\OrderController::class, 'main'])->name('main.page');
Route::get('/order/{id}', [\App\Http\Controllers\OrderController::class, 'details'])->name('order.details');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', ['orders'=>Order::where('user_id', Auth::user()->id)->get()]);
})->middleware(['auth'])->name('dashboard');

Route::resource('orders', OrderController::class);
require __DIR__.'/auth.php';

