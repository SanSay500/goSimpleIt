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

        $task1_array = [
            ['Make new project', 'Web Applications', 0, 0],
            ['Changes in Existing Project', 'Web Applications', 30, 3],
            ['Additions to Existing Project', 'Web Applications', 30, 3],
            ['Fix Bugs in Existing Project', 'Web Applications', 20, 2],
            ['Performance Speed Optimization', 'Web Applications', 20, 3],
        ];
        foreach ($task1_array as $task1) {
            DB::table('task_lvl1s')->insert(values: [
                'type' => $task1[0],
                'category' => $task1[1],
                'description' => '',
                'minimum_price' => $task1[2],
                'minimum_time_in_hours' => $task1[3],
            ]);
        }
    }
}
