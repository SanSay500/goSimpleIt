<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
            'description' => $this->faker->text(),
            'status' => $this->faker->randomElement(['Pending', 'In Work', 'Cancelled']),
            'money' => $this->faker->numberBetween(5,5000),
            'hours' => $this->faker->numberBetween(1,48),
            'user_id' => $this->faker->numberBetween(1,5),
            'task_id' => $this->faker->numberBetween(1,5),
        ];
    }
}
