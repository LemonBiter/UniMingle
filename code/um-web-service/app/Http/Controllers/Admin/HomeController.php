<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $arr['total_users_count'] = User::all()->count();
        $arr['total_events_count'] = Event::all()->count();
        $arr['open_events_count'] = Event::where('status', 1)->count();
        $arr['total_visits_count'] = 150;
        $arr['traffic'] = array();
        return view('admin.home')->with($arr);
    }
}
