<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\ServiceController;

Route::apiResource('services', ServiceController::class);

Route::get('/test', function () {
    return "API working";
});