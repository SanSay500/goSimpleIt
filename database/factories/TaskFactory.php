<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'type' => $this->faker->randomElement(['Make new project', 'Changes in existing project', 'Additions to new project']),
            'category' => $this->faker->randomElement(['']),
            'description' => $this->faker->text(),
            'minimum_price' => $this->faker->numberBetween(5, 2000),
            'minimum_time_in_hours' => $this->faker->numberBetween(1,24),
        ];
    }
}
