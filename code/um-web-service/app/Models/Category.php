<?php

namespace App\Models;

use App\Traits\SharedConstants;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Str;

class Category extends Model
{
    use SharedConstants;
    /**
     * Get the coverImage that belongs to this Category.
     */
    public function coverImage()
    {
        return $this->belongsTo(Resource::class);
    }

    public function getCreatedDate()
    {
        return $this->created_at ? Carbon::parse($this->created_at)->format(self::$DATE_STRING_FORMAT) : "N/A";
    }

    public function getUpdatedDate()
    {
        return $this->updated_at ? Carbon::parse($this->updated_at)->format(self::$DATE_STRING_FORMAT) : "N/A";
    }

    public function getName()
    {
        return Str::limit($this->name, 25);
    }

    /**
     * Get the events for the Category.
     */
    public function events()
    {
        return $this->hasMany(Event::class);
    }

    /**
     * Get the businessPartners for the Category.
     */
    public function businessPartners()
    {
        return $this->hasMany(BusinessPartner::class);
    }
}
