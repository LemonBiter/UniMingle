<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BusinessPartnerRequest;
use App\Models\BusinessPartner;
use App\Models\Category;
use App\Models\Resource;
use Illuminate\Http\Request;
use Log;
use DB;

class BusinessPartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $arr['businessPartners'] = BusinessPartner::paginate(4);

        // allow using Input::old() function in view to access the data.
        $request->flash();

        return view('admin.businessPartners.index')->with($arr);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $arr['categories'] = data4Select(Category::class);
        return view('admin.businessPartners.create')->with($arr);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param BusinessPartnerRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(BusinessPartnerRequest $request)
    {
        // Retrieve the validated input data...
        $data = $request->validated();
        Log::debug('input:', $data);
        $businessPartner = new BusinessPartner();
        $businessPartner->name = $data['name'];
        $businessPartner->description = $data['description'];

        if (!empty($data['location'])) {
            $businessPartner->location = $data['location'];
            $businessPartner->lat = $data['lat'];
            $businessPartner->lng = $data['lng'];
        }

        if (!empty($data['phone'])) {
            $businessPartner->phone = $data['phone'];
        }

        if (!empty($data['website'])) {
            $businessPartner->website = $data['website'];
        }

        DB::transaction(function () use ($businessPartner, $data) {
            $businessPartner->save();

            // save cover_image
            if (!empty($data['logo'])) {
                $meta = [
                    'content_id' => 'businessPartner_logo',
                    'category' => 'image',
                    'caption' => $businessPartner->name,
                    'description' => $businessPartner->name . ' logo',
                    'image_resize_enable' => 0,
                ];
                $logo = Resource::saveRes($data['logo'], $meta);
                $businessPartner->logo()->associate($logo)->save();
            }

            // businessPartner category
            $businessPartner_category = Category::find($data['category']);
            $businessPartner->category()->associate($businessPartner_category)->save();

            Log::info("create business partner " . $businessPartner->id);
        });

        $request->session()->flash('alert-success', 'Business partner added successfully.');

        return redirect()->route('admin.businessPartners.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BusinessPartner  $businessPartner
     * @return \Illuminate\Http\Response
     */
    public function show(BusinessPartner $businessPartner)
    {
        $arr['businessPartner'] = $businessPartner;
        Log::info("show businessPartner " . $businessPartner->id);

        return view('admin.businessPartners.show')->with($arr);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BusinessPartner  $businessPartner
     * @return \Illuminate\Http\Response
     */
    public function edit(BusinessPartner $businessPartner)
    {
        $arr['businessPartner'] = $businessPartner;
        $arr['categories'] = data4Select(Category::class);
        return view('admin.businessPartners.edit')->with($arr);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param BusinessPartnerRequest $request
     * @param  \App\Models\BusinessPartner  $businessPartner
     * @return \Illuminate\Http\Response
     */
    public function update(BusinessPartnerRequest $request, BusinessPartner $businessPartner)
    {
        // Retrieve the validated input data...
        $data = $request->validated();
        Log::debug('input:', $data);
        $businessPartner->name = $data['name'];
        $businessPartner->description = $data['description'];

        if (!empty($data['location'])) {
            $businessPartner->location = $data['location'];
            $businessPartner->lat = $data['lat'];
            $businessPartner->lng = $data['lng'];
        }

        if (!empty($data['phone'])) {
            $businessPartner->phone = $data['phone'];
        }

        if (!empty($data['website'])) {
            $businessPartner->website = $data['website'];
        }

        DB::transaction(function () use ($businessPartner, $data) {
            $businessPartner->save();

            // save cover_image
            if (!empty($data['logo'])) {
                $meta = [
                    'content_id' => 'businessPartner_logo',
                    'category' => 'image',
                    'caption' => $businessPartner->name,
                    'description' => $businessPartner->name . ' logo',
                    'image_resize_enable' => 0,
                ];
                $logo = Resource::saveRes($data['logo'], $meta);
                $businessPartner->logo()->associate($logo)->save();
            }

            // businessPartner category
            $businessPartner_category = Category::find($data['category']);
            $businessPartner->category()->associate($businessPartner_category)->save();

            Log::info("update business partner " . $businessPartner->id);
        });

        $request->session()->flash('alert-success', 'Business partner updated successfully.');

        return redirect()->route('admin.businessPartners.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $businessPartner = BusinessPartner::findOrFail($id);
        Log::info("delete businessPartner " . $businessPartner->id);
        $businessPartner->delete();

        return response()->json($businessPartner);
    }
}
