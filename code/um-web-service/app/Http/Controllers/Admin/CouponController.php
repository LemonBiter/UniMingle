<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\CouponRequest;
use App\Models\BusinessPartner;
use App\Models\Category;
use App\Models\Coupon;
use App\Models\DiscountType;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use DB;

class CouponController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $arr['coupons'] = Coupon::paginate(4);

        // allow using Input::old() function in view to access the data.
        $request->flash();

        return view('admin.coupons.index')->with($arr);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $arr['businesses'] = data4Select(BusinessPartner::class);
        $arr['discountTypes'] = data4Select(DiscountType::class);
        return view('admin.coupons.create')->with($arr);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CouponRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(CouponRequest $request)
    {
        // Retrieve the validated input data...
        $data = $request->validated();
        Log::debug('input:', $data);
        $coupon = new Coupon();
        $coupon->name = $data['name'];
        $coupon->code = $data['code'];
        $coupon->description = $data['description'];
        $coupon->discount = $data['discount'];

        $coupon->start_time = Carbon::createFromFormat('Y-m-d H:i', $data['start_time']);
        $coupon->end_time = Carbon::createFromFormat('Y-m-d H:i', $data['end_time']);

        $coupon->total_usage = $data['total_usage'];

        DB::transaction(function () use ($coupon, $data) {
            $coupon->save();

            // discountType
            $coupon_discountType = Category::find($data['discountType']);
            $coupon->discountType()->associate($coupon_discountType)->save();

            // discountType
            $coupon_business = Category::find($data['business']);
            $coupon->business()->associate($coupon_business)->save();

            Log::info("create coupon " . $coupon->id);
        });

        $request->session()->flash('alert-success', 'Coupon added successfully.');

        return redirect()->route('admin.coupons.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Coupon $coupon
     * @return \Illuminate\Http\Response
     */
    public function show(Coupon $coupon)
    {
        $arr['coupon'] = $coupon;
        Log::info("show coupon " . $coupon->id);

        return view('admin.coupons.show')->with($arr);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Coupon $coupon
     * @return \Illuminate\Http\Response
     */
    public function edit(Coupon $coupon)
    {
        $coupon->start_time = $coupon->getStartTime();
        $coupon->end_time = $coupon->getEndTime();
        $arr['coupon'] = $coupon;
        $arr['businesses'] = data4Select(BusinessPartner::class);
        $arr['discountTypes'] = data4Select(DiscountType::class);
        return view('admin.coupons.edit')->with($arr);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CouponRequest $request
     * @param  \App\Models\Coupon $coupon
     * @return \Illuminate\Http\Response
     */
    public function update(CouponRequest $request, Coupon $coupon)
    {
        // Retrieve the validated input data...
        $data = $request->validated();
        Log::debug('input:', $data);
        $coupon->name = $data['name'];
        $coupon->code = $data['code'];
        $coupon->description = $data['description'];
        $coupon->discount = $data['discount'];

        $coupon->start_time = Carbon::createFromFormat('Y-m-d H:i', $data['start_time']);
        $coupon->end_time = Carbon::createFromFormat('Y-m-d H:i', $data['end_time']);

        $coupon->total_usage = $data['total_usage'];

        DB::transaction(function () use ($coupon, $data) {
            $coupon->save();

            // discountType
            $coupon_discountType = Category::find($data['discountType']);
            $coupon->discountType()->associate($coupon_discountType)->save();

            // discountType
            $coupon_business = Category::find($data['business']);
            $coupon->business()->associate($coupon_business)->save();

            Log::info("update coupon " . $coupon->id);
        });

        $request->session()->flash('alert-success', 'Coupon updated successfully.');

        return redirect()->route('admin.coupons.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $coupon = Coupon::findOrFail($id);
        Log::info("delete coupon " . $coupon->id);
        $coupon->delete();

        return response()->json($coupon);
    }
}
