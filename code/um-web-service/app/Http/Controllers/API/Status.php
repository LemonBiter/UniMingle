<?php

namespace App\Http\Controllers\API;


class Status
{
    const STATUS_SUCCESS = 0;

    const STATUS_FAILURE = 1;

    public $status;

    public $message;

    /**
     * Create a new status instance.
     *
     * @return void
     */
    public function __construct($status, $message)
    {
        $this->status = $status;
        $this->message = $message;
    }

    public static function success() {
        return new Status(Status::STATUS_SUCCESS, 'success');
    }

    public static function failure($message) {
        return new Status(Status::STATUS_FAILURE, $message);
    }

}