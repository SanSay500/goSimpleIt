<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskLvl2Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // \App\Models\TaskLvl2::factory(10)->create();
        DB::table('task_lvl2s')->insert(values: [
            'type' => 'Change Design',
            'category' => '',
            'description' => '',
            'task1_id' => 2,
            'minimum_price' => 20,
            'minimum_time_in_hours' => 2,

        ]);
        DB::table('task_lvl2s')->insert(values: [
            'type' => 'Change Behavior',
            'category' => '',
            'description' => '',
            'task1_id' => 2,
            'minimum_price' => 50,
            'minimum_time_in_hours' => 3,

        ]);
        DB::table('task_lvl2s')->insert(values: [
            'type' => 'E-Commerce Site',
            'category' => '',
            'description' => '',
            'task1_id' => 1,
            'minimum_price' => 750,
            'minimum_time_in_hours' => 48,

        ]);
        DB::table('task_lvl2s')->insert(values: [
            'type' => 'Landing Page',
            'category' => '',
            'description' => '',
            'task1_id' => 1,
            'minimum_price' => 200,
            'minimum_time_in_hours' => 8,

        ]);
        DB::table('task_lvl2s')->insert(values: [
            'type' => 'Blog',
            'category' => '',
            'description' => '',
            'task1_id' => 1,
            'minimum_price' => 350,
            'minimum_time_in_hours' => 8,

        ]);
        DB::table('task_lvl2s')->insert(values: [
            'type' => 'Information Site',
            'category' => '',
            'description' => '',
            'task1_id' => 1,
            'minimum_price' => 300,
            'minimum_time_in_hours' => 8,

        ]);
        DB::table('task_lvl2s')->insert(values: [
            'type' => 'Company Site',
            'category' => '',
            'description' => '',
            'task1_id' => 1,
            'minimum_price' => 300,
            'minimum_time_in_hours' => 8,

        ]);
        DB::table('task_lvl2s')->insert(values: [
            'type' => 'Back-end Modules',
            'category' => '',
            'description' => '',
            'task1_id' => 3,
            'minimum_price' => 100,
            'minimum_time_in_hours' => 3,
        ]);
        DB::table('task_lvl2s')->insert(values: [
            'type' => 'Front-end Modules',
            'category' => '',
            'description' => '',
            'task1_id' => 3,
            'minimum_price' => 100,
            'minimum_time_in_hours' => 3,
        ]);
        DB::table('task_lvl2s')->insert(values: [
            'type' => 'Make Design',
            'category' => '',
            'description' => '',
            'task1_id' => 1,
            'minimum_price' => 20,
            'minimum_time_in_hours' => 2,
        ]);
        DB::table('task_lvl2s')->insert(values: [
            'type' => 'Other',
            'category' => '',
            'description' => '',
            'task1_id' => 1,
            'minimum_price' => '',
            'minimum_time_in_hours' => '',
        ]);



    }
}
