<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Illuminate\Support\Facades\Hash;
use Tests\DuskTestCase;
use App\Models\User;

class LoginPageTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     *
     * @return void
     */
    public function test_login_page()
    {
        $this->browse(function ($browser) {
            $browser->visit('/login')
                ->type('email', '1234@test')
                ->type('password', 'password')
                ->keys('',['{enter}'])
                ->screenshot('log3')
                ->press('@login')
                ->screenshot('log4')
                ->assertSee('@Main-page');
        });
        User::latest()->first()->delete();

    }
}
