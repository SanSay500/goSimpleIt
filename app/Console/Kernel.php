<?php

namespace app\Console;

use AmrShawky\LaravelCurrency\Facade\Currency;
use App\Models\CurrencyModel;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
            $currencies_update = Currency::rates()
                ->latest()
                ->symbols(['USD', 'GBP', 'EUR'])
                ->base('EUR')
                ->get();
            foreach ($currencies_update as $key => $value) {
                $nowCurrency = CurrencyModel::where('code', $key)->first();
                $nowCurrency->exchange_rate = $value;
                $nowCurrency->updated_at = date("F j, Y, g:i a");
                $nowCurrency->save();
            }
        })->daily();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
