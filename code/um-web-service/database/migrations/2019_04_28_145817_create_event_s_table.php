<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->longText('description');

            $table->integer('cover_image_id')->unsigned()->index()->nullable();
            $table->foreign('cover_image_id')->references('id')->on('resources')->onDelete('cascade');

            $table->integer('category_id')->unsigned()->index()->nullable();
            $table->foreign('category_id')->references('id')->on('categories');

            $table->string('location')->nullable();
            $table->string('geohash')->nullable();
            $table->float('lat', 10,6)->nullable();
            $table->float('lng', 10,6)->nullable();

            $table->double('price')->nullable();
            $table->timestamp('start_time')->nullable();
            $table->timestamp('end_time')->nullable();
            $table->timestamp('sign_up_due_time')->nullable();

            $table->integer('poster_id')->unsigned()->index()->nullable();
            $table->foreign('poster_id')->references('id')->on('users');

            $table->integer('coupon_id')->unsigned()->index()->nullable();
            $table->foreign('coupon_id')->references('id')->on('coupons');

            $table->integer('group_limit')->nullable();

            // 1:open 2.in process 3.completed 4:cancelled
            // default 1 open
            $table->integer('status')->default(1);

            // 0: FALSE 1: TRUE
            $table->integer('is_top')->default(0);
            // 0: FALSE 1: TRUE
            $table->integer('is_front')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
