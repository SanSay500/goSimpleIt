<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class LoginTest extends DuskTestCase
{

    public function test_login()
    {
        $user=User::find(rand(1,10));
        $this->browse(function ($browser) use ($user) {
            $browser->visit('/login')
                ->type('email', $user->email)
                ->type('password', 'password')
                ->screenshot('check')
                ->click('button[type="submit"]')
                ->pause(300)
                ->assertAuthenticatedAs($user);
        });
    }
}
