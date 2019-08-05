<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(Request $request)
    {
        $arr = array();
        return view('index')->with($arr);
    }

    public function term(Request $request)
    {
        $arr = array();
        return view('term')->with($arr);
    }

    public function policy(Request $request)
    {
        $arr = array();
        return view('policy')->with($arr);
    }
}
