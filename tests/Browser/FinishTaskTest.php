<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\DB;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Illuminate\Support\ServiceProvider;

class FinishTaskTest extends DuskTestCase
{
    //use DatabaseMigrations;

    public function test_finish_task()
    {
        $user=DB::table('users')->where('role', 'Employer')->first();

        $this->browse(function ($browser) use ($user) {
            $browser->visit('/login')
                ->type('email', $user->email)
                ->type('password', 'password')
                //->press('.inline-flex');
            ->press("Log in")
                //->assertAuthenticatedAs($user)
            ;

            $browser->visit('/dashboard/emp')
                ->screenshot('check')
                ->clickLink('Examine')
                ->screenshot('check')
                ->press('Confirm')
                ->press('Examine')
                ->press('Finish job')
                ->screenshot('check')
            ;
        });
    }
}
