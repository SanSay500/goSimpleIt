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
        ['Wordpress','Tilda','OpenCart', 'E-Commerce CMS',
        'PHP Framework', 'Self-written Site', 'Other'],
        ['150','100','200', '300',
            '500', '800', '1000'],
        ['6','4','6', '8',
            '12', '24', '12']
        ];
            DB::table('engines')->insert(values: [
                'name' => 'Wordpress',
                'minimum_time_in_hours' => '',
                'minimum_price' => '',
                'task1_id' => '',
                'task2_id' => '',
            ]);
            DB::table('engines')->insert(values: [
                'name' => 'Tilda',
                'minimum_time_in_hours' => '',
                'minimum_price' => '',
                'task1_id' => '',
                'task2_id' => '',
            ]);
            DB::table('engines')->insert(values: [
                'name' => 'OpenCart',
                'minimum_time_in_hours' => 6,
                'minimum_price' => 200,
                'task1_id' => '',
                'task2_id' => '',
            ]);
            DB::table('engines')->insert(values: [
                'name' => 'E-Commerce CMS',
                'minimum_time_in_hours' => 8,
                'minimum_price' => 300,
                'task1_id' => '',
                'task2_id' => '',
            ]);
            DB::table('engines')->insert(values: [
                'name' => 'PHP Framework',
                'minimum_time_in_hours' => 12,
                'minimum_price' => 500,
                'task1_id' => '',
                'task2_id' => '',
            ]);
            DB::table('engines')->insert(values: [
                'name' => 'Self-written Site',
                'minimum_time_in_hours' => 24,
                'minimum_price' => 800,
                'task1_id' => '',
                'task2_id' => '',
            ]);
            DB::table('engines')->insert(values: [
                'name' => 'Other',
                'minimum_time_in_hours' => 12,
                'minimum_price' => 1000,
                'task1_id' => '',
                'task2_id' => '',
            ]);

    }
}
