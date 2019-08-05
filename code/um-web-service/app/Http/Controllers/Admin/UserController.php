<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Resource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Auth;
use DB;


class UserController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users.
    |
    */
    use SendsPasswordResetEmails;

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $roles = ['student'];
        $query = User::query()->role($roles);

        if ($request->has('q') && $request->q != null) {
            // record user input keywords for further analysis in the future
            Log::info("search_keyword: " . $request->q);
            $query->keyWords($request->q);
        }

        // not archived
        $query->statusNot(3);
        $arr['users'] = $query->paginate(4);

        // allow using Input::old() function in view to access the data.
        $request->flash();

        return view('admin.users.index')->with($arr);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $arr = array();
        return view('admin.users.create')->with($arr);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\UserRequest  $request
     * @return \Illuminate\Http\Response
     * @throws
     */
    public function store(UserRequest $request)
    {
        // Retrieve the validated input data...
        $data = $request->validated();
        $user = new User();
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->nationality = $data['nationality'];
        $user->password = Hash::make($data['password']);
        $user->assignRole('student');

        DB::transaction(function () use ($user, $data) {
            $user->save();

            // save personalPhoto
            if (!empty($data['profile_image'])) {
                $meta = [
                    'content_id'=> 'user_avatar',
                    'category'=> 'image',
                    'caption'=> $user->name,
                    'description'=> $user->name.' avatar',
                    'image_resize_enable'=> 1,
                ];
                $avatar = Resource::saveRes($data['profile_image'], $meta);
                $user->avatar()->associate($avatar)->save();
            }

            // save studentCard
            if (!empty($data['studentId_image'])) {
                $meta = [
                    'content_id'=> 'user_studentIdImage',
                    'category'=> 'image',
                    'caption'=> $user->name,
                    'description'=> $user->name.' studentIdImage',
                    'image_resize_enable'=> 0,
                ];
                $studentIdImage = Resource::saveRes($data['studentId_image'], $meta);
                $user->studentIdImage()->associate($studentIdImage)->save();
            }

            Log::info("create user " . $user->id);
        });

        $request->session()->flash('alert-success', 'User added successfully.');

        return redirect()->route('admin.users.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $arr['user'] = $user;
        Log::info("show user " . $user->id);

        return view('admin.users.show')->with($arr);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $arr['user'] = $user;
        return view('admin.users.edit')->with($arr);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     * @throws
     */
    public function update(UserRequest $request, User $user)
    {
        // Retrieve the validated input data...
        $data = $request->validated();
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->nationality = $data['nationality'];
        $user->assignRole('student');

        DB::transaction(function () use ($user, $data) {
            $user->save();

            // save personalPhoto
            if (!empty($data['profile_image'])) {
                $meta = [
                    'content_id'=> 'user_avatar',
                    'category'=> 'image',
                    'caption'=> $user->name,
                    'description'=> $user->name.' avatar',
                    'image_resize_enable'=> 1,
                ];
                $avatar = Resource::saveRes($data['profile_image'], $meta);
                $user->avatar()->associate($avatar)->save();
            }

            // save studentCard
            if (!empty($data['studentId_image'])) {
                $meta = [
                    'content_id'=> 'user_studentIdImage',
                    'category'=> 'image',
                    'caption'=> $user->name,
                    'description'=> $user->name.' studentIdImage',
                    'image_resize_enable'=> 0,
                ];
                $studentIdImage = Resource::saveRes($data['studentId_image'], $meta);
                $user->studentIdImage()->associate($studentIdImage)->save();
            }

            Log::info("update user " . $user->id);
        });

        $request->session()->flash('alert-success', 'User updated successfully.');
        return redirect()->route('admin.users.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        Log::info("delete user " . $user->id);
        $user->delete();

        return response()->json($user);
    }

    /**
     * Change status to active.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function activate(Request $request)
    {
        $id = $request->id_activate;

        $user = User::findOrFail($id);
        Log::info("activate user " . $id);
        $user->activate();

        $request->session()->flash('alert-success', 'User activated successfully.');

        return redirect()->route('admin.users.index');
    }

    /**
     * Change status to suspended.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function suspend(Request $request)
    {
        $id = $request->id_suspend;

        $user = User::findOrFail($id);
        Log::info("suspend user " . $id);
        $user->suspend();

        $request->session()->flash('alert-success', 'User suspended successfully.');

        return redirect()->route('admin.users.index');
    }


    /**
     * Change changePassReq
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function changePassReq(Request $request)
    {
        return view('admin.users.changepassword');
    }

    /**
     * Change changePass
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function changePassword(Request $request)
    {
        $validatedData = $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|string|min:6|confirmed',
            'new_password_confirmation' => 'required|string|min:6|same:new_password',
        ]);

        if (!(Hash::check($request->get('current_password'), Auth::user()->password))) {
            // The passwords matches
            return back()->withErrors('Your current password does not matches with the password you provided.');
        }

        if(strcmp($request->get('current_password'), $request->get('new_password')) == 0){
            //Current password and new password are same
            return back()->withErrors('New Password cannot be same as your current password. Please choose a different password.');
        }

        //Change Password
        $user = Auth::user();
        $user->password = Hash::make($validatedData['new_password']);
        $user->save();

        $request->session()->flash('alert-success', 'Password changed successfully.');

        return redirect()->back();
    }





}
