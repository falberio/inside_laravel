<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    public function users(){
    	return $this -> belongsTo(
    		User::class, 'user_id'
    	);
    }
}
