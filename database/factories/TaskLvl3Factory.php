<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TaskLvl3>
 */
class TaskLvl3Factory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'type' => $this->faker->randomElement(['Feedback form', 'Admin Panel', 'E-mail marketing', 'CRM Integration', 'Pay system Integration', 'Blog', 'Forum']),
            'category' => $this->faker->randomElement(['']),
            'description' => $this->faker->text(),
            'task2_id' => $this->faker->numberBetween(1,5),
            'minimum_price' => $this->faker->numberBetween(5, 2000),
            'minimum_time_in_hours' => $this->faker->numberBetween(1,24),
        ];
    }
}
