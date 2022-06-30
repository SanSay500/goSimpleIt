<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\DB;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Illuminate\Support\ServiceProvider;

class FinishTaskTest extends DuskTestCase
{
    //use to drop the base so you could reseed it and get more orders with pending freelancers. yeah i know its a bad way to seed databases
    //use DatabaseMigrations;

    public function test_finish_task()
    {
        $user=DB::table('users')->where('role', 'Employer')->first();

        $this->browse(function ($browser) use ($user) {
            $browser->loginAs($user->id);
            $browser->visit('/dashboard/emp')
                ->clickLink('Examine')
                ->pause(300);

            if($browser->element('a.p-2:nth-child(1)')) {
                $browser
                    ->screenshot('check1')
                    ->click('a.p-2:nth-child(1)')
                    ->pause(300)
                    ->clickLink('Examine')
                    ->pause(300);
            }

            if ($browser->element('a.p-2:nth-child(1)')) {
                $browser
                    ->screenshot('check')
                    ->click('a.p-2:nth-child(1)')
                    ->pause(300);
            }

            $browser
                ->screenshot('check')
                ->assertPathIs('/dashboard/emp')
            ;
        });
    }
}
