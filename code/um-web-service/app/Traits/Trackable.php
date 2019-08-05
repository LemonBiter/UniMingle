<?php

namespace App\Traits;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

trait Trackable
{

    public function cacheKey()
    {
        return sprintf(
            "%s/%s-%s",
            $this->getTable(),
            $this->getKey(),
            $this->updated_at->timestamp
        );
    }

    public static function bootTrackable()
    {
        static::created(function ($model) {
            $cacheKey = static::class;
            Log::debug('on created model ' . $cacheKey . ' model id->' . $model->id);
//            Cache::tags($cacheKey)->flush();
        });

        static::updated(function ($model) {
            $cacheKey = static::class;
            Log::debug('on updated model ' . $cacheKey . ' model id->' . $model->id);
//            Cache::tags($cacheKey)->flush();
        });

        static::deleted(function ($model) {
            $cacheKey = static::class;
            Log::debug('on deleted model ' . $cacheKey . ' model id->' . $model->id);
//            Cache::tags($cacheKey)->flush();
        });
    }

}