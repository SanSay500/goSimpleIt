<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $jobs=[
            ['Make site on wordpress', 250, 8],
            ['Make shop on wordpress', 350, 12],
            ['Make blog on wordpress', 250, 8],
            ['Fix bugs on wordpress site', 20, 2],
            ['Make design for site', 100, 6],
            ['Change design on wordpress site', 50, 4],
            ['Make logo', 50, 4],
            ['Make favicon', 50, 4],
            ['Fix site on opencart', 50, 4],
            ['Fix site on wordpress', 20, 2],
            ['Changes in wordpress site', 50, 4],
            ['Make wordpress landing page', 100, 4],
            ['Add plugin to wordpress site', 20, 2],
            ['Fix plugin on wordpress site', 50, 2],
            ['Pagespeed optimization wordpress', 50, 3],
            ['Fix lags on site', 20,2],
            ['Site lags fix', 20,2],
            ['Fix site down', 20,2],
            ['Fix site errors', 20,2],
            ['Fix bugs', 20,2],
            ['Wordpress add plugin', 20,2],
            ['Add payment module', 20,2],
            ['Speed up site', 100,8],
            ['Estimate issue 1500', 1500,8],
        ];
        foreach ($jobs as $job) {
            DB::table('jobs')->insert(values: [
                'name' => $job[0],
                'money' => $job[1],
                'time' => $job[2],
            ]);
        }
    }
}
