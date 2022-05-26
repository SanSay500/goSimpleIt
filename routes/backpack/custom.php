<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ExportController;
// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\Base.
// Routes you generate using Backpack\Generators will be placed here.

Route::group([
    'prefix'     => config('backpack.base.route_prefix', 'admin'),
    'middleware' => array_merge(
        (array) config('backpack.base.web_middleware', 'web'),
        (array) config('backpack.base.middleware_key', 'admin')
    ),
    'namespace'  => 'App\Http\Controllers\Admin',
], function () { // custom admin routes
    Route::get('export',[\App\Http\Controllers\Admin\ExportController::class, 'index'])->name('export.page');
    Route::get('/orders',[\App\Http\Controllers\Admin\ExportController::class, 'export'])->name('export.orders');
    Route::crud('user', 'UserCrudController');
    Route::crud('order', 'OrderCrudController');
    Route::crud('job', 'JobCrudController');
    Route::crud('task', 'TaskCrudController');
}); // this should be the absolute last line
