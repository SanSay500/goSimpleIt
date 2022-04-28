<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->title(),
            'file' => $this->faker->filePath(),
            'engine_id' => $this->faker->numberBetween(1,5),
            'description' => $this->faker->text(),
            'money' => $this->faker->numberBetween(5,5000),
            'hours' => $this->faker->numberBetween(1,48),
            'user_id' => $this->faker->numberBetween(1,5),
            'task1_id' => $this->faker->numberBetween(1,5),
            'task2_id' => $this->faker->numberBetween(1,5),
        ];
    }
}
