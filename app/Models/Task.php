<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;

    use HasFactory;

    protected $fillable = [
        'name',
        'money',
        'time',
    ];

    public function order(){
        return $this->hasOne(Order::class);
    }
}
