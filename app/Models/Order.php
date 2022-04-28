<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'task1_id',
        'task2_id',
        'engine_id',
        'money',
        'hours',
        'user_id',
        ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function task1(){
        return $this->belongsTo(TaskLvl1::class);
    }
    public function task2(){
        return $this->belongsTo(TaskLvl2::class);
    }
    public function engine(){
        return $this->belongsTo(Engine::class);
    }

}
