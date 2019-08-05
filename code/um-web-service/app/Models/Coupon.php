<?php

namespace App\Models;

use App\Traits\SharedConstants;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Log;

class Coupon extends Model
{
    use SharedConstants;

    /**
     * Get the business that belongs to this Coupon.
     */
    public function business()
    {
        return $this->belongsTo(BusinessPartner::class);
    }

    /**
     * Get the discountType that belongs to this Coupon.
     */
    public function discountType()
    {
        return $this->belongsTo(DiscountType::class);
    }

    public function getName()
    {
        return Str::limit($this->name, 25);
    }

    public function getStartTime()
    {
        return $this->start_time ? Carbon::parse($this->start_time)->format(self::$DATE_TIME_STRING_FORMAT) : "N/A";
    }

    public function getEndTime()
    {
        return $this->end_time ? Carbon::parse($this->end_time)->format(self::$DATE_TIME_STRING_FORMAT) : "N/A";
    }

    public function getCreatedDate()
    {
        return $this->created_at ? Carbon::parse($this->created_at)->format(self::$DATE_TIME_STRING_FORMAT) : "N/A";
    }

    public function getUpdatedDate()
    {
        return $this->updated_at ? Carbon::parse($this->updated_at)->format(self::$DATE_TIME_STRING_FORMAT) : "N/A";
    }

    public function getStatus()
    {
        $status = "";

        // status: 0:inactive 1:active 2:redeemed 3: expired
        if ($this->status == 0) {
            $status = "inactive";
        }
        if ($this->status == 1) {
            $status = "active";
        }
        if ($this->status == 2) {
            $status = "redeemed";
        }
        if ($this->status == 3) {
            $status = "expired";
        }

        return $status;
    }

    /**
     * build data for frontend [Select2 data format]
     *
     * ref: https://select2.org/data-sources/formats
     * @return array
     */
    public static function data4Select($category)
    {
        // Grouped data
        $all_data = BusinessPartner::where('category_id', $category)->get();
        $results = array();
        foreach ($all_data as $buz) {
            $coupons = array();
            foreach ($buz->coupons as $l) {
                $tmp['id'] = $l->id;
                $tmp['text'] = $l->name;
                $coupons[] = $tmp;
            }
            $group['text'] = $buz->name;
            $group['children'] = $coupons;

            if (count($coupons)) {
                $results[] = $group;
            }
        }
        return array("results"=>$results);
    }

    public static function data4Select2($category)
    {
        // Grouped data
        $all_data = BusinessPartner::where('category_id', $category)->get();
        $results = array();
        foreach ($all_data as $buz) {
            $coupons = array();
            foreach ($buz->coupons as $l) {
                $tmp['id'] = $l->id;
                $tmp['text'] = $l->name;
                $coupons[] = $tmp;
            }
            $group['text'] = $buz->name;
            $group['children'] = $coupons;

            if (count($coupons)) {
                $results[] = $group;
            }
        }

        return $results;
    }
}
