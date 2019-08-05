<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;



class ProfileController extends Controller
{



    public function profile()
    {
        $arr= array();
        $name = 'Junhong Zhu';
        $country = 'China';
        $email = 'zhujunhong2016@gmail.com';
        $description = "Hello,everyone!
         A self-introduction essay might be one of the easiest essays to start. 
         However, one needs to learn a few things to make the composition worth reading. 
         You might find a lot of tips online on how to write a self-introduction essay,
          but here are some tips which you might find useful.
          However, one needs to learn a few things to make the composition worth reading. 
          You might find a lot of tips online on how to write a self-introduction essay,
           but here are some tips which you might find useful.";

        $type = "outdoor";
        $title = "Indoor climbing: Everyone is welcome!";
        $start_time = "05/15/2019 1:00am";


        $arr['event']= [
            'name'=>$name,
            'country'=>$country,
            'email'=>$email,
            'description'=>$description,
            'type'=>$type,
            'title'=>$title,
            'start_time'=>$start_time
            ];

        return view('profile')->with($arr);


    }

}
