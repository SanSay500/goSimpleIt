<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order;

class Proposal extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_id',
        'user_id',
        'status',
        'description',
    ];
    public function orders(){
        return $this->belongsTo(Order::class);
    }
}
