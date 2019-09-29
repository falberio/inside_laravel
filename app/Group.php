<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    public function users(){
    	

    	return $this->belongsToMany('App\Group', 'group_user', 'user_id', 'group_id');
    }
}
