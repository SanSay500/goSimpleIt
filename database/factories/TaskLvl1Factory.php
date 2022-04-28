<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TaskLvl1>
 */
class TaskLvl1Factory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            [
            'type' => 'Make new project',
            'category' => $this->faker->randomElement(['']),
            'description' => $this->faker->text(),
            'minimum_price' => $this->faker->numberBetween(5, 2000),
            'minimum_time_in_hours' => $this->faker->numberBetween(1,24),
            ],
            [
                'type' => 'Changes in Existing project',
                'category' => $this->faker->randomElement(['']),
                'description' => $this->faker->text(),
                'minimum_price' => $this->faker->numberBetween(5, 2000),
                'minimum_time_in_hours' => $this->faker->numberBetween(1,24),

            ],
        [
            'type' => 'Additions to Existing project',
                'category' => $this->faker->randomElement(['']),
                'description' => $this->faker->text(),
                'minimum_price' => $this->faker->numberBetween(5, 2000),
                'minimum_time_in_hours' => $this->faker->numberBetween(1,24),

            ],
        [
            'type' => 'Fix Bugs in existing project',
                'category' => $this->faker->randomElement(['']),
                'description' => $this->faker->text(),
                'minimum_price' => $this->faker->numberBetween(5, 2000),
                'minimum_time_in_hours' => $this->faker->numberBetween(1,24),

            ],
                ];
    }
}
