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
                ->press('.inline-flex');

            $browser->visit('/dashboard/emp');
            //under construction just like the function this thing tests

        });
    }
}
