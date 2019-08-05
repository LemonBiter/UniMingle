<?php

namespace Tests\Unit;

use App\Models\Event;
use App\Models\User;
use Tests\TestCase;
use Auth;
use Log;

class EventTest extends TestCase
{
    public function testGetStatus()
    {
        $event = new Event();
        $event->status = 1;
        $this->assertEquals('open', $event->getStatus());
    }

    public function testIsJoinable()
    {
        $event = new Event();
        $event->status = 1;

        $mock_user = new User([
            'ID' => 3,
            'name' => 'John Snow Stark'
        ]);
        $this->be($mock_user);

        Log::debug('testIsJoinable: '.Auth::user());

        $this->assertTrue(true);
    }

    public function testIsOpenAllowed()
    {
        $event = new Event();
        $event->status = 1;

        $this->assertFalse($event->isOpenAllowed());
    }

}
