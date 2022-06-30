<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\DB;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Illuminate\Support\ServiceProvider;

class OrderTest extends DuskTestCase
{

    public function test_order()
    {
        $user=DB::table('users')->where('role', 'Employer')->first();

        $this->browse(function ($browser) use ($user) {
            $browser->visit('/login')
                ->type('email', $user->email)
                ->type('password', 'password')
                ->press('.inline-flex');

            $browser->visit('/')
                ->type('#search-job\ auto', 'Make site on wordpress')
                ->type('title', 'ExampleTitle')
                ->type('description', 'ExampleDescription')
                ->type('cost', '99')
                ->type('time', '99')
                ->attach('file', base_path('public/robots.txt'))
                ->press('._4CBWQLEnlQGt9RHO9hgHMw\=\=')
                ->screenshot('testorder');
        });
    }
}
