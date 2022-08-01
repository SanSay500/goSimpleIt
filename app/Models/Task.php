<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Task extends Model
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;

    use HasFactory;

    protected $fillable = [
        'name',
        'money',
        'time',
    ];

    public function order()
    {
        return $this->hasOne(Order::class);
    }

    protected function money_in_user_currency(): Attribute
    {
        return Attribute::make(
            get: fn($value) => 3 * $value,
        );
    }
}
