<?php

namespace App\Http\Controllers;

class FileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getFile($filename)
    {
        return response()->download(storage_path('app/'.$filename), null, [], null);
    }
}
