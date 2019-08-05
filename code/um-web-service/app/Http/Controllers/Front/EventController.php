<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\API\Status;
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
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index','getCategories']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        Log::debug('input:', $request->all());
        $arr['categories'] = data4Select(Category::class);
        $arr['distances'] = Event::distances4Select();
        $arr['prices'] = Event::prices4Select();
        $query = Event::query();

        if ($request->has('q_category') && $request->q_category != null) {
            Log::info("filter by category: " . $request->q_category);
            $query->category($request->q_category);
        }

        if ($request->has('q') && $request->q != null) {
            Log::info("filter by search keyword: " . $request->q);
            $query->keyWords($request->q);
        }

        // distance parameter
        if ($request->has('q_distance') && $request->q_distance != null) {
            Log::info("filter by search distance: " . $request->q_distance);
            // check latitude/longitude passing on
            $latitude = $request->current_lat;
            $longitude = $request->current_lng;

            if (empty($latitude) || empty($longitude)) {
                Log::debug('latitude or longitude is missing from request form, try to get them from clientIP');
                // get IP from request
                $clientIP = $request->ip();
                Log::debug('clientIP: ' . $clientIP);
                // get location by IP
                $location = geoip($clientIP);
                // get latitude/longitude
                $latitude = $location->lat;
                $longitude = $location->lon;
                $city = $location->city;
                Log::debug('city: ' . $city . ' latitude: ' . $latitude . ' longitude: ' . $longitude);
            }
            $query->distance($latitude, $longitude, (int)$request->q_distance);
        }

        // price parameter
        if ($request->has('q_price') && $request->q_price != null) {
            Log::info("filter by price: " . $request->q_price);
            $query->price((int)$request->q_price);
        }

        $arr['events'] = $query->get();

        $request->flash();

        return view('front.events.index')->with($arr);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $arr['categories'] = data4Select(Category::class);
        return view('front.events.create')->with($arr);
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

        return redirect()->route('front.events.show', $event->id);
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

        return view('front.events.show')->with($arr);
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

        return view('front.events.edit')->with($arr);
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

        return redirect()->route('front.events.show', $event);

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

        return response()->json(Status::success(), 200);
    }

    /**
     * joinRequest
     *
     * @param  \App\Models\Event $event
     * @return \Illuminate\Http\Response
     */
    public function joinRequest(Event $event)
    {
        $arr['event'] = $event;
        Log::info("joinRequest event " . $event->id);

        return view('front.events.join')->with($arr);
    }

    /**
     * join an event
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function join($id)
    {
        $user = Auth::user();
        Log::info("join request check auth. userID:" . $user->id . " userName:" . $user->name);
        $event = Event::find($id);
        if (!empty($event)) {
            Log::info("join event " . $event->id);
            // check event status
            if ($event->isJoinable()) {
                if ($event->attendeeExists($event->id, $user->id)) {
                    return response()->json(new Status(1, 'You have already joined this event'), 200);
                } else {
                    if (!empty($event->group_limit) && count($event->attendees) < $event->group_limit) {
                        Log::info("Group limit:" . $event->group_limit . " The current total number of attendee:" . count($event->attendees));
                        $event->attendees()->attach($user->id);
                        return response()->json(Status::success(), 200);
                    } else {
                        return response()->json(new Status(1, 'No spots available on this event'), 200);
                    }
                }
            }
        }

        return response()->json(new Status(1, 'Event is not available'), 200);
    }

    /**
     * cancel an event
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function cancel($id)
    {
        $user = Auth::user();
        Log::info("cancel request check auth. userID:" . $user->id . " userName:" . $user->name);
        $event = Event::find($id);
        if (!empty($event)) {
            Log::info("cancel event " . $event->id);
            // check event status
            if ($event->isCancelable()) {
                if (!$event->attendeeExists($event->id, $user->id)) {
                    return response()->json(new Status(1, 'You have already canceled this event'), 200);
                } else {
                    $event->attendees()->detach($user->id);
                    return response()->json(Status::success(), 200);
                }
            }
        }

        return response()->json(new Status(1, 'Event is not available'), 200);
    }

    /**
     * load all coupons associated with businesses by given category
     * @param $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCoupons($category)
    {
        return response()->json(Coupon::data4Select($category), 200);
    }

    /**
     * load all event categories
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCategories()
    {
        $res = Category::all('id', 'name');
        return response()->json($res);
    }
}
