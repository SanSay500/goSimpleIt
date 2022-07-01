<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\DB;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ProfileTest extends DuskTestCase
{
    public function test_profile(){
        $user=DB::table('users')->find(rand(1,10));

        $this->browse(function ($browser) use ($user){
            $browser->loginAs($user->id);
            $browser->visit('dashboard/emp')
                ->press('#basic-button')
                ->press('li.MuiMenuItem-root:nth-child(2)')
                ->pause(300)
                ->assertPathIs("/user/{$user->id}");
        });
    }
}
