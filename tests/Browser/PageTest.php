<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\DB;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;


class PageTest extends DuskTestCase
{
    //GET|HEAD        chatify/1 ... user › Chatify\Http › MessagesController@index
    public function test_page_chatify_1()
    {
        $user=DB::table('users')->find(rand(1,10));

        $this->browse(function ($browser) use ($user) {
            $browser->visit('/login')
                ->type('email', $user->email)
                ->type('password', 'password')
                ->click('button[type="submit"]')
                ;

            $browser->visit('/chatify/1')
                ->assertSourceHas('MessagesController@index');
        });
    }
    //GET|HEAD        dashboard/emp .... employer_dashboard_index › DashboardController@employer_dashboard_index
    public function test_page_dashboard_emp()
    {
        $user=DB::table('users')->where('role', 'Employer')->first();

        $this->browse(function ($browser) use ($user) {
            $browser->visit('/login')
                ->type('email', $user->email)
                ->type('password', 'password')
                ->click('button[type="submit"]')
            ;

            $browser->visit('/dashboard/emp')
                ->assertSourceHas('DashboardController@employer_dashboard_index');
        });
    }

    //  GET|HEAD        dashboard/frl .. freelancer_dashboard_index › DashboardController@freelancer_dashboard_index
    public function test_page_dashboard_frl()
    {
        $user=DB::table('users')->where('role', 'Freelancer')->first();

        $this->browse(function ($browser) use ($user) {
            $browser->visit('/login')
                ->type('email', $user->email)
                ->type('password', 'password')
                ->click('button[type="submit"]')
            ;

            $browser->visit('/dashboard/frl')
                ->assertSourceHas('DashboardController@freelancer_dashboard_index');
        });
    }

    //  GET|HEAD        forgot-password .. password.request › Auth\PasswordResetLinkController@create
    public function test_page_forgot_password()
    {
        $this->browse(function ($browser) {
            $browser->visit('/forgot-password')
                ->assertSourceHas('Auth\PasswordResetLinkController@create');
        });
    }

    //  GET|HEAD        login .. login › Auth\AuthenticatedSessionController@create

    public function test_page_login()
    {
        $this->browse(function ($browser) {
            $browser->visit('/login')
                ->assertSourceHas('Auth\AuthenticatedSessionController@create');
        });
    }

    //  GET|HEAD        order/1 .. order.details › OrderController@details
    public function test_page_order_1()
    {
        $this->browse(function ($browser) {
            $browser->visit('/order/1')
                ->assertSourceHas('OrderController@details');
        });
    }

      //GET|HEAD        register ... register › Auth\RegisteredUserController@create
    public function test_page_register()
    {
        $this->browse(function ($browser) {
            $browser->visit('/register')
                ->assertSourceHas('Auth\RegisteredUserController@create');
        });
    }

      //GET|HEAD        user/1 .. user_profile › UserController@index
    public function test_page_user_1()
    {
        $user=DB::table('users')->find(rand(1,10));

        $this->browse(function ($browser) use ($user) {
            $browser->visit('/login')
                ->type('email', $user->email)
                ->type('password', 'password')
                ->click('button[type="submit"]')
            ;

            $browser->visit('/user/1')
                ->assertSourceHas('UserController@index');
        });
    }
}

