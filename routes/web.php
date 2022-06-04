<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrderController;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use App\Models\Proposal;


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

Route::post('/store', [\App\Http\Controllers\OrderController::class, 'store'])->name('order.store')->middleware('auth');
Route::get('/', [\App\Http\Controllers\OrderController::class, 'main'])->name('main.page');
Route::get('/order/{id}', [\App\Http\Controllers\OrderController::class, 'details'])->name('order.details');
Route::post('/order/proposal', [\App\Http\Controllers\OrderController::class, 'new_proposal'])->name('order.proposal.store')->middleware('auth');
Route::get('/order/{order_id}/{proposal_id}/confirm_proposal', [\App\Http\Controllers\OrderController::class, 'proposal_confirm'])->name('confirm.proposal')->middleware('auth');
Route::get('/chatify/{user_id}', [\App\Http\Controllers\DashboardController::class, 'start_chat'])->name('start_chat')->middleware('auth');

Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');

Route::resource('orders', OrderController::class);
require __DIR__.'/auth.php';

