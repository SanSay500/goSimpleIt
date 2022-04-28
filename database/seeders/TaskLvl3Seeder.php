<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskLvl3Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      //  \App\Models\TaskLvl3::factory(10)->create();
        DB::table('task_lvl3s')->insert(values: [
            'type' => 'Yours Design ',
            'category' => '',
            'description' => '',
            'task2_id' => 1,
            'minimum_price' => 200,
            'minimum_time_in_hours' => 6,
        ]);
        DB::table('task_lvl3s')->insert(values: [
            'type' => 'Our Design',
            'category' => '',
            'description' => '',
            'task2_id' => 1,
            'minimum_price' => 400,
            'minimum_time_in_hours' => 12,
        ]);
        DB::table('task_lvl3s')->insert(values: [
            'type' => 'In Backend',
            'category' => '',
            'description' => '',
            'task2_id' => 2,
            'minimum_price' => 50,
            'minimum_time_in_hours' => 3,
        ]);
        DB::table('task_lvl3s')->insert(values: [
            'type' => 'In Frontend',
            'category' => '',
            'description' => '',
            'task2_id' => 2,
            'minimum_price' => 50,
            'minimum_time_in_hours' => 3,
        ]);
        DB::table('task_lvl3s')->insert(values: [
            'type' => 'Payment Module',
            'category' => '',
            'description' => '',
            'task2_id' => 8,
            'minimum_price' => 50,
            'minimum_time_in_hours' => 3,
        ]);
        DB::table('task_lvl3s')->insert(values: [
            'type' => 'Delivery Module',
            'category' => '',
            'description' => '',
            'task2_id' => 8,
            'minimum_price' => 50,
            'minimum_time_in_hours' => 3,
        ]);
        DB::table('task_lvl3s')->insert(values: [
            'type' => 'API Integration',
            'category' => '',
            'description' => '',
            'task2_id' => 8,
            'minimum_price' => 300,
            'minimum_time_in_hours' => 12,
        ]);
        DB::table('task_lvl3s')->insert(values: [
            'type' => 'Feedback',
            'category' => '',
            'description' => '',
            'task2_id' => 9,
            'minimum_price' => 50,
            'minimum_time_in_hours' => 3,
        ]);
        DB::table('task_lvl3s')->insert(values: [
            'type' => 'Slider',
            'category' => '',
            'description' => '',
            'task2_id' => 9,
            'minimum_price' => 50,
            'minimum_time_in_hours' => 3,
        ]);
        DB::table('task_lvl3s')->insert(values: [
            'type' => 'Gallery',
            'category' => '',
            'description' => '',
            'task2_id' => 9,
            'minimum_price' => 50,
            'minimum_time_in_hours' => 3,
        ]);




    }
}
