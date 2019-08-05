<?php

namespace App\Models;

use App\Traits\SharedConstants;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Str;

class BusinessPartner extends Model
{
    use SharedConstants;
    /**
     * Get the logo that belongs to this BusinessPartner.
     */
    public function logo()
    {
        return $this->belongsTo(Resource::class);
    }

    /**
     * Get the category that belongs to this BusinessPartner.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the coupons for the BusinessPartner.
     */
    public function coupons()
    {
        return $this->hasMany(Coupon::class,'business_id');
    }

    public function getStatus()
    {
        $status = "";

        // status: 0:inactive 1:active 2:suspended 3:archived
        if ($this->status == 0) {
            $status = "inactive";
        }
        if ($this->status == 1) {
            $status = "active";
        }
        if ($this->status == 2) {
            $status = "suspended";
        }
        if ($this->status == 3) {
            $status = "archived";
        }

        return $status;
    }

    public function getLocation()
    {
        return Str::limit($this->location, 25);
    }

    public function getName()
    {
        return Str::limit($this->name, 25);
    }

    public function getCreatedDate()
    {
        return $this->created_at ? Carbon::parse($this->created_at)->format(self::$DATE_TIME_STRING_FORMAT) : "N/A";
    }

    public function getUpdatedDate()
    {
        return $this->updated_at ? Carbon::parse($this->updated_at)->format(self::$DATE_TIME_STRING_FORMAT) : "N/A";
    }

}
