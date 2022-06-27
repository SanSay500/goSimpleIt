<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EngineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $engines_array=[
            ['Wordpress', 150, 6],
            ['Tilda', 100, 4],
            ['OpenCart', 200, 6],
            ['E-Commerce CMS', 300, 8],
            ['PHP Framework', 500, 12],
            ['Self-written Site', 800, 24],
            ['Other', 0, 0],
        ];
        foreach ($engines_array as $engine) {
            DB::table('engines')->insert(values: [
                'name' => $engine[0],
                'minimum_time_in_hours' => $engine[1],
                'minimum_price' => $engine[2],
            ]);
        }

    }
}
