<?php

namespace App\Models;

use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Order extends Model
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;

    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'money',
        'file',
        'hours',
        'user_id',
        'task_id',
        'status'
        ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function task(){
        return $this->belongsTo(Task::class);
    }
    public function proposals(){
        return $this->hasMany(Proposal::class);
    }


}
