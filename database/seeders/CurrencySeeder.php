<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $currencies=[
            'GBP' => [
                'name' => 'Pound Sterling',
                'symbol' => '£',
                'format' => '£1,0.00',
                'exchange_rate' => 0.00,
            ],
            'USD' => [
                'name' => 'US Dollar',
                'symbol' => '$',
                'format' => '$1,0.00',
                'exchange_rate' => 0.00,
            ],
            'EUR' => [
                'name' => 'Euro',
                'symbol' => '€',
                'format' => '1.0,00 €',
                'exchange_rate' => 0.00,
            ],
        ];

            foreach ($currencies as $key=>$value) {
                DB::table('currencies')->insert(values: [
                'name' =>$value['name'],
                'code' =>$key,
                'symbol' =>$value['symbol'],
                'format' =>$value['format'],
                'exchange_rate' =>$value['exchange_rate'],
                ]);
            };
    }
}
