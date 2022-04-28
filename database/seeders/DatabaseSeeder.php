<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            EngineSeeder::class,
            TaskLvl1Seeder::class,
            TaskLvl2Seeder::class,
            TaskLvl3Seeder::class,
            OrderSeeder::class,
        ]);
    }
}
