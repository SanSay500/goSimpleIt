<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order;

class TaskLvl2 extends Model
{
    use HasFactory;
    protected $fillable = [
        'type',
        'category',
        'description',
        'minimum_time_in_hours',
        'minimum_price',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
