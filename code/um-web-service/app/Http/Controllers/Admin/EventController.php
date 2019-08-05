<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\EventRequest;
use App\Models\Category;
use App\Models\Coupon;
use App\Models\Event;
use App\Models\Resource;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use DB;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $arr['events'] = Event::paginate(4);

        // allow using Input::old() function in view to access the data.
        $request->flash();

        return view('admin.events.index')->with($arr);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $arr['categories'] = data4Select(Category::class);
        return view('admin.events.create')->with($arr);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param EventRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(EventRequest $request)
    {
        // Retrieve the validated input data...
        $data = $request->validated();
        Log::debug('input:', $data);
        $event = new Event();
        $event->title = $data['title'];
        $event->description = $data['description'];

        if (!empty($data['location'])) {
            $event->location = $data['location'];
            $event->lat = $data['lat'];
            $event->lng = $data['lng'];
        }

        if (!empty($data['price'])) {
            $event->price = $data['price'];
        }
        $event->start_time = Carbon::createFromFormat('Y-m-d H:i', $data['start_time']);
        $event->end_time = Carbon::createFromFormat('Y-m-d H:i', $data['end_time']);

        if (!empty($data['sign_up_due_time'])) {
            $event->sign_up_due_time = Carbon::createFromFormat('Y-m-d H:i', $data['sign_up_due_time']);
        }

        $event->group_limit = $data['group_limit'];
        $event->is_top = empty($data['is_top']) ? 0 : 1;
        $event->is_front = empty($data['is_front']) ? 0 : 1;

        DB::transaction(function () use ($event, $data) {
            $event->save();

            // cover_image
            if (!empty($data['cover_image'])) {
                $meta = [
                    'content_id' => 'event_cover_image',
                    'category' => 'image',
                    'caption' => $event->title,
                    'description' => $event->title . ' cover image',
                    'image_resize_enable' => 1,
                ];
                $cover_image = Resource::saveRes($data['cover_image'], $meta);
                $event->coverImage()->associate($cover_image)->save();
            }

            // poster
            $poster = Auth::user();
            $event->poster()->associate($poster)->save();

            // category
            $event_category = Category::find($data['category']);
            $event->category()->associate($event_category)->save();

            // coupon
            if (!empty($data['coupon'])) {
                $event_coupon = Coupon::find($data['coupon']);
                $event->coupon()->associate($event_coupon)->save();
            }

            Log::info("create event " . $event->id);
        });

        $request->session()->flash('alert-success', 'Event added successfully.');

        return redirect()->route('admin.events.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        $arr['event'] = $event;
        Log::info("show event " . $event->id);

        return view('admin.events.show')->with($arr);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Event $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        $event->start_time = $event->getStartTime();
        $event->end_time = $event->getEndTime();
        $event->sign_up_due_time = $event->getSignUpDueDate();
        $arr['event'] = $event;
        $arr['categories'] = data4Select(Category::class);
        $arr['coupons'] = Coupon::data4Select2($event->category->id);
        return view('admin.events.edit')->with($arr);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param EventRequest $request
     * @param  \App\Models\Event $event
     * @return \Illuminate\Http\Response
     */
    public function update(EventRequest $request, Event $event)
    {
        // Retrieve the validated input data...
        $data = $request->validated();
        Log::debug('input:', $data);
        $event->title = $data['title'];
        $event->description = $data['description'];

        if (!empty($data['location'])) {
            $event->location = $data['location'];
            $event->lat = $data['lat'];
            $event->lng = $data['lng'];
        }

        if (!empty($data['price'])) {
            $event->price = $data['price'];
        }
        $event->start_time = Carbon::createFromFormat('Y-m-d H:i', $data['start_time']);
        $event->end_time = Carbon::createFromFormat('Y-m-d H:i', $data['end_time']);

        if (!empty($data['sign_up_due_time'])) {
            $event->sign_up_due_time = Carbon::createFromFormat('Y-m-d H:i', $data['sign_up_due_time']);
        }

        $event->group_limit = $data['group_limit'];
        $event->is_top = empty($data['is_top']) ? 0 : 1;
        $event->is_front = empty($data['is_front']) ? 0 : 1;

        DB::transaction(function () use ($event, $data) {
            $event->save();

            // cover_image
            if (!empty($data['cover_image'])) {
                $meta = [
                    'content_id' => 'event_cover_image',
                    'category' => 'image',
                    'caption' => $event->title,
                    'description' => $event->title . ' cover image',
                    'image_resize_enable' => 1,
                ];
                $cover_image = Resource::saveRes($data['cover_image'], $meta);
                $event->coverImage()->associate($cover_image)->save();
            }

            // poster
            $poster = Auth::user();
            $event->poster()->associate($poster)->save();

            // category
            $event_category = Category::find($data['category']);
            $event->category()->associate($event_category)->save();

            // coupon
            if (!empty($data['coupon'])) {
                $event_coupon = Coupon::find($data['coupon']);
                $event->coupon()->associate($event_coupon)->save();
            } else {
                if ($event->coupon) {
                    // change to none
                    $event->coupon()->dissociate()->save();
                }
            }

            Log::info("update event " . $event->id);
        });

        $request->session()->flash('alert-success', 'Event updated successfully.');

        return redirect()->route('admin.events.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        Log::info("delete event " . $event->id);
        $event->delete();

        return response()->json($event);
    }
}
