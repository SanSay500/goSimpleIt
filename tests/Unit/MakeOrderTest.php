<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MakeOrderTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_make_order_screen_can_be_rendered()
    {
        $response = $this->get('/order');

        $response->assertStatus(200);
    }
}
