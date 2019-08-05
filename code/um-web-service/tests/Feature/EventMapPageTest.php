<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EventMapPageTest extends TestCase
{

    public function testSearch()
    {
        $response = $this->get('/events?_token=rUppbrQPNDDuUpdBuqKNhvXgXbByMP6OOcR7Mk5I&q_category=1&q_distance=&q_price=&current_lat=-34.946019199999995&current_lng=138.6020029&q=');

        $response->assertStatus(200);
    }
}
