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
            $browser->loginAs($user->id)
                ->visit('/dashboard/frl')
                ->click('div.nwyDYWMFE\+jJ\+KGzICIqKw\=\=:nth-child(1) > a:nth-child(5) > button:nth-child(1)')
                ->press('Make Proposal')
                ->type('description', 'Test description')
                ->click('button[type="submit"]')
                ->pause(300)
                ->assertPathIs("/dashboard/frl")
            ;
        });
    }
}
