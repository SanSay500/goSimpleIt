<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;
use App\Models\Order;

class MakeOrderTest extends TestCase
{
    use RefreshDatabase;

    public function test_registered_user_can_make_order()
    {
        $this->seed();
        $user = User::where('role','Employer')->first();
        Auth::login($user);

        $this->assertAuthenticated();
        $this->withoutExceptionHandling();

        $response = $this->actingAs($user)->post('/store', [
            'title' => 'Title',
            'description' => 'Desc',
            'cost' => 500,
            'time' => 5,
            'user_id' => $user->id,
            'task_id' => 1,
        ]);

        $response->assertRedirect(route('employer_dashboard_index'));
    }

}
