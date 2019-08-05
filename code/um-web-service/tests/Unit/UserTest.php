<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;

class UserTest extends TestCase
{
    public function testGetStatus()
    {
        $user = new User();
        $user->status = 1;
        $this->assertEquals('active', $user->getStatus());
    }

    public function testIsActivateAllowed()
    {
        $user = new User();
        $user->status = 0;
        $this->assertTrue($user->isActivateAllowed());
    }

    public function testIsSuspendAllowed()
    {
        $user = new User();
        $user->status = 1;
        $this->assertTrue($user->isSuspendAllowed());
    }

    public function testIsDeleteAllowed()
    {
        $user = new User();
        $user->status = 3;
        $this->assertTrue($user->isDeleteAllowed());
    }

    public function testGetEmail()
    {
        $user = new User();
        $user->email = "testverylongemailaddress.testverylongemailaddress@email.com";
        $this->assertTrue(strlen($user->getEmail()) <= 23);
    }
}
