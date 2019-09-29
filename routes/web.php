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

Route::post('/posts', 'PostsController@recargarPosts')->name('posts');

Route::get('/profile', 'PostsController@showProfile');

Route::get('/contacts', 'UserController@showUsers')->name('posts');

Route::get('/users', 'UserController@showUsers')->name('posts');

Route::get('/user/{id}', 'UserController@showUser');

Route::get('/areas', 'AreaController@index')->name('areas');

Route::get('/area/{id}', 'AreaController@showArea');

Route::get('/groups', 'GroupController@index')->name('groups');

Route::get('/group/{id}', 'groupController@showGroup');

Route::get('/faqs', 'FaqsController@index');

Route::get('/register', 'RegisterController@index');

Route::get('/chat', 'ChatController@index');

Auth::routes();

Route::get('/index', 'HomeController@index')->name('index');

Route::get('/logout', 'Auth\LoginController@logout');
