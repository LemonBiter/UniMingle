<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\Models\Resource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use DB;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $arr['categories'] = Category::paginate(5);

        // allow using Input::old() function in view to access the data.
        $request->flash();

        return view('admin.categories.index')->with($arr);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.categories.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CategoryRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        // Retrieve the validated input data...
        $data = $request->validated();
        Log::debug('input:', $data);
        $category = new Category();
        $category->name = $data['name'];

        DB::transaction(function () use ($category, $data) {
            $category->save();

            // save cover_image
            if (!empty($data['cover_image'])) {
                $meta = [
                    'content_id' => 'category_cover_image',
                    'category' => 'image',
                    'caption' => $category->name,
                    'description' => $category->name . ' cover image',
                    'image_resize_enable' => 1,
                ];
                $cover_image = Resource::saveRes($data['cover_image'], $meta);
                $category->coverImage()->associate($cover_image)->save();
            }

            Log::info("create category " . $category->id);
        });

        $request->session()->flash('alert-success', 'Category added successfully.');

        return redirect()->route('admin.categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $arr['category'] = $category;
        Log::info("show category " . $category->id);

        return view('admin.categories.show')->with($arr);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        $arr['category'] = $category;
        return view('admin.categories.edit')->with($arr);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CategoryRequest $request
     * @param  \App\Models\Category $category
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, Category $category)
    {
        // Retrieve the validated input data...
        $data = $request->validated();
        Log::debug('input:', $data);
        $category->name = $data['name'];

        DB::transaction(function () use ($category, $data) {
            $category->save();

            // save cover_image
            if (!empty($data['cover_image'])) {
                $meta = [
                    'content_id' => 'category_cover_image',
                    'category' => 'image',
                    'caption' => $category->name,
                    'description' => $category->name . ' cover image',
                    'image_resize_enable' => 1,
                ];
                $cover_image = Resource::saveRes($data['cover_image'], $meta);
                $category->coverImage()->associate($cover_image)->save();
            }

            Log::info("create category " . $category->id);
        });

        $request->session()->flash('alert-success', 'Category updated successfully.');

        return redirect()->route('admin.categories.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        Log::info("delete category " . $category->id);

        if ($category->events()->count()) {
            return response()->json(['error' => 'Delete category is not allowed as events associated with this category exist'],400);
        }

        if ($category->businessPartners()->count()) {
            return response()->json(['error' => 'Delete category is not allowed as businessPartners associated with this category exist'],400);
        }

        $category->delete();
        $arr['id'] = $category->id;

        return response()->json($arr);
    }
}
