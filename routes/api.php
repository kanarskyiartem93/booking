<?php

use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\HotelController;
use App\Http\Controllers\Api\RoomController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'hotels'], function (){
    Route::get('/', [HotelController::class, 'index']);
    Route::get('/random', [HotelController::class, 'random']);
    Route::get('/{hotel}', [HotelController::class, 'show']);
});

Route::group(['prefix' => 'cities'], function (){
    Route::get('/', [CityController::class, 'index']);
});

Route::group(['prefix' => 'rooms'], function (){
    Route::get('/{room}', [RoomController::class, 'show']);
});

Route::group(['middleware' => 'auth:sanctum'], function () {

});

