<?php

namespace Tests\Feature;

use App\Models\Order;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;


class OrderPageTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_can_render_order_details_page()
    {
        $this->seed();
        $response = $this->withoutExceptionHandling()->get('/order/1');
//        dd($response);
        $response->assertStatus(200);

    }
}
