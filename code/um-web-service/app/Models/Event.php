<?php

namespace App\Models;

use App\Traits\SharedConstants;
use App\Traits\Trackable;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Log;

class Event extends Model
{
    use Trackable;

    use SharedConstants;

    /**
     * Get the coverImage that belongs to this Event.
     */
    public function coverImage()
    {
        return $this->belongsTo(Resource::class);
    }

    /**
     * Get the category that belongs to this Event.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the poster that belongs to this Event.
     */
    public function poster()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The applicants that belong to the Event.
     */
    public function attendees()
    {
        return $this->belongsToMany(User::class,'event_attendees', 'event_id', 'attendee_id');
    }

    /**
     * Get the coupon that belongs to this Event.
     */
    public function coupon()
    {
        return $this->belongsTo(Coupon::class);
    }

    public function getStatus()
    {
        $status = "";

        // status: 1:open 2.in process 3.completed 4:cancelled
        if ($this->status == 1) {
            $status = "open";
        }
        if ($this->status == 2) {
            $status = "in process";
        }
        if ($this->status == 3) {
            $status = "completed";
        }
        if ($this->status == 4) {
            $status = "cancelled";
        }

        return $status;
    }

    public function isOpen()
    {
        return $this->status == 1;
    }

    public function isJoinable()
    {
        return $this->status == 1 && Auth::user()->id != $this->poster->id;
    }

    public function isCancelable()
    {
        return $this->status == 1 && Auth::user()->id != $this->poster->id && !Carbon::parse($this->end_time)->isPast();
    }

    public function isDeleteAllowed()
    {
        return Auth::user()->id == $this->poster->id;
    }

    public function isEditAllowed()
    {
        return Auth::user()->id == $this->poster->id;
    }

    public function isInProcess()
    {
        return $this->status == 2;
    }

    public function isCompleted()
    {
        return $this->status == 3;
    }

    public function isCancelled()
    {
        return $this->status == 4;
    }

    public function isOpenAllowed()
    {
        return !in_array($this->status, array(1, 2, 3));
    }

    public function isInProcessAllowed()
    {
        return !in_array($this->status, array(2, 3, 4));
    }

    public function isCompeteAllowed()
    {
        return !in_array($this->status, array(1, 3, 4));
    }

    public function isCancelAllowed()
    {
        return !in_array($this->status, array(3, 4));
    }

    public function getPublishDate()
    {
        return $this->publish_at ? Carbon::parse($this->publish_at)->format('d/m/Y') : "N/A";
    }

    public function getCreatedDate()
    {
        return $this->created_at ? Carbon::parse($this->created_at)->format(self::$DATE_TIME_STRING_FORMAT) : "N/A";
    }

    public function getUpdatedDate()
    {
        return $this->updated_at ? Carbon::parse($this->updated_at)->format(self::$DATE_TIME_STRING_FORMAT) : "N/A";
    }

    public function getStartTime()
    {
        return $this->start_time ? Carbon::parse($this->start_time)->format(self::$DATE_TIME_STRING_FORMAT) : "N/A";
    }

    public function getEndTime()
    {
        return $this->end_time ? Carbon::parse($this->end_time)->format(self::$DATE_TIME_STRING_FORMAT) : "N/A";
    }

    public function getSignUpDueDate()
    {
        return $this->sign_up_due_time ? Carbon::parse($this->sign_up_due_time)->format(self::$DATE_TIME_STRING_FORMAT) : "N/A";
    }

    public function getPublishDateDiffForHumans()
    {
        return $this->publish_at ? Carbon::parse($this->publish_at)->diffForHumans() : "N/A";
    }

    /**
     * Scope a query to only include given status.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param  $status
     */
    public function scopeStatus($query, $status)
    {
        $query->where('status', $status);
    }

    /**
     * Scope a query to only include given status.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param  $status
     */
    public function scopeNotStatus($query, $status)
    {
        $query->where('status', '!=', $status);
    }

    /**
     * Scope a query to only include given data.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param  $status
     */
    public function scopeTop($query, $is_top)
    {
        $query->where('is_top', $is_top);
    }

    /**
     * Scope a query to only include given data.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param  $status
     */
    public function scopeFront($query, $is_front)
    {
        $query->where('is_front', $is_front);
    }

    /**
     * Scope a query to only include given keywords.
     *  query from title/description
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param  $keywords
     */
    public function scopeKeyWords($query, $keywords)
    {
        if ($keywords) $query->where('title', 'like', '%' . $keywords . '%')
            ->orWhere('location', 'like', '%' . $keywords . '%')
            ->orWhere('description', 'like', '%' . $keywords . '%');
    }

    /**
     * Scope a query to only include given category.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param  $category
     */
    public function scopeCategory($query, $category)
    {
        $query->with('category')->whereHas('category', function ($query) use ($category) {
            $query->where('id', $category);
        });
    }

    public function scopePrice($query, $price)
    {
        if ($price == -1) {
            $query->where('price', '>', 100);
        } else {
            $query->where('price', '<=', $price);
        }
    }

    /**
     *
     * Haversine formula
     *
     * Here's the SQL statement that will find the closest 20 locations that are within a radius of 25 miles to the 37, -122 coordinate.
     * It calculates the distance based on the latitude/longitude of that row and the target latitude/longitude,
     * and then asks for only rows where the distance value is less than 25, orders the whole query by distance,
     * and limits it to 20 results. To search by kilometers instead of miles, replace 3959 with 6371.
     *
     *
     * SELECT id, ( 3959 * acos( cos( radians(37) ) * cos( radians( lat ) )
     *  * cos( radians( lng ) - radians(-122) ) + sin( radians(37) ) * sin(radians(lat)) ) ) AS distance
     * FROM markers
     * HAVING distance < 25
     * ORDER BY distance
     * LIMIT 0 , 20;
     *
     *
     * reference:
     * 1. https://developers.google.com/maps/solutions/store-locator/clothing-store-locator
     * 2. http://www.movable-type.co.uk/scripts/latlong.html
     * 3. https://en.wikipedia.org/wiki/Haversine_formula
     * 4. https://stackoverflow.com/questions/574691/mysql-great-circle-distance-haversine-formula
     *
     * @param $query
     * @param $latitude
     * @param $longitude
     * @param $distance
     */
    public function scopeDistance($query, $latitude, $longitude, $distance)
    {
        $dataset = DB::table('events')
              ->select(DB::raw('id, (3959 * acos( cos( radians('.$latitude.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$longitude.') ) + sin( radians('.$latitude.') ) * sin( radians( lat ) ) ) ) AS distance '))
              ->havingRaw('distance < ?', [$distance])
              ->orderByRaw('distance ASC')->pluck('id');
        Log::info('filter by distance, result id set: '. $dataset);
        $query->whereIn('id', $dataset);
    }

    public function getLocation()
    {
        return $this->location? Str::limit($this->location, 25) : 'N/A';
    }

    public function getTitle()
    {
        return Str::limit($this->title, 25);
    }

    public static function distances4Select() {
        $results = [
            [
                'id' => 5,
                'text' => '5km',
            ],
            [
                'id' => 10,
                'text' => '10km',
            ],
            [
                'id' => 30,
                'text' => '30km',
            ],
            [
                'id' => 50,
                'text' => '50km',
            ]
        ];

        return $results;
    }

    public static function prices4Select() {
        $results = [
            [
                'id' => 0,
                'text' => 'Free',
            ],
            [
                'id' => 10,
                'text' => '<=$10',
            ],
            [
                'id' => 30,
                'text' => '<=$30',
            ],
            [
                'id' => 50,
                'text' => '<=$50',
            ],
            [
                'id' => 100,
                'text' => '<$100',
            ],
            [
                'id' => -1,
                'text' => '>$100',
            ]
        ];

        return $results;
    }

    public function attendeeExists($event_id, $attendee_id)
    {
        $exists = DB::table('event_attendees')
                ->whereEventId($event_id)
                ->whereAttendeeId($attendee_id)
                ->count() > 0;

        return $exists;
    }
}
