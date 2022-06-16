<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use App\Models\User;

class DashboardEmployerPageTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     *
     * @return void
     */
    public function test_dashboard_employer_page()
    {
        $user = User::where('email', '1234@test')->first();
        $this->browse(function ($browser) use ($user) {
            $browser->loginAs(User::find(1))
                ->visit('/dashboard/frl')
                ->assertSee('dashboard');
        });
    }
}
