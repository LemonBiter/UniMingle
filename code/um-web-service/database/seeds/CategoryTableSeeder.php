<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Category;

class CategoryTableSeeder extends Seeder
{

    public function run()
    {
        DB::table('categories')->delete();

        Category::create([
            'name' => 'Outdoors & Adventure',
        ]);

        Category::create([
            'name' => 'Food & Drink',
        ]);

        Category::create([
            'name' => 'Sports & Fitness',
        ]);

        Category::create([
            'name' => 'Learning',
        ]);

        Category::create([
            'name' => 'Film',
        ]);

        Category::create([
            'name' => 'Book Clubs',
        ]);

        Category::create([
            'name' => 'Tech',
        ]);

        Category::create([
            'name' => 'Remote',
        ]);
    }

}