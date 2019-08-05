<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder {

    public function run()
    {
        DB::table('users')->delete();

        $admin = User::create([
            'name' => 'Super Admin',
            'email' => 'admin@unimingle.tk',
            'email_verified_at' => now(),
            'password' => Hash::make('MCIteam15@100%'),
            'status' => 1, // 1:enabled, 0:disabed
            'remember_token' => Str::random(10),
        ]);
        $admin->assignRole('super-admin');
    }
}