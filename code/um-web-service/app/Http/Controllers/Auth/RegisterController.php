<?php

namespace App\Http\Controllers\Auth;

use App\Models\Resource;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use DB;
use Log;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'fullname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'nationality' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string', 'min:6'],
            'personalPhoto' => 'required|mimes:jpeg,png,jpg,gif|max:1024',
            'studentCard' => 'required|mimes:jpeg,png,jpg,gif|max:1024',
        ]);
    }

    protected function create(array $data)
    {
        $user = new User();
        $user->name = $data['fullname'];
        $user->email = $data['email'];
        $user->nationality = $data['nationality'];
        $user->password = Hash::make($data['password']);
        $user->assignRole('student');

        DB::transaction(function () use ($user, $data) {
            $user->save();

            // save personalPhoto
            if (!empty($data['personalPhoto'])) {
                $meta = [
                    'content_id'=> 'user_avatar',
                    'category'=> 'image',
                    'caption'=> $user->name,
                    'description'=> $user->name.' avatar',
                    'image_resize_enable'=> 1,
                ];
                $avatar = Resource::saveRes($data['personalPhoto'], $meta);
                $user->avatar()->associate($avatar)->save();
            }

            // save studentCard
            if (!empty($data['studentCard'])) {
                $meta = [
                    'content_id'=> 'user_studentIdImage',
                    'category'=> 'image',
                    'caption'=> $user->name,
                    'description'=> $user->name.' studentIdImage',
                    'image_resize_enable'=> 0,
                ];
                $studentIdImage = Resource::saveRes($data['studentCard'], $meta);
                $user->studentIdImage()->associate($studentIdImage)->save();
            }

            Log::info("create user " . $user->id);
        });

        return $user;
    }

    protected function registered(Request $request, $user)
    {
        $request->session()->flash('alert-success', 'Account created successfully.');

        return redirect()->route('index');
    }
}
