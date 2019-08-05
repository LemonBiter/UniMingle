<?php

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

Route::get('/', 'IndexController@index')->name('index');
Route::get('/term', 'IndexController@term')->name('term');
Route::get('/policy', 'IndexController@policy')->name('policy');
Route::get('/profile', 'ProfileController@profile')->name('profile');
Route::get('/file/{filename}', 'FileController@getFile')->where('filename', '^(.+)\/([^\/]+)$')->name('getFile');
Route::resource('/resources', 'ResourceController');

Auth::routes();

Route::namespace('Admin')->prefix('admin')->as('admin.')->middleware('auth')->middleware('role:super-admin')->group(function () {
    Route::get('/', 'HomeController@index')->name('home');

    Route::post('/users/activate', 'UserController@activate')->name('users.activate');
    Route::post('/users/suspend', 'UserController@suspend')->name('users.suspend');
    Route::post('/users/sendResetLinkEmail', 'UserController@sendResetLinkEmail')->name('users.sendResetLinkEmail');
    Route::get('/users/changePassReq', 'UserController@changePassReq')->name('users.changePassReq');
    Route::post('/users/changePassword', 'UserController@changePassword')->name('users.changePassword');
    Route::resource('/users', 'UserController');

    Route::resource('/events', 'EventController');
    Route::resource('/businessPartners', 'BusinessPartnerController');
    Route::resource('/coupons', 'CouponController');
    Route::resource('/categories', 'CategoryController');
});

Route::namespace('Front')->as('front.')->group(function () {
    Route::get('events/getCategories', 'EventController@getCategories')->name('events.getCategories');
    Route::get('events/getCoupons/{category}', 'EventController@getCoupons')->name('events.getCoupons');
    Route::get('events/joinRequest/{event}', 'EventController@joinRequest')->name('events.joinRequest');
    Route::post('events/join/{event}', 'EventController@join')->name('events.join');
    Route::post('events/cancel/{event}', 'EventController@cancel')->name('events.cancel');
    Route::resource('/events', 'EventController');
    Route::get('/home', 'HomeController@index')->name('home');
    Route::resource('/users', 'UserController');
});



