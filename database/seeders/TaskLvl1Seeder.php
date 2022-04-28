<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class TaskLvl1Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //\App\Models\TaskLvl1::factory(1)->create();
        DB::table('task_lvl1s')->insert(values: [
                'type' => 'Make new project',
                'category' => '',
                'description' => '',
                'minimum_price' => '',
                'minimum_time_in_hours' => '',

        ]);
        DB::table('task_lvl1s')->insert(values: [
            'type' => 'Changes in Existing Project',
            'category' => '',
            'description' => '',
            'minimum_price' => 30,
            'minimum_time_in_hours' => 3,

        ]);
        DB::table('task_lvl1s')->insert(values: [
            'type' => 'Additions to Existing Project',
            'category' => '',
            'description' => '',
            'minimum_price' => 50,
            'minimum_time_in_hours' => 3,

        ]);
        DB::table('task_lvl1s')->insert(values: [
            'type' => 'Fix Bugs in Existing Project',
            'category' => '',
            'description' => '',
            'minimum_price' => 50,
            'minimum_time_in_hours' => 2,

        ]);
        DB::table('task_lvl1s')->insert(values: [
            'type' => 'Performance Speed Optimization',
            'category' => '',
            'description' => '',
            'minimum_price' => 50,
            'minimum_time_in_hours' => 2,

        ]);



    }
}
