<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Illuminate\Support\Facades\DB;

class LoginTest extends DuskTestCase
{

    public function test_order()
    {
        $user=DB::table('users')->find(rand(1,10));
        $this->browse(function ($browser) use ($user) {
            $browser->visit('/login')
                ->type('email', $user->email)
                ->type('password', 'password')
                //->clickAndWaitForReload('.inline-flex')
                ->press('.inline-flex')
            ;
            $browser->visit('dashboard/emp')
                ->assertSee('dashboard')
                ->press('#basic-button')
                ->press('li.MuiMenuItem-root:nth-child(2)')
                ->screenshot('testlogin1');

        });
    }
}
