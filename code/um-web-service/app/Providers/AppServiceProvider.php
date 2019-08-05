<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use DB;
use Log;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (env('APP_DEBUG') == true && env('SQL_DEBUG') == true) {
            DB::listen(function($query) {
                Log::debug(
                    $query->sql,
                    $query->bindings,
                    $query->time
                );
            });
        }
    }
}
