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

Route::get('/', function () {
    return view('welcome');
});



Route::any('/posts', 'PostsController@index')->name('posts');

Route::get('/contacts', 'UserController@index')->name('posts');

Route::get('/faqs', 'FaqsController@index');

Route::get('/register', 'RegisterController@index');

Route::get('/chat', 'ChatController@index');

Auth::routes();

Route::get('/index', 'HomeController@index')->name('index');
