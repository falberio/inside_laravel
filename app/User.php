<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // follower_user
    // 
    public function followers() 
    {
        return $this->belongsToMany(
            User::class, 'follow_user', 'follower_id', 'following_id'
        );
    }

    public function follows() 
    {
        return $this->belongsToMany(
            User::class, 'follow_user', 'following_id', 'follower_id'
        );
    }

    public function areas(){
        return $this -> belongsTo(
            Area::class, 'area_id'
        );
    }

    public function jobs(){
        return $this -> belongsTo(
            Job::class, 'job_id'
        );
    }
}
