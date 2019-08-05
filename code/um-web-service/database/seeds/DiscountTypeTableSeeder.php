<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\DiscountType;

class DiscountTypeTableSeeder extends Seeder {

    public function run()
    {
        DB::table('discount_types')->delete();

        // 5$ off
        DiscountType::create([
            'name' => 'Fixed Amount'
        ]);

        // 5% off
        DiscountType::create([
            'name' => 'Percentage Based'
        ]);
    }

}