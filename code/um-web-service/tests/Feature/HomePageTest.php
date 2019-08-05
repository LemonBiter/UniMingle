<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HomePageTest extends TestCase
{

    public function testGotoHome()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testGotoEvents()
    {
        $response = $this->get('/events');

        $response->assertStatus(200);
    }

    public function testGotoCategory()
    {
        $response = $this->get('/events?q_category=1');

        $response->assertStatus(200);
    }

    public function testGotoLogin()
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }

    public function testGotoRegister()
    {
        $response = $this->get('/register');

        $response->assertStatus(200);
    }

    public function testGotoWorkprocess()
    {
        $response = $this->get('/#workprocess');

        $response->assertStatus(200);
    }

    public function testGotoTerm()
    {
        $response = $this->get('/term');

        $response->assertStatus(200);
    }

    public function testGotoPolicy()
    {
        $response = $this->get('/policy');

        $response->assertStatus(200);
    }

    public function testGotoUnknown()
    {
        $response = $this->get('/unknown');

        $response->assertStatus(404);
    }
}
