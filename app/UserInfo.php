<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    // info non avendo il plurale laravel potrebbe non riconoscerlo 
    // quindi per sicurezza metto:
    protected $table = 'user_info';

    public function user() {
        return $this->belongsTo('App\User');
    }
}
