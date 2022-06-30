<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\DB;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Illuminate\Support\ServiceProvider;

class AcceptTaskTest extends DuskTestCase
{

    public function test_accept_task()
    {
        $user=DB::table('users')->where('role', 'Freelancer')->first();

        $this->browse(function ($browser) use ($user) {
            $browser->visit('/login')
                ->type('email', $user->email)
                ->type('password', 'password')
                ->press('Log in')
                ->visit('/dashboard/frl')
                ->click('View more')
                ->click('Make proposal')
                ->type('description', 'Test description')
                ->click('Send proposal')
                ->assertSee('Dashboard')
            ;
        });
    }
}
